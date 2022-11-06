var MBR = require( '../mbr' )

/**
 * AST/NEC Master Boot Record
 * @class
 * @extends {MBR}
 * @memberOf MBR
 */
class AST extends MBR {

  /**
   * Partition table offset
   * @const {Number}
   */
  static TABLE_OFFSET = 0x17E

  /**
   * Partition table entry count
   * @const {Number}
   */
  static PARTITION_ENTRIES = 8

  /**
   * Code region layout
   * @type {Object}
   * @constant
   */
  static CODE_REGION = {
    start: 0x000,
    end: AST.TABLE_OFFSET,
  }

  /**
   * Creates a AST/NEC Master Boot Record
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

    // Super handles primary partition entries
    super.parse( buffer, offset, noAssert )

    var tableOffset = AST.TABLE_OFFSET + offset

    // Read extended partition records
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

    // Super handles primary partition entries
    super.write( buffer, offset )

    var tableOffset = AST.TABLE_OFFSET + offset

    // Write out extended partition records
    this.partitions[4].write( buffer, tableOffset )
    this.partitions[5].write( buffer, tableOffset += 0x10 )
    this.partitions[6].write( buffer, tableOffset += 0x10 )
    this.partitions[7].write( buffer, tableOffset += 0x10 )

    return buffer

  }

}

module.exports = AST
