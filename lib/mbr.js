var inherit = require( 'bloodline' )
var util = require( 'util' )
var tty = require( 'tty' )
var isBuffer = Buffer.isBuffer

/**
 * Master Boot Record (MBR)
 * @param {Buffer} buffer (optional)
 * @param {Number} start (optional)
 * @param {Number} end (optional)
 */
function MBR( buffer, start, end ) {
  
  if( !(this instanceof MBR) )
    return MBR.parse( buffer )
  
  // Partition table
  this.partitions = []
  // Bootloader code
  this.code = []
  
  for( var i = 0; i < this.partitionEntries; i++ ) {
    this.partitions.push(
      new MBR.Partition()
    )
  }
  
  if( isBuffer( buffer ) ) {
    this.buffer = buffer.slice( start, end )
  }
  
}

/**
 * [TABLE_OFFSET description]
 * @type {Number}
 */
MBR.TABLE_OFFSET = 0x1BE

/**
 * [PARTITION_ENTRIES description]
 * @type {Number}
 */
MBR.PARTITION_ENTRIES = 4

/**
 * [Partition description]
 * @type {Function}
 */
MBR.Partition = require( './partition' )

/**
 * [Code description]
 * @type {Function}
 */
MBR.Code = require( './code' )

/**
 * [parse description]
 * @param  {Buffer} buffer
 * @return {MBR}
 */
MBR.parse = function( buffer ) {
  var format = MBR.detectFormat( buffer )
  return new MBR[ format ]( buffer )
}

/**
 * [detectFormat description]
 * @param  {Buffer} buffer
 * @return {String} format
 */
MBR.detectFormat = function( buffer ) {
  
  if( !isBuffer( buffer ) )
    throw new TypeError( 'Argument must be a Buffer' )
  
  if( buffer.length < 512 )
    throw new Error( 'Buffer too small (must be at least 512 bytes)' )
  
  // TODO: Move this into it's own static method (?)
  if( buffer.readUInt16LE( 0x1FE ) !== 0xAA55 ) {
    throw new SyntaxError(
      'Invalid MBR boot signature. Expected 0xAA55, ' +
      'but saw 0x' + buffer.readUInt16LE( 0x1FE )
        .toString( 16 ).toUpperCase()
    )
  }
  
  if( buffer[ 0x17C ] === 0x5A && buffer[ 0x17D ] === 0xA5 ) {
    return 'AST' // AST/NEC
  } else if( buffer[ 0x0FC ] === 0xAA && buffer[ 0x0FD ] === 0x55 ) {
    return 'DM' // Disk Manager
  } else if( buffer.toString( 'ascii', 0x02 ) === 'NEWLDR' ) {
    return 'NEWLDR'
  } else if( buffer[ 0x1AC ] === 0x78 && buffer[ 0x1AD ] === 0x56 ) {
    return 'AAP'
  } else if( buffer[ 0x0DA ] === 0x00 && buffer[ 0x0DB ] === 0x00 ) {
    return 'MODERN'
  } else {
    return 'CLASSIC'
  }
  
}

/**
 * MBR prototype
 * @type {Object}
 */
MBR.prototype = {
  
  constructor: MBR,
  
  get format() {
    return this.constructor.name
  },
  
  get tableOffset() {
    return this.constructor.TABLE_OFFSET
  },
  
  get partitionEntries() {
    return this.constructor.PARTITION_ENTRIES
  },
  
  // inspect: function() {
  //   return '<' + this.constructor.name + ' ' +
  //     util.inspect( this, {
  //       colors: tty.isatty()
  //     }) + '>'
  // },
  
}

// Exports
module.exports = MBR

MBR.CLASSIC = require( './classic' )
MBR.MODERN = require( './modern' )
MBR.AAP = require( './aap' )
MBR.NEWLDR = require( './newldr' )
MBR.AST = require( './ast' )
MBR.DM = require( './dm' )
