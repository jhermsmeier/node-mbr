var MBR = require( './mbr' )

function MODERN( buffer ) {
  
  if( !(this instanceof MODERN) )
    return new MODERN( buffer )
  
  // MBR type name
  this.type = this.constructor.name
  // Bootloader code
  this.code = new Buffer( 440 )
  // Original physical drive (80h-FFh)
  this.physicalDrive = 0x80
  // Disk timestamp (optional)
  this.timestamp = new Buffer( 3 )
  // Disk signature (32bit, optional)
  this.signature = 0x00000000
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

module.exports = MODERN

MODERN.prototype = {
  
  constructor: MODERN,
  
  parse: function( buffer ) {
    
    this.physicalDrive = buffer.readUInt8( 0x0DC )
    
    this.timestamp = [].slice.call( buffer.slice( 0x0DD, 0x0E0 ) )
    
    this.signature = buffer.readUInt16LE( 0x1BC ) === 0 ?
      buffer.readUInt32LE( 0x1B8 ) : 0
    
    var endOfCode = this.signature ? 0x1BE : 0x1B8
    
    this.code = Buffer.concat([
      buffer.slice( 0, 0x0DA ),
      buffer.slice( 0x0E0, endOfCode ),
    ])
    
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
    
  }
  
}
