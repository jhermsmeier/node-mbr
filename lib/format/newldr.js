var inherit = require( 'bloodline' )
var MBR = require( '../mbr' )
var isBuffer = Buffer.isBuffer

/**
 * NEWLDR
 * @param {Buffer} buffer (optional)
 * @param {Number} start (optional)
 * @param {Number} end (optional)
 * @return {NEWLDR}
 */
function NEWLDR( buffer, start, end ) {
  
  if( !(this instanceof NEWLDR) )
    return new NEWLDR( buffer, start, end )
  
  // NEWLDR record
  this.newldr = new NEWLDR.Record()
  // AAP partition entry #0 with special semantics
  this.aap = new MBR.AAP.Record()
  
  MBR.call( this, buffer, start, end )
  
}

/**
 * [TABLE_OFFSET description]
 * @type {Number}
 */
NEWLDR.TABLE_OFFSET = 0x1BE

/**
 * [PARTITION_ENTRIES description]
 * @type {Number}
 */
NEWLDR.PARTITION_ENTRIES = 4

/**
 * [Record description]
 * @type {Function}
 */
NEWLDR.Record = require( './newldr-record' )

/**
 * NEWLDR prototype
 * @type {Object}
 */
NEWLDR.prototype = {
  
  constructor: NEWLDR,
  
  get buffer() {
    // TODO
  },
  
  set buffer( value ) {
    
    if( !isBuffer( value ) )
      throw new TypeError( 'Value must be a Buffer' )
    
    this.code = [
      new MBR.Code( value, value[1], 0x1AC )
    ]
    
    this.newldr.buffer = value.slice( 0, value[1] )
    this.aap.buffer = value.slice( 0x1AE, 0x1BE )
    
    var i, count = this.partitionEntries
    var offset = this.tableOffset
    
    for( i = 0; i < count; i++ ) {
      this.partitions[i].buffer =
        value.slice( offset, offset += 0x10 )
    }
    
  },
  
}

inherit( NEWLDR, MBR )
// Exports
module.exports = NEWLDR
