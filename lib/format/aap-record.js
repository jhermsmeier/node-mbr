var CHS = require( 'chs' )

/**
 * AAP Record
 * @class
 * @memberOf MBR.AAP
 */
class Record {

  constructor() {

    /** @type {Number} AAP physical drive (80h-FEh; 00h: not used; 01h-7Fh, FFh: reserved) */
    this.physicalDrive = 0x00
    /** @type {CHS} CHS (start) address of AAP partition/image file or VBR/EBR */
    this.firstCHS = new CHS()
    /** @type {Number} AAP partition type (00h if not used) (optional) */
    this.partitionType = 0x00
    /** @type {CHS} CHS end address in AAP (optional, 000000h if not used) */
    this.lastCHS = new CHS()
    /** @type {Number} Start LBA of AAP image file or VBR/EBR */
    this.firstLBA = 0x00000000
    /** @type {Number} Reserved for sectors in AAP (optional; 00000000h if not used) */
    this.sectors = 0x00000000

  }

  /**
   * Parse an AAP Record from a buffer
   * @param {Buffer} buffer
   * @param {Number} [offset=0]
   * @returns {Record}
   */
  parse( buffer, offset ) {

    offset = offset || 0

    this.physicalDrive = buffer.readUInt8( offset + 0x00 )
    this.firstCHS.parse( buffer, offset + 1 )
    this.partitionType = buffer.readUInt8( offset + 0x04 )
    this.lastCHS.parse( buffer, offset + 5 )
    this.firstLBA = buffer.readUInt32LE( offset + 8 )
    this.sectors = buffer.readUInt32LE( offset + 12 )

    return this

  }

  /**
   * Write an AAP Record to a buffer
   * @param {Buffer} [buffer]
   * @param {Number} [offset=0]
   * @returns {Buffer}
   */
  write( buffer, offset ) {

    offset = offset || 0
    buffer = buffer || Buffer.alloc( Record.size + offset )

    buffer.writeUInt8( this.physicalDrive, offset + 0x00 )
    buffer.writeUInt8( this.partitionType, offset + 0x04 )
    buffer.writeUInt32LE( this.firstLBA, offset + 8 )
    buffer.writeUInt32LE( this.sectors, offset + 12 )

    this.firstCHS.write( buffer, offset + 1 )
    this.lastCHS.write( buffer, offset + 5 )

    return buffer

  }

}

/**
 * Size of AAP Record structure in bytes
 * @type {Number}
 * @constant
 */
Record.size = 0x10

module.exports = Record
