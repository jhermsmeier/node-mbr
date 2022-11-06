var fs = require( 'fs' )
var path = require( 'path' )
var assert = require( 'assert' )
var inspect = require( './inspect' )
var MBR = require( '../' )

var samples = fs.readdirSync( path.join( __dirname, 'data' ) )
  .map( function( filename ) {
    return path.join( __dirname, 'data', filename )
  })

context( 'Samples', function() {

  samples.forEach( function( filename ) {

    var basename = path.basename( filename, '.bin' )

    context( basename, function() {

      var buffer = null

      before( 'fs.readFileSync', function() {
        buffer = fs.readFileSync( filename )
      })

      test( `should parse`, function() {
        var mbr = MBR.parse( buffer )
        // console.log( inspect( mbr ) )
        assert.ok( mbr instanceof MBR )
        assert.equal( mbr.partitions.length, mbr.constructor.PARTITION_ENTRIES )
        var efiPart = mbr.getEFIPart()
        if( efiPart ) {
          assert.ok(
            efiPart.type === 0xEF || efiPart.type === 0xEE,
            `Invalid EFI partition type ${efiPart.type} (0x${efiPart.type.toString(16)})`
          )
        }
      })

      test( 'input / output equality', function() {
        var mbr = MBR.parse( buffer )
        assert.deepEqual( mbr.write(), buffer )
      })

    })

  })

})
