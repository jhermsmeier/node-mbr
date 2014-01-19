var read = require( 'fs' ).readFileSync
var assert = require( 'assert' )
var MBR = require( '../' )

const DATAPATH = __dirname + '/data'

var data = {
  classic: read( DATAPATH + '/classic.bin' ),
}

describe( 'Master Boot Record', function() {
  
  describe( 'CLASSIC', function() {
    
    var mbr = new MBR()
    
    it( 'should be able to parse the MBR', function() {
      mbr.parse( data.classic )
    })
    
    it( 'should have a table offset of 446', function() {
      assert.equal( mbr.tableOffset, 446 )
    })
    
    it( 'should contain 4 partition entries', function() {
      assert.equal( mbr.partitions.length, 4 )
    })
    
    describe( 'Partition #1', function() {
      
      var mbr = new MBR( data.classic )
      var part = mbr.partitions[0]
      
      it( 'should be of type 0xEE (GPT, Protective MBR)', function() {
        assert.equal( part.type, 0xEE )
      })
      
    })
    
    describe( 'Partition #2', function() {
      
      var mbr = new MBR( data.classic )
      var part = mbr.partitions[1]
      
      it( 'should be of type 0xAF (Apple HFS)', function() {
        assert.equal( part.type, 0xAF )
      })
      
    })
    
    describe( 'Partition #3', function() {
      
      var mbr = new MBR( data.classic )
      var part = mbr.partitions[2]
      
      it( 'should be of type 0xAB (Apple Boot)', function() {
        assert.equal( part.type, 0xAB )
      })
      
    })
    
    describe( 'Partition #4', function() {
      
      var mbr = new MBR( data.classic )
      var part = mbr.partitions[3]
      
      it( 'should be of type 0x07 (Windows)', function() {
        assert.equal( part.type, 0x07 )
      })
      
    })
    
  })
  
})
