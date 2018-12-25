var bench = require( 'nanobench' )
var fs = require( 'fs' )
var path = require( 'path' )
var MBR = require( '..' )

const ITERATIONS = 1000000

bench( `MBR.detectFormat() ⨉ ${ITERATIONS}`, function( run ) {

  var filename = path.join( __dirname, '..', 'test', 'data', 'syslinux.bin' )
  var buffer = fs.readFileSync( filename )
  var mbr = null

  run.start()
  for( var i = 0; i < ITERATIONS; i++ ) {
    mbr = MBR.detectFormat(buffer)
  }
  run.end()

})

bench( `MBR#getEFIPart() ⨉ ${ITERATIONS}`, function( run ) {

  var filename = path.join( __dirname, '..', 'test', 'data', 'bootcamp-hybrid.bin' )
  var buffer = fs.readFileSync( filename )
  var mbr = MBR.parse(buffer)
  var efiPart = null

  run.start()
  for( var i = 0; i < ITERATIONS; i++ ) {
    efiPart = mbr.getEFIPart()
  }
  run.end()

})

bench( `MBR.parse(rpi3) ⨉ ${ITERATIONS}`, function( run ) {

  var filename = path.join( __dirname, '..', 'test', 'data', 'rpi3.bin' )
  var buffer = fs.readFileSync( filename )
  var mbr = null

  run.start()
  for( var i = 0; i < ITERATIONS; i++ ) {
    mbr = MBR.parse(buffer)
  }
  run.end()

})

bench( `MBR.parse(rufus) ⨉ ${ITERATIONS}`, function( run ) {

  var filename = path.join( __dirname, '..', 'test', 'data', 'rufus.bin' )
  var buffer = fs.readFileSync( filename )
  var mbr = null

  run.start()
  for( var i = 0; i < ITERATIONS; i++ ) {
    mbr = MBR.parse(buffer)
  }
  run.end()

})

bench( `MBR.parse(bootcamp) ⨉ ${ITERATIONS}`, function( run ) {

  var filename = path.join( __dirname, '..', 'test', 'data', 'bootcamp-hybrid.bin' )
  var buffer = fs.readFileSync( filename )
  var mbr = null

  run.start()
  for( var i = 0; i < ITERATIONS; i++ ) {
    mbr = MBR.parse(buffer)
  }
  run.end()

})

bench( `MBR.parse(syslinux) ⨉ ${ITERATIONS}`, function( run ) {

  var filename = path.join( __dirname, '..', 'test', 'data', 'syslinux.bin' )
  var buffer = fs.readFileSync( filename )
  var mbr = null

  run.start()
  for( var i = 0; i < ITERATIONS; i++ ) {
    mbr = MBR.parse(buffer)
  }
  run.end()

})

bench( `MBR.parse(rpi) ⨉ ${ITERATIONS}`, function( run ) {

  var filename = path.join( __dirname, '..', 'test', 'data', 'rpi.bin' )
  var buffer = fs.readFileSync( filename )
  var mbr = null

  run.start()
  for( var i = 0; i < ITERATIONS; i++ ) {
    mbr = MBR.parse(buffer)
  }
  run.end()

})
