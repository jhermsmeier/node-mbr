var inherit = require( 'bloodline' )
var MBR = require( '../mbr' )
var isBuffer = Buffer.isBuffer

/**
 * DM (Disk Manager)
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
 * Partition table offset
 * @type {Number}
 */
DM.TABLE_OFFSET = 0x0FE

/**
 * Partition table entry count
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
    
    var buffer = MBR.createBuffer()
    var offset = this.tableOffset
    
    this.code[0].data.copy( buffer, this.code[0].offset )
    
    // Add DM extended partition entries
    for( var i = 4; i < DM.PARTITION_ENTRIES; i++ ) {
      this.partitions[i].buffer.copy( buffer, offset )
      offset += 0x10
    }
    
    // Append primary partition entries
    for( var i = 0; i < 4; i++ ) {
      this.partitions[i].buffer.copy( buffer, offset )
      offset += 0x10
    }
    
    return buffer
    
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
