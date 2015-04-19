var CHS = require( 'chs' )
var isBuffer = Buffer.isBuffer

/**
 * MBR Partition
 * @param {Buffer} buffer (optional)
 * @param {Number} start (optional)
 * @param {Number} end (optional)
 * @return {Partition}
 */
function Partition( buffer, start, end ) {
  
  if( !(this instanceof Partition) )
    return new Partition( buffer, start, end )
  
  if( buffer != null && !isBuffer( buffer ) )
    throw new TypeError( 'Argument must be a Buffer' )
  
  this.status = 0x00
  this.type = 0x00
  this.sectors = 0x00
  this.firstLBA = 0x00
  this.firstCHS = new CHS()
  this.lastCHS = new CHS()
  
  if( buffer != null ) {
    this.buffer = buffer.slice( start, end )
  }
  
}

/**
 * Parse a MBR Partition structure
 * @param {Buffer} buffer (optional)
 * @param {Number} start (optional)
 * @param {Number} end (optional)
 * @return {Partition}
 */
Partition.parse = function( buffer, start, end ) {
  return new Partition( buffer, start, end )
}

/**
 * Partition prototype
 * @type {Object}
 */
Partition.prototype = {
  
  constructor: Partition,
  
  get statusText() {
    switch( this.status ) {
      case 0x80: return 'active'; break
      case 0x00: return 'inactive'; break
      default:   return 'invalid'; break
    }
  },
  
  get extended() {
    throw new Error( 'Not implemented' )
  },
  
  get lastLBA() {
    return this.firstLBA + this.sectors
  },
  
  byteOffset: function( blockSize ) {
    blockSize = blockSize || 512
    return this.firstLBA * blockSize
  },
  
  byteSize: function( blockSize ) {
    return this.sectors * blockSize
  },
  
  get buffer() {
    
    var buffer = new Buffer( 0x10 )
    
    buffer.writeUInt8( this.status, 0 )
    buffer.writeUInt8( this.type, 4 )
    buffer.writeUInt32LE( this.firstLBA, 8 )
    buffer.writeUInt32LE( this.sectors, 12 )
    
    this.firstCHS.buffer.copy( buffer, 1 )
    this.lastCHS.buffer.copy( buffer, 5 )
    
    return buffer
    
  },
  
  set buffer( value ) {
    
    if( !isBuffer( value ) )
      throw new TypeError( 'Argument must be a Buffer' )
    
    if( value.length < 16 ) {
      throw new SyntaxError(
        'Partition entry size unacceptable:' +
        'expected 16 bytes, but got ' + data.length
      )
    }
    
    this.status   = value.readUInt8( 0 )
    this.type     = value.readUInt8( 4 )
    this.firstLBA = value.readUInt32LE( 8 )
    this.sectors  = value.readUInt32LE( 12 )
    
    this.firstCHS.buffer = value.slice( 1, 4 )
    this.lastCHS.buffer = value.slice( 5, 8 )
    
  },
  
}

// Exports
module.exports = Partition
