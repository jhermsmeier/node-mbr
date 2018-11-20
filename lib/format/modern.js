var MBR = require( '../mbr' )

/**
 * Modern Master Boot Record
 * @class
 * @extends {MBR}
 * @memberOf MBR
 */
class Modern extends MBR {

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

    /** @type {Number} Original physical drive (80h-FFh) */
    this.physicalDrive = 0x80
    /** @type {Object} Disk timestamp (optional) */
    this.timestamp = { seconds: 0, minutes: 0, hours: 0 }
    /** @type {Number} Disk signature (32bit, optional) */
    this.diskSignature = null
    /** @type {Boolean} Copy Protection */
    this.copyProtected = false

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

    this.physicalDrive = buffer[ offset + 0x0DC ]

    this.timestamp.seconds = buffer[ offset + 0x0DD ]
    this.timestamp.minutes = buffer[ offset + 0x0DE ]
    this.timestamp.hours = buffer[ offset + 0x0DF ]

    var marker = buffer.readUInt16LE( offset + 0x1BC )

    // If unint16 @ 0x1BC == 0x5A5A,
    // then it's copy protected (?)
    this.copyProtected = marker === 0x5A5A

    // TODO: Figure out why I'm checking for 0x1BC to be zero
    // before attempting to read a signature
    // (it most likely has to do with the EOC marker)
    this.diskSignature = marker === 0 || this.copyProtected ?
      buffer.readUInt32LE( offset + 0x1B8 ) : null

    var endOfCode = this.diskSignature == null ? 0x1BE : 0x1B8

    // this.code = [
    //   new MBR.Code( value, offset + 0, offset + 0x0DA ),
    //   new MBR.Code( value, offset + 0x0E0, offset + endOfCode ),
    // ]

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

    buffer[ offset + 0x0DC ] = this.physicalDrive
    buffer[ offset + 0x0DD ] = this.timestamp.seconds
    buffer[ offset + 0x0DE ] = this.timestamp.minutes
    buffer[ offset + 0x0DF ] = this.timestamp.hours

    // If second code block includes the disk signature area,
    // don't write it out (TODO: find documentation on copy protection)
    if( this.code[1] && this.code[1].data.length === 216 ) {

      buffer.writeUInt32LE( this.diskSignature, offset + 0x1B8 )

      this.copyProtected ?
        buffer.writeUInt16LE( offset + 0x5A5A, 0x1BC ) :
        buffer.writeUInt16LE( offset + 0x0000, 0x1BC )

    } else {
      // TODO: What?
    }

    return buffer

  }

}

/**
 * Default partition table offset
 * @type {Number}
 * @constant
 */
Modern.TABLE_OFFSET = 0x1BE

/**
 * Default number of partition entries
 * @type {Number}
 * @constant
 */
Modern.PARTITION_ENTRIES = 4

/**
 * Code region layout
 * @type {Array<Object>}
 * @constant
 */
Modern.CODE_REGIONS = [
  { start: 0x000, end: 0x0DA },
  { start: 0x0E0, end: Modern.TABLE_OFFSET },
]

module.exports = Modern
