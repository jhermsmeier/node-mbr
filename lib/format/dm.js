var MBR = require( '../mbr' )

/**
 * DiskManager (DM) Master Boot Record
 * @class
 * @extends {MBR}
 * @memberOf MBR
 */
class DiskManager extends MBR {

  /**
   * Partition table offset
   * @type {Number}
   * @constant
   */
  static TABLE_OFFSET = 0x0FE

  /**
   * Number of partition entries
   * @type {Number}
   * @constant
   */
  static PARTITION_ENTRIES = 16

  /**
   * Code region layout
   * @type {Object}
   * @constant
   */
  static CODE_REGION = {
    start: 0x000,
    end: DiskManager.TABLE_OFFSET,
  }

  /**
   * Creates a DiskManager Master Boot Record
   * @returns {MBR}
   */
  constructor() {
    super()
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

    var tableOffset = DiskManager.TABLE_OFFSET + offset

    this.partitions[4].parse( buffer, tableOffset )
    this.partitions[5].parse( buffer, tableOffset += 0x10 )
    this.partitions[6].parse( buffer, tableOffset += 0x10 )
    this.partitions[7].parse( buffer, tableOffset += 0x10 )

    this.partitions[8].parse( buffer, tableOffset += 0x10 )
    this.partitions[9].parse( buffer, tableOffset += 0x10 )
    this.partitions[10].parse( buffer, tableOffset += 0x10 )
    this.partitions[11].parse( buffer, tableOffset += 0x10 )

    this.partitions[12].parse( buffer, tableOffset += 0x10 )
    this.partitions[13].parse( buffer, tableOffset += 0x10 )
    this.partitions[14].parse( buffer, tableOffset += 0x10 )
    this.partitions[15].parse( buffer, tableOffset += 0x10 )

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

    this.partitions[8].write( buffer, tableOffset += 0x10 )
    this.partitions[9].write( buffer, tableOffset += 0x10 )
    this.partitions[10].write( buffer, tableOffset += 0x10 )
    this.partitions[11].write( buffer, tableOffset += 0x10 )

    this.partitions[12].write( buffer, tableOffset += 0x10 )
    this.partitions[13].write( buffer, tableOffset += 0x10 )
    this.partitions[14].write( buffer, tableOffset += 0x10 )
    this.partitions[15].write( buffer, tableOffset += 0x10 )

    return buffer

  }

}

module.exports = DiskManager
