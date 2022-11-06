var MBR = require( '../mbr' )

/**
 * Modern Master Boot Record
 * @class
 * @extends {MBR}
 * @memberOf MBR
 */
class Modern extends MBR {

  /**
   * Default partition table offset
   * @type {Number}
   * @constant
   */
  static TABLE_OFFSET = 0x1BE

  /**
   * Default number of partition entries
   * @type {Number}
   * @constant
   */
  static PARTITION_ENTRIES = 4

  /**
   * Code region layout
   * @type {Object}
   * @constant
   */
  static CODE_REGION = {
    start: 0x000,
    end: Modern.TABLE_OFFSET,
  }

  /**
   * Creates a Modern Master Boot Record
   * @returns {MBR}
   */
  constructor() {

    super()

    // In order to ensure the integrity of the MBR boot loader code,
    // it is important that the bytes at +0DAh to +0DFh are never changed,
    // unless either all six bytes represent a value of 0 or the whole MBR
    // bootstrap loader code (except for the (extended) partition table) is
    // replaced at the same time as well. This includes resetting these values
    // to 00h 00h 00h 00h 00h 00h unless the code stored in the MBR is known.
    // NOTE: Windows adheres to this rule.

    /** @type {Number|null} Original physical drive (80h-FFh) */
    this.physicalDrive = null
    /** @type {Object|null} Disk timestamp (optional) */
    this.timestamp = null
    /** @type {Number|null} Disk signature (32bit, optional) */
    this.diskSignature = null
    /** @type {Boolean|null} Copy Protection */
    this.copyProtected = null

  }

  /**
   * Parse a Master Boot Record from a buffer
   * @param {Buffer} buffer
   * @param {Number} [offset=0]
   * @param {Boolean} [noAssert=false]
   * @returns {Record}
   */
  parse( buffer, offset, noAssert = false ) {

    offset = offset || 0

    super.parse( buffer, offset, noAssert )

    if( buffer.readUInt32LE( offset + 0x0DA ) === 0x0000 ) {

      this.physicalDrive = buffer[ offset + 0x0DC ] >= 0x80 ?
        buffer[ offset + 0x0DC ] : null

      this.timestamp = {
        seconds: buffer[ offset + 0x0DD ],
        minutes: buffer[ offset + 0x0DE ],
        hours: buffer[ offset + 0x0DF ],
      }

    } else {
      this.timestamp = null
    }

    // Copy-protection marker / signature
    var marker = buffer.readUInt16LE( offset + 0x1BC )

    // Only treat the disk signature as present if the copy-protection
    // marker is either `0x0000` or `0x5A5A`
    this.diskSignature = marker === 0x0000 || marker === 0x5A5A ?
      buffer.readUInt32LE( offset + 0x1B8 ) : null

    // If unint16 @ 0x1BC == 0x5A5A, then it's copy protected
    // Set to `null` if it's neither `0x0000` nor `0x5A5A`
    this.copyProtected = marker === 0x0000 || marker === 0x5A5A ?
      marker === 0x5A5A : null

    return this

  }

  /**
   * Write a Master Boot Record to a buffer
   * @param {Buffer} [buffer]
   * @param {Number} [offset=0]
   * @returns {Buffer}
   */
  write( buffer, offset ) {

    offset = offset || 0
    buffer = buffer || Buffer.alloc( MBR.SIZE + offset )

    super.write( buffer, offset )

    if( this.physicalDrive != null ) {
      buffer[ offset + 0x0DC ] = this.physicalDrive
    }

    if( this.timestamp != null ) {
      buffer[ offset + 0x0DD ] = this.timestamp.seconds
      buffer[ offset + 0x0DE ] = this.timestamp.minutes
      buffer[ offset + 0x0DF ] = this.timestamp.hours
    }

    if( this.diskSignature != null ) {
      buffer.writeUInt32LE( this.diskSignature, offset + 0x1B8 )
    }

    if( this.copyProtected != null ) {
      buffer.writeUInt16LE( this.copyProtected ? 0x5A5A : 0x0000, offset + 0x1BC )
    }

    return buffer

  }

}

module.exports = Modern
