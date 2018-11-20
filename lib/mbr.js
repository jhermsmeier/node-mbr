/**
 * Master Boot Record (MBR)
 * @class
 * @constructs MBR
 */
class MBR {

  constructor() {

    /** @type {Number} Signature */
    this.signature = MBR.SIGNATURE
    /** @type {MBR.Code[]} Bootloader code */
    this.code = []
    /** @type {MBR.Partition[]} Partition table */
    this.partitions = []

    for( var i = 0; i < this.partitionEntries; i++ ) {
      this.partitions.push( new MBR.Partition() )
    }

    var region = null

    for( var i = 0; i < this.codeRegions; i++ ) {
      region = this.constructor.CODE_REGIONS[i]
      this.code.push( new MBR.Code( region.start, region.end - region.start ) )
    }

  }

  /**
   * MBR format
   * @type {String}
   * @readOnly
   */
  get type() {
    return this.constructor.name.toUpperCase()
  }

  /**
   * Partition table offset
   * @type {Number}
   * @readOnly
   */
  get tableOffset() {
    return this.constructor.TABLE_OFFSET
  }

  /**
   * Number of partition entries
   * @type {Number}
   * @readOnly
   */
  get partitionEntries() {
    return this.constructor.PARTITION_ENTRIES
  }

  /**
   * Number of code regions
   * @type {Number}
   * @readOnly
   */
  get codeRegions() {
    return this.constructor.CODE_REGIONS.length
  }

  /**
   * Get the EFI system partition if available
   * @returns {MBR.Partition|null}
   */
  getEFIPart() {

    var i = 0
    var part = null

    for( var i = 0; i < this.partitions.length; i++ ) {
      part = this.partitions[i]
      if( part.type === 0xEE || part.type === 0xEF ) {
        return part
      }
    }

    return null

  }

  /**
   * Parse a Master Boot Record from a buffer
   * @param {Buffer} buffer
   * @param {Number} [offset=0]
   * @returns {Record}
   */
  parse( buffer, offset ) {

    offset = offset || 0

    if( !Buffer.isBuffer( buffer ) ) {
      throw new TypeError( 'Argument must be a Buffer' )
    }

    if( !Number.isFinite( offset ) ) {
      throw new TypeError( 'Offset must be a Number' )
    }

    var signature = ( buffer[ offset + 0x1FF ] << 8 ) | buffer[ offset + 0x1FE ]
    if( signature !== MBR.SIGNATURE ) {
      throw new Error(
        'Invalid MBR boot signature. Expected 0xAA55, but saw 0x' +
        signature.toString( 16 ).toUpperCase()
      )
    }

    this.signature = signature

    var region = null

    for( var i = 0; i < this.code.length; i++ ) {
      this.code[i].set( buffer, this.code[i].offset, this.code[i].length )
    }

    var tableOffset = MBR.TABLE_OFFSET + offset

    this.partitions[0].parse( buffer, tableOffset )
    this.partitions[1].parse( buffer, tableOffset += 0x10 )
    this.partitions[2].parse( buffer, tableOffset += 0x10 )
    this.partitions[3].parse( buffer, tableOffset += 0x10 )

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

    for( var i = 0; i < this.code.length; i++ ) {
      this.code[i].data.copy( buffer, offset + this.code[i].offset )
    }

    var tableOffset = MBR.TABLE_OFFSET + offset

    this.partitions[0].write( buffer, tableOffset )
    this.partitions[1].write( buffer, tableOffset += 0x10 )
    this.partitions[2].write( buffer, tableOffset += 0x10 )
    this.partitions[3].write( buffer, tableOffset += 0x10 )

    // Write MBR signature
    // buffer.writeUint16LE( 0xAA55, offset + 0x1FE )
    buffer[ offset + 0x1FE ] = 0x55
    buffer[ offset + 0x1FF ] = 0xAA

    return buffer

  }

}

/**
 * Master Boot Record size in bytes
 * @type {Number}
 * @constant
 */
