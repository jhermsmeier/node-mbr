var CHS = require( 'chs' )

function Record( buffer ) {
  
  if( !(this instanceof Record) )
    return new Record( buffer )
  
  // NEWLDR record size
  this.size = 0x16
  // Physical drive and boot flag
  // (80h-FEh, 00h-7Eh, FFh, 7Fh)
  // (optional, zero if not used)
  this.physicalDrive = 0x00
  // CHS address of LOADER boot sector or
  // image file (f.e. IBMBIO.LDR)
  // (000000h if not used)
  this.firstCHS = new CHS()
  // Allowed DL minimum, else take
  // from partition table
  // (80h: default; 00h: always use DL;
  // FFh: always use table entry)
  this.minDL = 0x00
  // LBA of LOADER boot sector or
  // image file (optional)
  this.firstLBA = 0x00000000
  // Patch offset of VBR boot unit
  // (default 0000h if not used, else 0024h or 01FDh)
  this.patchOffset = 0x0000
  // Checksum (0000h if not used)
  this.checksum = 0x0000
  // OEM loader signature (optional)
  // ("MSWIN4" for REAL/32, see also offset +0DAh,
  // corresponds with OEM label at offset +003h in VBRs)
  this.signature = 'MSWIN4'
  
  if( buffer != null ) {
    this.parse( buffer )
  }
  
}

module.exports = Record

Record.prototype = {
  
  constructor: Record,
  
  parse: function( buffer ) {
    
    this.size = buffer.readUInt8( 1 )
    // 6 byte "NEWLDR" signature
    this.physicalDrive   = buffer.readUInt8( 8 )
    this.firstCHS.buffer = buffer.slice( 9, 12 )
    this.minDL           = buffer.readUInt8( 12 )
    // 3 reserved bytes
    this.firstLBA        = buffer.readUInt32LE( 16 )
    this.patchOffset     = buffer.readUInt16LE( 20 )
    this.checksum        = buffer.readUInt16LE( 22 )
    this.signature       = buffer.toString( 'ascii', 24 )
    
    return this
    
  },
  
  toBuffer: function() {
    
    var buffer = new Buffer( 30 )
        buffer.fill( 0 )
    
    buffer[0] = 0xEB // JPMS
    buffer.writeUInt8( this.size, 1 )
    buffer.write( 'NEWLDR', 2, 'ascii' )
    
    buffer.writeUInt8( this.physicalDrive, 8 )
    this.firstCHS.buffer.copy( buffer, 9 )
    buffer.writeUInt8( this.minDL, 12 )
    // 3 reserved bytes
    buffer.writeUInt32LE( this.firstLBA, 16 )
    buffer.writeUInt16LE( this.patchOffset, 20 )
    buffer.writeUInt16LE( this.checksum, 22 )
    buffer.write( this.signature, 24, 'ascii' )
    
    return buffer
    
  }
  
}
