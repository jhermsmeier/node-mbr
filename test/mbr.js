var MBR = require( '..' )
var assert = require( 'assert' )
var crypto = require( 'crypto' )
var inspect = require( './inspect' )

var formats = [
  'Classic',
  'Modern',
  'NewLdr',
  'DiskManager',
  'AAP',
  'AST',
]

context( 'MBR.detectFormat()', function() {

  test( 'throws if buffer has invalid MBR signature', function() {
    var buffer = crypto.randomBytes( MBR.SIZE )
    assert.throws( function() {
      var format = new MBR.detectFormat( buffer )
    })
  })

  test( 'does not throw if noAssert is true', function() {
    var buffer = crypto.randomBytes( MBR.SIZE )
    var format = MBR.detectFormat( buffer, 0, true )
    assert.strictEqual( format, 'CLASSIC' )
  })

})

formats.forEach( function( format ) {

  context( `MBR.${format}`, function() {

    context( 'constructor', function() {

      test( 'has matching initialized partition count', function() {
        var mbr = new MBR[ format ]()
        assert.equal( mbr.partitions.length, MBR[ format ].PARTITION_ENTRIES )
      })

      test( 'has matching initialized code regions', function() {

        var mbr = new MBR[ format ]()
        var length = MBR[ format ].CODE_REGION.end - MBR[ format ].CODE_REGION.start

        assert.strictEqual( mbr.code.length, length )
        assert.strictEqual( mbr.code.offset, MBR[ format ].CODE_REGION.start )
        assert.strictEqual( mbr.code.data.length, length )

      })

    })

    context( '#parse()', function() {

      test( 'throws if buffer has invalid MBR signature', function() {
        var buffer = Buffer.alloc( MBR.SIZE )
        assert.throws( function() {
          var mbr = new MBR[ format ]().parse( buffer )
        })
      })

      test( 'does not throw if noAssert is true', function() {
        var buffer = Buffer.alloc( MBR.SIZE )
        var mbr = new MBR[ format ]().parse( buffer, 0, true )
      })

    })

    context( '#write()', function() {

      test( 'input / output equality', function() {
        var buffer = crypto.randomBytes( MBR.SIZE )
        var mbr = new MBR[ format ]().parse( buffer, 0, true )
        var output = mbr.write()
        assert.strictEqual( output.length, buffer.length )
        assert.deepEqual( output, buffer )
      })

    })

  })

})
