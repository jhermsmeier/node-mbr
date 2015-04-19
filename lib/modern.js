var inherit = require( 'bloodline' )
var MBR = require( './mbr' )
var isBuffer = Buffer.isBuffer

/**
 * MODERN
 * @param {Buffer} buffer (optional)
 * @param {Number} start (optional)
 * @param {Number} end (optional)
 * @return {MODERN}
 */
function MODERN( buffer, start, end ) {
  
  if( !(this instanceof MODERN) )
    return new MODERN( buffer, start, end )
  
  // Original physical drive (80h-FFh)
  this.physicalDrive = 0x80
  // Disk timestamp (optional)
  this.timestamp = new Buffer( 3 )
  // Disk signature (32bit, optional)
  this.signature = 0x00000000
  
  MBR.call( this, buffer, start, end )
  
}

/**
 * [TABLE_OFFSET description]
 * @type {Number}
 */
MODERN.TABLE_OFFSET = 0x1BE

/**
 * [PARTITION_ENTRIES description]
 * @type {Number}
 */
MODERN.PARTITION_ENTRIES = 4

/**
 * MODERN prototype
 * @type {Object}
 */
MODERN.prototype = {
  
  constructor: MODERN,
  
  get buffer() {
    // TODO
  },
  
  set buffer( value ) {
    
    if( !isBuffer( value ) )
      throw new TypeError( 'Value must be a Buffer' )
    
    this.physicalDrive = value.readUInt8( 0x0DC )
    
    // TODO: Parse timestamp properly
    this.timestamp = [].slice.call( value.slice( 0x0DD, 0x0E0 ) )
    
    this.signature = value.readUInt16LE( 0x1BC ) === 0 ?
      value.readUInt32LE( 0x1B8 ) : 0
    
    var endOfCode = this.signature ? 0x1BE : 0x1B8
    
    this.code = [
      new MBR.Code( value, 0, 0x0DA ),
      new MBR.Code( value, 0x0E0, endOfCode ),
    ]
    
    var i, count = this.partitionEntries
    var offset = this.tableOffset
    
    for( i = 0; i < count; i++ ) {
      this.partitions[i].buffer =
        value.slice( offset, offset += 0x10 )
    }
    
  },
  
}

inherit( MODERN, MBR )
// Exports
module.exports = MODERN
