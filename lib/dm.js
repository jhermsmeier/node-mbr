var MBR = require( './mbr' )

function AST( buffer ) {
  
  if( !(this instanceof AST) )
    return new AST( buffer )
  
  // MBR type name
  this.type = this.constructor.name
  // Bootloader code
  this.code = new Buffer( 252 )
  // Partition table offset
  this.tableOffset = 0x0FE
  // Partition table
  this.partitions = [
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
  ]
  
  if( buffer != null ) {
    this.parse( buffer )
  }
  
}

module.exports = AST

AST.prototype = {
  
  constructor: AST,
  
  parse: function( buffer ) {
    
    this.code = buffer.slice( 0, 0x0FE )
    
    var i, count = 4
    var offset = 0x1BE
    
    // Read in primary partitions first
    for( i = 0; i < count; i++ ) {
      this.partitions[i].parse(
        buffer.slice( offset, offset += 0x10 )
      )
    }
    
    count *= 4
    offset = this.tableOffset
    
    // Then extended partition entries,
    // to keep the array order sane
    for( i = 4; i < count; i++ ) {
      this.partitions[i].parse(
        buffer.slice( offset, offset += 0x10 )
      )
    }
    
    return this
    
  },
  
  toBuffer: function() {
    
    var buffers = [ this.code ]
    
    this.partitions.forEach( function( part ) {
      buffers.push( part.toBuffer() )
    })
    
    return Buffer.concat( buffers )
    
  }
  
}
