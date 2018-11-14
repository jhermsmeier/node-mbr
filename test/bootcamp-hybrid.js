var fs = require( 'fs' )
var path = require( 'path' )
var assert = require( 'assert' )
var inspect = require( './inspect' )
var MBR = require( '../' )

describe( 'Bootcamp Hybrid MBR', function() {

  var mbr = null
  var buffer = fs.readFileSync( path.join( __dirname, 'data', 'bootcamp-hybrid.bin' ) )

  it( 'should be able to detect the correct format', function() {
    var format = MBR.detectFormat( buffer )
    assert.equal( format, 'CLASSIC' )
  })

  it( 'should be able to parse the MBR', function() {
    mbr = MBR.parse( buffer )
    // console.log( inspect( mbr ) )
  })

  it( 'should have a table offset of 446', function() {
    assert.equal( mbr.tableOffset, 446 )
  })

  it( 'should contain 4 partition entries', function() {
    assert.equal( mbr.partitions.length, 4 )
  })

  it( 'should detect the EFI partition', function() {
    assert.equal( mbr.getEFIPart(), mbr.partitions[0] )
  })

  describe( 'Partition #1', function() {

    var mbr = MBR.parse( buffer )
    var part = mbr.partitions[0]

    it( 'should be of type 0xEE (GPT, Protective MBR)', function() {
      assert.equal( part.type, 0xEE )
    })

  })

  describe( 'Partition #2', function() {

    var mbr = MBR.parse( buffer )
    var part = mbr.partitions[1]

    it( 'should be of type 0xAF (Apple HFS)', function() {
      assert.equal( part.type, 0xAF )
    })

  })

  describe( 'Partition #3', function() {

    var mbr = MBR.parse( buffer )
    var part = mbr.partitions[2]

    it( 'should be of type 0xAB (Apple Boot)', function() {
      assert.equal( part.type, 0xAB )
    })

  })

  describe( 'Partition #4', function() {

    var mbr = MBR.parse( buffer )
    var part = mbr.partitions[3]

    it( 'should be of type 0x07 (Windows)', function() {
      assert.equal( part.type, 0x07 )
    })

  })

})
