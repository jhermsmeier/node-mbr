var inherit = require( 'bloodline' )
var MBR = require( '../mbr' )
var isBuffer = Buffer.isBuffer

/**
 * AAP
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
 * [TABLE_OFFSET description]
 * @type {Number}
 */
AAP.TABLE_OFFSET = 0x1BE

/**
 * [PARTITION_ENTRIES description]
 * @type {Number}
 */
AAP.PARTITION_ENTRIES = 4

/**
 * [Record description]
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
    
    return Buffer.concat([
      this.code[0].data,
      this.aap.buffer,
      this.partitions[0].buffer,
      this.partitions[1].buffer,
      this.partitions[2].buffer,
      this.partitions[3].buffer,
    ])
    
  },
  
  set buffer( value ) {
    
    if( !isBuffer( value ) )
      throw new TypeError( 'Value must be a Buffer' )
    
    // TODO: Parse out code
    
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
