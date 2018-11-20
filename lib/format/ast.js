var MBR = require( '../mbr' )

class AST extends MBR {

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

    // Super handles primary partition entries
    super.parse( buffer, offset )

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

/**
 * Partition table offset
 * @const {Number}
 */
AST.TABLE_OFFSET = 0x17E

/**
 * Partition table entry count
 * @const {Number}
 */
AST.PARTITION_ENTRIES = 8

/**
 * Code region layout
 * @type {Array<Object>}
 * @constant
 */
AST.CODE_REGIONS = [
  { start: 0x000, end: AST.TABLE_OFFSET },
]

module.exports = AST
