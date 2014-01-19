function Record( buffer ) {
  
  if( !(this instanceof Record) )
    return new Record( buffer )
  
  // AAP physical drive (80h-FEh; 00h: not used; 01h-7Fh, FFh: reserved)
  this.physicalDrive = 0x00
  // CHS (start) address of AAP partition/image file or VBR/EBR
  this.firstCHS = new CHS()
  // AAP partition type (00h if not used) (optional)
  this.partitionType = 0x00
  // CHS end address in AAP (optional, 000000h if not used)
  this.lastCHS = new CHS()
  // Start LBA of AAP image file or VBR/EBR
  this.firstLBA = 0x00000000
  // Reserved for sectors in AAP
  // (optional; 00000000h if not used)
  this.sectors = 0x00000000
  
  if( buffer != null ) {
    this.parse( buffer )
  }
  
}

module.exports = Record

Record.prototype = {
  
  constructor: Record,
  
  parse: function( buffer ) {
    
    this.physicalDrive   = buffer.readUInt8( 0x00 )
    this.firstCHS.buffer = buffer.slice( 1, 4 )
    this.partitionType   = buffer.readUInt8( 0x04 )
    this.lastCHS.buffer  = buffer.slice( 5, 8 )
    this.firstLBA        = buffer.readUInt32LE( 8 )
    this.sectors         = buffer.readUInt32LE( 12 )
    
    return this
    
  },
  
  toBuffer: function() {
    
    var buffer = new Buffer( 0x10 )
    
    buffer.writeUInt8( this.physicalDrive, 0x00 )
    buffer.writeUInt8( this.partitionType, 0x04 )
    buffer.writeUInt32LE( this.firstLBA, 8 )
    buffer.writeUInt32LE( this.sectors, 12 )
    
    this.firstCHS.buffer.copy( buffer, 1 )
    this.lastCHS.buffer.copy( buffer, 5 )
    
    return buffer
    
  }
  
}
