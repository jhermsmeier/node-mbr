var isBuffer = Buffer.isBuffer

/**
 * Code
 * @return {Code}
 */
function Code( buffer, start, end ) {
  
  if( !(this instanceof Code) )
    return new Code( buffer, start, end )
  
  this.offset = start || 0x00
  
  if( Buffer.isBuffer( buffer ) ) {
    this.data = buffer.slice( start, end )
  } else {
    this.data = new Buffer( 446 )
    this.data.fill( 0 )
  }
  
}

/**
 * Code prototype
 * @type {Object}
 */
Code.prototype = {
  
  constructor: Code,
  
  get length() {
    return this.data.length
  },
  
}

// Exports
module.exports = Code
