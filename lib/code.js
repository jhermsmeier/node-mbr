/**
 * Code region
 * @class
 * @memberOf MBR
 */
class Code {

  /**
   * Creates a code region
   * @param {Number} [offset=0]
   * @param {Number} [length]
   * @returns {Code}
   */
  constructor( offset, length ) {

    /** @type {Number} Offset of code region within MBR */
    this.offset = offset || 0
    /** @type {Number} Length of code region in bytes */
    this.length = length || 0
    /** @type {Buffer} Bytes */
    this.data = Buffer.alloc( length )

  }

  set( buffer, offset, length ) {

    offset = offset || 0
    length = length || 0

    if( this.data == null ) {
      this.data = Buffer.alloc( length )
    } else if( this.data.length !== length ) {
      this.data = Buffer.alloc( length )
    }

    this.length = this.data.length

    if( buffer ) {
      buffer.copy( this.data, 0, offset, offset + length )
    }

    return this

  }

}

module.exports = Code
