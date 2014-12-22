var CHS = require( 'chs' )

/**
 * MBR Partition Entry Constructor
 * @param {Object} options
 */
function Partition( options ) {
  
  if( !(this instanceof Partition) )
    return new Partition( options )
  
  // Partition status
  //  0x80      = active
  //  0x00      = inactive
  //  0x01-0x7F = invalid
  this.status = 0x00
  // Partition type (see partition-types)
  this.type = 0x00
  this.info = []
  
  this.sectors = 0x00
  
  this.firstLBA = 0x00
  this.firstCHS = new CHS()
  this.lastCHS = new CHS()
  
}

// Exports
module.exports = Partition

/**
 * MBR Partition Types
 * @type {Object}
 */
Partition.TYPES = require( './partition-types' )

/**
 * Partition Prototype
 * @type {Object}
 */
Partition.prototype = {
  
  constructor: Partition,
  
  get lastLBA() {
    return this.firstLBA + this.sectors
  },
  
  parse: function( value ) {
    
    var buffer = Buffer.isBuffer( value ) ?
      value : new Buffer( value )
    
    if( buffer.length !== 16 ) {
      throw new SyntaxError(
        'Partition entry size unacceptable:' +
        'expected 16 bytes, but got ' + data.length
      )
    }
    
    this.status   = buffer.readUInt8( 0 )
    this.type     = buffer.readUInt8( 4 )
    this.firstLBA = buffer.readUInt32LE( 8 )
    this.sectors  = buffer.readUInt32LE( 12 )
    
    this.info = Partition.TYPES[ this.type ] &&
      Partition.TYPES[ this.type ].slice()
    
    this.firstCHS.buffer = buffer.slice( 1, 4 )
    this.lastCHS.buffer = buffer.slice( 5, 8 )
    
    return this
    
  },
  
  toBuffer: function() {
    
    var buffer = new Buffer( 0x10 )
    
    buffer.writeUInt8( this.status, 0 )
    buffer.writeUInt8( this.type, 4 )
    buffer.writeUInt32LE( this.firstLBA, 8 )
    buffer.writeUInt32LE( this.sectors, 12 )
    
    this.firstCHS.buffer.copy( buffer, 1 )
    this.lastCHS.buffer.copy( buffer, 5 )
    
    return buffer
    
  }
  
}
