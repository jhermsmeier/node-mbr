var MBR = require( '../mbr' )
var CHS = require( 'chs' )

class NewLdr extends MBR {

  constructor() {

    super()

    /** @type {Number} NEWLDR record size */
    this.jmp = 0x01E
    /** @type {String} NEWLDR signature */
    this.loaderSignature = NewLdr.SIGNATURE
    // (80h-FEh, 00h-7Eh, FFh, 7Fh)
    // (optional, zero if not used)
    /** @type {Number} Physical drive and boot flag */
    this.physicalDrive = 0x00
    // (i.e. IBMBIO.LDR, 000000h if not used)
    /** @type {CHS} CHS address of LOADER boot sector or image file */
    this.firstCHS = new CHS()
    // (80h: default; 00h: always use DL; FFh: always use table entry)
    /** @type {Number} Allowed DL minimum, else take from partition table */
    this.minDL = 0x00
    /** @type {Buffer} Reserved bytes */
    this.reserved = 0x000000
    /** @type {Number} LBA of LOADER boot sector or image file (optional) */
    this.firstLBA = 0x00000000
    // (default 0000h if not used, else 0024h or 01FDh)
    /** @type {Number} Patch offset of VBR boot unit */
    this.patchOffset = 0x0000
    /** @type {Number} Checksum (0000h if not used) */
    this.checksum = 0x0000
    // ("MSWIN4" for REAL/32, see also offset +0DAh,
    // corresponds with OEM label at offset +003h in VBRs)
    /** @type {String} OEM loader signature (optional) */
    this.oem = 'MSWIN4'

    /** @type {MBR.Partition} AAP partition entry #0 with special semantics */
    this.aap = new MBR.AAP.Record()

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

    this.jmp = buffer[ offset + 1 ]

    // 6 byte "NEWLDR" signature
    // this.loaderSignature = buffer.toString( 'ascii', offset + 2, offset + 6 )
    this.loaderSignature = buffer.readUIntBE( offset + 2, 6 )

    if( this.loaderSignature !== NewLdr.SIGNATURE ) {
      throw new Error(
        'Invalid loader signature. Expected "NEWLDR", saw ' +
        buffer.toString( 'ascii', offset + 2, offset + 6 )
      )
    }

    this.physicalDrive = buffer.readUInt8( offset + 8 )
    this.firstCHS.parse( buffer, offset + 9 )

    // Optional fields
    this.minDL = this.jmp >= 0x00A ? buffer.readUInt8( offset + 12 ) : null
    this.reserved = this.jmp >= 0x010 ? buffer.readUIntLE( offset + 13, 3 ) : null
    this.firstLBA = this.jmp >= 0x014 ? buffer.readUInt32LE( offset + 16 ) : null
    this.patchOffset = this.jmp >= 0x016 ? buffer.readUInt16LE( offset + 20 ) : null
    this.checksum = this.jmp >= 0x018 ? buffer.readUInt16LE( offset + 22 ) : null
    this.oem = this.jmp >= 0x01E ? buffer.toString( 'ascii', offset + 24, offset + Record.size ) : null

    // AAP partition entry (optional)
    if( buffer.readUInt16LE( offset + 0x1AC ) === MBR.AAP.SIGNATURE ) {
      this.aap = this.aap != null ?
        this.aap.parse( buffer, offset + 0x1AC ) :
        new MBR.AAP.Record().parse( buffer, offset + 0x1AC )
    } else {
      this.aap = null
    }

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

    throw new Error( 'Not implemented' )

    return buffer

  }

}

/**
 * NewLoader signature (ASCII 'NEWLDR')
 * @type {Number}
 * @constant
 */
NewLdr.SIGNATURE = 0x4E45574C4452

/**
 * Default partition table offset
 * @type {Number}
 * @constant
 */
NewLdr.TABLE_OFFSET = 0x1BE

/**
 * Default number of partition entries
 * @type {Number}
 * @constant
 */
NewLdr.PARTITION_ENTRIES = 4

/**
 * Code region layout
 * @type {Array<Object>}
 * @constant
 */
NewLdr.CODE_REGIONS = [
  { offset: 0x000, length: NewLdr.TABLE_OFFSET },
]

NewLdr.Record = require( './newldr-record' )

module.exports = NewLdr
