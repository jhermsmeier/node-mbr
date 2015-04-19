var inherit = require( 'bloodline' )
var MBR = require( './mbr' )
var isBuffer = Buffer.isBuffer

/**
 * AST
 * @param {Buffer} buffer (optional)
 * @param {Number} start (optional)
 * @param {Number} end (optional)
 * @return {AST}
 */
function AST( buffer, start, end ) {
  
  if( !(this instanceof AST) )
    return new AST( buffer, start, end )
  
  MBR.call( this, buffer, start, end )
  
}

/**
 * [TABLE_OFFSET description]
 * @type {Number}
 */
AST.TABLE_OFFSET = 0x17E

/**
 * [PARTITION_ENTRIES description]
 * @type {Number}
 */
AST.PARTITION_ENTRIES = 8

/**
 * AST prototype
 * @type {Object}
 */
AST.prototype = {
  
  constructor: AST,
  
  get buffer() {
    
    return Buffer.concat([
      this.code[0].data,
      this.partitions[0].buffer,
      this.partitions[1].buffer,
      this.partitions[2].buffer,
      this.partitions[3].buffer,
      this.partitions[4].buffer,
      this.partitions[5].buffer,
      this.partitions[6].buffer,
      this.partitions[7].buffer,
    ])
    
  },
  
  set buffer( value ) {
    
    if( !isBuffer( value ) )
      throw new TypeError( 'Value must be a Buffer' )
    
    this.code = [
      new MBR.Code( value, 0, 0x17E )
    ]
    
    var i, count = 4
    var offset = 0x1BE
    
    // Read in primary partitions first
    for( i = 0; i < count; i++ ) {
      this.partitions[i].buffer =
        value.slice( offset, offset += 0x10 )
    }
    
    count += count
    offset = this.tableOffset
    
    // Then extended partition entries,
    // to keep the array order sane
    for( i = 4; i < count; i++ ) {
      this.partitions[i].buffer =
        value.slice( offset, offset += 0x10 )
    }
    
  },
  
}

inherit( AST, MBR )
// Exports
module.exports = AST
