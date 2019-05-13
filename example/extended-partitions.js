#!/usr/bin/env node

var MBR = require( '..' )
var inspect = require( '../test/inspect' )
var fs = require( 'fs' )
var argv = process.argv.slice( 2 )

var filename = argv.shift()
var blockSize = argv.shift() || 512

if( !filename ) {
  console.error( 'Usage: node example/extended-partitions.js <filename> [block-size]' )
  process.exit( 1 )
}

var fd = fs.openSync( filename, 'r' )

var length = MBR.SIZE
var buffer = Buffer.alloc( length )
var offset = 0
var position = 0

fs.readSync( fd, buffer, offset, length, position )

var mbr = MBR.parse( buffer )

console.log( '\nMBR', inspect( mbr ) )

// Get all extended partitions
var extendedPartitions = mbr.getExtendedPartitions()
var logicalPartitions = []

console.log( '\nExtended partitions:', inspect( extendedPartitions ) )

extendedPartitions.forEach(( partition ) => {

  var ebr = null

  while( true ) {

    var position = ebr && ebr.partitions[1].extended ?
      ( partition.firstLBA + ebr.partitions[1].firstLBA ) * blockSize :
      ( partition.firstLBA ) * blockSize

    var bytesRead = fs.readSync( fd, buffer, offset, length, position )
    if( bytesRead !== 512 ) {
      console.error( '\n[ERROR]', 'EBR out of bounds of disk image' )
      fs.closeSync( fd )
      process.exit( 1 )
    }

    ebr = MBR.parse( buffer )

    // console.log( '\nExtended', inspect( ebr ) )

    var logicalPartition = new MBR.Partition()

    logicalPartition.status = ebr.partitions[0].status
    logicalPartition.type = ebr.partitions[0].type
    logicalPartition.sectors = ebr.partitions[0].sectors
    logicalPartition.firstLBA = ebr.partitions[0].firstLBA + ( position / blockSize )
    ebr.partitions[0].firstCHS.copy( logicalPartition.firstCHS )
    ebr.partitions[0].lastCHS.copy( logicalPartition.lastCHS )

    logicalPartitions.push( logicalPartition )

    if( !ebr.partitions[1].extended ) {
      break
    }

  }

})

console.log( '\nLogical partitions:', logicalPartitions )
console.log( '\nAll partitions:', [].concat( mbr.partitions.filter(( p ) => !p.extended ), logicalPartitions ) )

fs.closeSync( fd )
