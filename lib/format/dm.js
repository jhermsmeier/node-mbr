var MBR = require( '../mbr' )

class DiskManager extends MBR {

  constructor() {
    super()
  }

  /**
   * Parse a Master Boot Record from a buffer
   * @param {Buffer} buffer
   * @param {Number} [offset=0]
   * @returns {Record}
   */
  parse( buffer, offset ) {

    offset = offset || 0

    super.parse( buffer, offset )

    var tableOffset = DiskManager.TABLE_OFFSET + offset

    this.partitions[4].parse( buffer, tableOffset )
    this.partitions[5].parse( buffer, tableOffset += 0x10 )
    this.partitions[6].parse( buffer, tableOffset += 0x10 )
    this.partitions[7].parse( buffer, tableOffset += 0x10 )

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

    var tableOffset = DiskManager.TABLE_OFFSET + offset

    this.partitions[4].write( buffer, tableOffset )
    this.partitions[5].write( buffer, tableOffset += 0x10 )
    this.partitions[6].write( buffer, tableOffset += 0x10 )
    this.partitions[7].write( buffer, tableOffset += 0x10 )

    return buffer

  }

}

/**
 * Partition table offset
 * @type {Number}
 * @constant
 */
DiskManager.TABLE_OFFSET = 0x0FE

/**
 * Number of partition entries
 * @type {Number}
 * @constant
 */
DiskManager.PARTITION_ENTRIES = 8

/**
 * Code region layout
 * @type {Array<Object>}
 * @constant
 */
DiskManager.CODE_REGIONS = [
  { start: 0x000, end: DiskManager.TABLE_OFFSET },
]

module.exports = DiskManager
