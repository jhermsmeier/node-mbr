var inherit = require( 'bloodline' )
var MBR = require( '../mbr' )
var isBuffer = Buffer.isBuffer

/**
 * AAP (Advanced Active Partitions)
 * @param {Buffer} buffer (optional)
 * @param {Number} start (optional)
 * @param {Number} end (optional)
 * @return {AAP}
 */
function AAP( buffer, start, end ) {
  
  if( !(this instanceof AAP) )
    return new AAP( buffer, start, end )
  
  // AAP Record
  this.aap = new AAP.Record()
  
  MBR.call( this, buffer, start, end )
  
}

/**
 * Partition table offset
 * @type {Number}
 */
AAP.TABLE_OFFSET = 0x1BE

/**
 * Partition table entry count
 * @type {Number}
 */
AAP.PARTITION_ENTRIES = 4

/**
 * AAP Record structure
 * @type {Function}
 */
AAP.Record = require( './aap-record' )

/**
 * AAP prototype
 * @type {Object}
 */
AAP.prototype = {
  
  constructor: AAP,
  
  get buffer() {
    
    var buffer = MBR.createBuffer()
    var offset = this.tableOffset
    
    this.code[0].data.copy( buffer, this.code[0].offset )
    this.aap.buffer.copy( buffer, 0x1AE )
    
    this.partitions[0].buffer.copy( buffer, offset )
    this.partitions[1].buffer.copy( buffer, offset += 0x10 )
    this.partitions[2].buffer.copy( buffer, offset += 0x10 )
    this.partitions[3].buffer.copy( buffer, offset += 0x10 )
    
    return buffer
    
  },
  
  set buffer( value ) {
    
    if( !isBuffer( value ) )
      throw new TypeError( 'Value must be a Buffer' )
    
    this.code = [
      new MBR.Code( value, 0, 0x1AB )
    ]
    
    this.aap.buffer = value.slice( 0x1AE, 0x1BA )
    
    var i, count = this.partitionEntries
    var offset = this.tableOffset
    
    for( i = 0; i < count; i++ ) {
      this.partitions[i].buffer =
        value.slice( offset, offset += 0x10 )
    }
    
  },
  
}

inherit( AAP, MBR )
// Exports
module.exports = AAP
