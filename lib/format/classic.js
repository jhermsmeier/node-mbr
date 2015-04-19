var inherit = require( 'bloodline' )
var MBR = require( '../mbr' )
var isBuffer = Buffer.isBuffer

/**
 * CLASSIC
 * @param {Buffer} buffer (optional)
 * @param {Number} start (optional)
 * @param {Number} end (optional)
 * @return {CLASSIC}
 */
function CLASSIC( buffer, start, end ) {
  
  if( !(this instanceof CLASSIC) )
    return new CLASSIC( buffer, start, end )
  
  MBR.call( this, buffer, start, end )
  
}

/**
 * [TABLE_OFFSET description]
 * @type {Number}
 */
CLASSIC.TABLE_OFFSET = 0x1BE

/**
 * [PARTITION_ENTRIES description]
 * @type {Number}
 */
CLASSIC.PARTITION_ENTRIES = 4

/**
 * CLASSIC prototype
 * @type {Object}
 */
CLASSIC.prototype = {
  
  constructor: CLASSIC,
  
  get buffer() {
    
    return Buffer.concat([
      this.code[0].data,
      this.partitions[0].buffer,
      this.partitions[1].buffer,
      this.partitions[2].buffer,
      this.partitions[3].buffer,
    ])
    
  },
  
  set buffer( value ) {
    
    if( !isBuffer( value ) )
      throw new TypeError( 'Value must be a Buffer' )
    
    this.code = [
      new MBR.Code( value, 0, 0x1BE )
    ]
    
    var i, count = this.partitionEntries
    var offset = this.tableOffset
    
    for( i = 0; i < count; i++ ) {
      this.partitions[i].buffer =
        value.slice( offset, offset += 0x10 )
    }
    
  },
  
}

inherit( CLASSIC, MBR )
// Exports
module.exports = CLASSIC
