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

describe( 'MBR.detectFormat()', function() {

  specify( 'throws if buffer has invalid MBR signature', function() {
    var buffer = crypto.randomBytes( MBR.SIZE )
    assert.throws( function() {
      var format = new MBR.detectFormat( buffer )
    })
  })

  specify( 'does not throw if noAssert is true', function() {
    var buffer = crypto.randomBytes( MBR.SIZE )
    var format = MBR.detectFormat( buffer, 0, true )
    assert.strictEqual( format, 'CLASSIC' )
  })

})

formats.forEach( function( format ) {

  describe( `MBR.${format}`, function() {

    describe( 'constructor', function() {

      specify( 'has matching initialized partition count', function() {
        var mbr = new MBR[ format ]()
        assert.equal( mbr.partitions.length, MBR[ format ].PARTITION_ENTRIES )
      })

      specify( 'has matching initialized code regions', function() {
        var mbr = new MBR[ format ]()
        assert.strictEqual( mbr.code.length, MBR[ format ].CODE_REGIONS.length )
        mbr.code.forEach( function( codeRegion, i ) {
          var region = MBR[ format ].CODE_REGIONS[i]
          assert.equal( codeRegion.length, region.end - region.start )
        })
      })

    })

    describe( '#parse()', function() {

      specify( 'throws if buffer has invalid MBR signature', function() {
        var buffer = Buffer.alloc( MBR.SIZE )
        assert.throws( function() {
          var mbr = new MBR[ format ]().parse( buffer )
        })
      })

      specify( 'does not throw if noAssert is true', function() {
        var buffer = Buffer.alloc( MBR.SIZE )
        var mbr = new MBR[ format ]().parse( buffer, 0, true )
      })

    })

    describe( '#write()', function() {

      specify( 'input / output equality', function() {
        var buffer = crypto.randomBytes( MBR.SIZE )
        var mbr = new MBR[ format ]().parse( buffer, 0, true )
        var output = mbr.write()
        assert.strictEqual( output.length, buffer.length )
        assert.deepEqual( output, buffer )
      })

    })

  })

})
