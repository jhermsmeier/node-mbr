var inherit = require( 'bloodline' )
var MBR = require( '../mbr' )
var isBuffer = Buffer.isBuffer

/**
 * DM
 * @param {Buffer} buffer (optional)
 * @param {Number} start (optional)
 * @param {Number} end (optional)
 * @return {DM}
 */
function DM( buffer, start, end ) {
  
  if( !(this instanceof DM) )
    return new DM( buffer, start, end )
  
  MBR.call( this, buffer, start, end )
  
}

/**
 * [TABLE_OFFSET description]
 * @type {Number}
 */
DM.TABLE_OFFSET = 0x0FE

/**
 * [PARTITION_ENTRIES description]
 * @type {Number}
 */
DM.PARTITION_ENTRIES = 16

/**
 * DM prototype
 * @type {Object}
 */
DM.prototype = {
  
  constructor: DM,
  
  get buffer() {
    
    var buffers = [ this.code[0].data ]
    
    // Add DM extended partition entries
    for( var i = 4; i < DM.PARTITION_ENTRIES; i++ ) {
      buffers.push( this.partitions[i].buffer )
    }
    
    // Append primary partition entries
    for( var i = 0; i < 4; i++ ) {
      buffers.push( this.partitions[i].buffer )
    }
    
    return Buffer.concat( buffers )
    
  },
  
  set buffer( value ) {
    
    if( !isBuffer( value ) )
      throw new TypeError( 'Value must be a Buffer' )
    
    this.code = [
      new MBR.Code( value, 0, 0x0FE )
    ]
    
    var i, count = 4
    var offset = 0x1BE
    
    // Read in primary partitions first
    for( i = 0; i < count; i++ ) {
      this.partitions[i].buffer =
        value.slice( offset, offset += 0x10 )
    }
    
    count *= 4
    offset = this.tableOffset
    
    // Then extended partition entries,
    // to keep the array order sane
    for( i = 4; i < count; i++ ) {
      this.partitions[i].buffer =
        value.slice( offset, offset += 0x10 )
    }
    
  },
  
}

inherit( DM, MBR )
// Exports
module.exports = DM
