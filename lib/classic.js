var MBR = require( './mbr' )

function CLASSIC( buffer ) {
  
  if( !(this instanceof CLASSIC) )
    return new CLASSIC( buffer )
  
  // MBR type name
  this.type = this.constructor.name
  // Bootloader code
  this.code = new Buffer( 446 )
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

module.exports = CLASSIC

CLASSIC.prototype = {
  
  constructor: CLASSIC,
  
  parse: function( buffer ) {
    
    this.code = buffer.slice( 0, 0x1BE )
    
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
      this.partitions[0].toBuffer(),
      this.partitions[1].toBuffer(),
      this.partitions[2].toBuffer(),
      this.partitions[3].toBuffer(),
    ])
    
  }
  
}