MBR.SIZE = 0x200

/**
 * Master Boot Record signature value
 * @type {Number}
 * @constant
 */
MBR.SIGNATURE = 0xAA55

/**
 * Partition table offset
 * @type {Number}
 * @constant
 */
MBR.TABLE_OFFSET = 0x1BE

/**
 * Number of partition entries
 * @type {Number}
 * @constant
 */
MBR.PARTITION_ENTRIES = 4

/**
 * Code region layout
 * @type {Array<Object>}
 * @constant
 */
MBR.CODE_REGIONS = [
  { start: 0x000, end: MBR.TABLE_OFFSET },
]

/**
 * Detects the MBR format of a given buffer
 * @param {Buffer} buffer
 * @param {Number} [offset=0]
 * @returns {String} format
 */
MBR.detectFormat = function( buffer, offset ) {

  offset = offset || 0

  if( !Buffer.isBuffer( buffer ) ) {
    throw new TypeError( 'Argument must be a Buffer' )
  }

  if( buffer.length < offset + 512 ) {
    throw new Error( 'Buffer too small (must be at least 512 bytes)' )
  }

  var signature = ( buffer[ offset + 0x1FF ] << 8 ) | buffer[ offset + 0x1FE ]
  if( signature !== MBR.SIGNATURE ) {
    throw new Error(
      'Invalid MBR boot signature. Expected 0xAA55, but saw 0x' +
      signature.toString( 16 ).toUpperCase()
    )
  }

  if( buffer[ offset + 0x17C ] === 0x5A && buffer[ offset + 0x17D ] === 0xA5 ) {
    return 'AST' // AST/NEC
  } else if( buffer[ offset + 0x0FC ] === 0xAA && buffer[ offset + 0x0FD ] === 0x55 ) {
    return 'DISKMANAGER' // Disk Manager
  } else if( buffer.readUIntBE( offset + 0x02, 6 ) === MBR.NewLdr.SIGNATURE ) { // 'NEWLDR'
    return 'NEWLDR'
  } else if( buffer[ offset + 0x1AC ] === 0x78 && buffer[ offset + 0x1AD ] === 0x56 ) {
    return 'AAP' // Advanced Active Partitions
  } else if( buffer[ offset + 0x0DA ] === 0x00 && buffer[ offset + 0x0DB ] === 0x00 ) {
    return 'MODERN' // Modern Standard
  } else {
    return 'CLASSIC'
  }

}

/**
 * Parse a Master Boot Record from a given buffer
 * @param {Buffer} buffer
 * @param {Number} [offset=0]
 * @returns {MBR}
 */
MBR.parse = function( buffer, offset ) {
  var format = MBR.detectFormat( buffer, offset )
  switch( format ) {
    case 'MODERN': return new MBR.Modern().parse( buffer, offset )
    case 'NEWLDR': return new MBR.NewLdr().parse( buffer, offset )
    case 'DISKMANAGER': return new MBR.DiskManager().parse( buffer, offset )
    case 'AAP': return new MBR.AAP().parse( buffer, offset )
    case 'AST': return new MBR.AST().parse( buffer, offset )
    default: return new MBR.Classic().parse( buffer, offset )
  }
}

/**
 * Write a Master Boot Record to a buffer
 * @param {MBR} mbr
 * @param {Buffer} [buffer]
 * @param {Number} [offset=0]
 * @returns {Buffer}
 */
MBR.write = function( mbr, buffer, offset ) {
  buffer = buffer || Buffer.alloc( MBR.SIZE + offset )
  return mbr.write( buffer, offset || 0 )
}

MBR.Partition = require( './partition' )
MBR.Code = require( './code' )

module.exports = MBR

MBR.Classic = MBR
MBR.Modern = require( './format/modern' )
MBR.NewLdr = require( './format/newldr' )
MBR.DiskManager = require( './format/dm' )
MBR.AAP = require( './format/aap' )
MBR.AST = require( './format/ast' )
