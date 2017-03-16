var fs = require( 'fs' )
var path = require( 'path' )
var assert = require( 'assert' )
var inspect = require( './inspect' )
var MBR = require( '../' )

var samples = fs.readdirSync( path.join( __dirname, 'data' ) )
  .map( function( filename ) {
    return path.join( __dirname, 'data', filename )
  })

describe( 'Samples', function() {

  samples.forEach( function( filename ) {

    var basename = path.basename( filename, '.bin' )

    specify( `should parse ${basename} format`, function() {
      var buffer = fs.readFileSync( filename )
      var mbr = MBR.parse( buffer )
      // console.log( inspect( mbr ) )
      assert.ok( mbr instanceof MBR )
      assert.equal( mbr.partitions.length, mbr.constructor.PARTITION_ENTRIES )
    })

  })

})
