var CHS = require( 'chs' )

/**
 * MBR Partition
 * @class
 * @memberOf MBR
 * @returns {Partition}
 */
class Partition {

  constructor() {

    /** @type {Number} Partition status */
    this.status = 0x00
    /** @type {Number} Partition type identifier */
    this.type = 0x00
    /** @type {Number} Sector count */
    this.sectors = 0x00
    /** @type {Number} LBA of first sector */
    this.firstLBA = 0x00
    /** @type {Number} CHS address of first sector */
    this.firstCHS = new CHS()
    /** @type {Number} CHS address of last sector */
    this.lastCHS = new CHS()

  }

  get statusText() {
    switch( this.status ) {
      case 0x80: return 'active'; break
      case 0x00: return 'inactive'; break
      default:   return 'invalid'; break
    }
  }

  get active() {
    return this.status === 0x80
  }

  get inactive() {
    return this.status === 0x00
  }

  get invalid() {
    return !this.active && !this.inactive
  }

  get extended() {
    return Partition.isExtended( this.type )
  }

  get lastLBA() {
    return this.firstLBA + this.sectors
  }

  /**
   * Calculates the partition's offset in bytes
   * @param {Number} [blockSize=512]
   * @returns {Number}
   */
  byteOffset( blockSize ) {
    blockSize = blockSize || 512
    return this.firstLBA * blockSize
  }

  /**
   * Calculates the partition's size in bytes
   * @param {Number} [blockSize=512]
   * @returns {Number}
   */
  byteSize( blockSize ) {
    blockSize = blockSize || 512
    return this.sectors * blockSize
  }

  /**
   * Parse an MBR partition record from a buffer
   * @param {Buffer} buffer
   * @param {Number} [offset=0]
   * @returns {Record}
   */
  parse( buffer, offset ) {

    offset = offset || 0

    this.status = buffer.readUInt8( offset + 0 )
    this.type = buffer.readUInt8( offset + 4 )
    this.firstLBA = buffer.readUInt32LE( offset + 8 )
    this.sectors = buffer.readUInt32LE( offset + 12 )

    this.firstCHS.parse( buffer, offset + 1 )
    this.lastCHS.parse( buffer, offset + 5 )

    return this

  }

  /**
   * Write an MBR partition record to a buffer
   * @param {Buffer} [buffer]
   * @param {Number} [offset=0]
   * @returns {Buffer}
   */
  write( buffer, offset ) {

    offset = offset || 0
    buffer = buffer || Buffer.alloc( Partition.size + offset )

    buffer.writeUInt8( this.status, offset + 0 )
    buffer.writeUInt8( this.type, offset + 4 )
    buffer.writeUInt32LE( this.firstLBA, offset + 8 )
    buffer.writeUInt32LE( this.sectors, offset + 12 )

    this.firstCHS.write( buffer, offset + 1 )
    this.lastCHS.write( buffer, offset + 5 )

    return buffer

  }

}

/**
 * Partition entry size in bytes
 * @type {Number}
 * @constant
 */
Partition.size = 0x10

/**
 * List of partition type IDs
 * used for extended partitions
 * @type {Array}
 * @constant
 */
Partition.EXTENDED = [
  // MS Extended Partition (CHS)
  0x05,
  // MS Extended Partition (LBA)
  0x0F,
  // Linux Extended Partition
  0x85,
  // Other Extended Partition Types:
  // Hidden
  0x15, 0x1F, 0x91, 0x9B,
  // Access-restricted
  0x5E, 0x5F,
  // Secured
  0xCF, 0xD5,
  // DR DOS Secured Extended Partition
  0xC5,
]

/**
 * Parse a MBR Partition structure
 * @param {Buffer} [buffer]
 * @param {Number} [offset=0]
 * @returns {Partition}
 */
Partition.parse = function( buffer, offset ) {
  return new Partition().parse( buffer, offset )
}

/**
 * Determines if a given partition type
 * describes an extended partition
 * @param {Number} type
 * @returns {Boolean}
 */
Partition.isExtended = function( type ) {
  return Partition.EXTENDED.indexOf( type ) !== -1
}

module.exports = Partition
