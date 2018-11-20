var MBR = require( '../mbr' )

/**
 * AAP (Advanced Active Partition) Master Boot Record
 * @class
 * @extends {MBR}
 * @memberOf MBR
 */
class AAP extends MBR {

  /**
   * Creates an AAP (Advanced Active Partition) Master Boot Record
   * @returns {MBR}
   */
  constructor() {

    super()

    /** @type {MBR.AAP.Record} AAP Record */
    this.aap = new AAP.Record()

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

    this.aap.parse( buffer, offset + 0x1AC, noAssert )

    return super.parse( buffer, offset, noAssert )

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

    this.aap.write( buffer, offset + 0x1AC )

    return super.write( buffer, offset )

  }

}

/**
 * Partition table offset
 * @type {Number}
 * @constant
 */
AAP.TABLE_OFFSET = 0x1BE

/**
 * Number of partition entries
 * @type {Number}
 * @constant
 */
AAP.PARTITION_ENTRIES = 4

/**
 * Code region layout
 * @type {Object}
 * @constant
 */
AAP.CODE_REGION = {
  start: 0x000,
  end: 0x1AC,
}

AAP.Record = require( './aap-record' )

module.exports = AAP
