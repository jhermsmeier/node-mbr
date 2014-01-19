var MBR = require( './mbr' )
var CHS = require( 'chs' )

function AAP( buffer ) {
  
  if( !(this instanceof AAP) )
    return new AAP( buffer )
  
  // MBR type name
  this.type = this.constructor.name
  // Bootloader code
  this.code = new Buffer( 428 )
  // AAP Record
  this.aap = new AAP.Record()
  // Partition table offset
  this.tableOffset = 0x1BE
  // Partition table
  this.partitions = [
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
  ]
  
  if( buffer != null ) {
    this.parse( buffer )
  }
  
}

module.exports = AAP

AAP.Record = require( './aap-record' )

AAP.prototype = {
  
  constructor: AAP,
  
  parse: function( buffer ) {
    
    this.aap.parse( buffer.slice( 0x1AE, 0x1BA ) )
    
    var i, count = this.partitions.length
    var offset = this.tableOffset
    
    for( i = 0; i < count; i++ ) {
      this.partitions[i].parse(
        buffer.slice( offset, offset += 0x10 )
      )
    }
    
    return this
    
  },
  
  toBuffer: function() {
    
    return Buffer.concat([
      this.code,
      this.aap.toBuffer(),
      this.partitions[0].toBuffer(),
      this.partitions[1].toBuffer(),
      this.partitions[2].toBuffer(),
      this.partitions[3].toBuffer(),
    ])
    
  }
  
}
