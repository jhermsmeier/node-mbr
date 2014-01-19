/**
 * Master Boot Record Constructor
 * @param {Buffer} buffer
 */
function MBR( buffer ) {
  return buffer != null ?
    MBR.parse( buffer ) :
    new MBR.CLASSIC()
}

// Exports
module.exports = MBR

/**
 * MBR Partition Entry
 * @type {Function}
 */
MBR.Partition = require( './partition' )

MBR.CLASSIC = require( './classic' )
MBR.MODERN  = require( './modern' )
MBR.AAP     = require( './aap' )
MBR.NEWLDR  = require( './newldr' )
MBR.AST     = require( './ast' )
MBR.DM      = require( './dm' )

/**
 * Parses a MBR and returns an
 * instance of the MBR type
 * @param  {Buffer} buffer
 * @return {MBR}
 */
MBR.parse = function( value ) {
  
  var buffer = Buffer.isBuffer( value ) ?
    value : new Buffer( value )
  
  if( buffer.length < 512 )
    throw new Error( 'MBR buffer too small' )
  
  if( buffer.readUInt16LE( 0x1FE ) !== 0xAA55 ) {
    throw new SyntaxError(
      'Invalid MBR boot signature. Expected 0xAA55, ' +
      'but saw 0x' + buffer.readUInt16LE( 0x1FE )
        .toString( 16 ).toUpperCase()
    )
  }
  
  var type = MBR.detectType( buffer )
  
  return new MBR[ type ]( buffer )
  
}

/**
 * Detects the type of Master Boot Record
 * @param  {Buffer} buffer
 * @return {String} type
 */
MBR.detectType = function( buffer ) {
  
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
