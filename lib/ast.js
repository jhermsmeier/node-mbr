var MBR = require( './mbr' )

function AST( buffer ) {
  
  if( !(this instanceof AST) )
    return new AST( buffer )
  
  // MBR type name
  this.type = this.constructor.name
  // Bootloader code
  this.code = new Buffer( 380 )
  // Partition table offset
  this.tableOffset = 0x17E
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
  ]
  
  if( buffer != null ) {
    this.parse( buffer )
  }
  
}

module.exports = AST

AST.prototype = {
  
  constructor: AST,
  
  parse: function( buffer ) {
    
    this.code = buffer.slice( 0, 0x17E )
    
    var i, count = 4
    var offset = 0x1BE
    
    // Read in primary partitions first
    for( i = 0; i < count; i++ ) {
      this.partitions[i].parse(
        buffer.slice( offset, offset += 0x10 )
      )
    }
    
    count += count
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
    
    return Buffer.concat([
      this.code,
      this.partitions[0].toBuffer(),
      this.partitions[1].toBuffer(),
      this.partitions[2].toBuffer(),
      this.partitions[3].toBuffer(),
      this.partitions[4].toBuffer(),
      this.partitions[5].toBuffer(),
      this.partitions[6].toBuffer(),
      this.partitions[7].toBuffer(),
    ])
    
  }
  
}
