var MBR = require( './mbr' )

function NEWLDR( buffer ) {
  
  if( !(this instanceof NEWLDR) )
    return new NEWLDR( buffer )
  
  // MBR type name
  this.type = this.constructor.name
  // Bootloader code (size varies)
  this.code = new Buffer( 0x1AC )
  // NEWLDR record
  this.newldr = new NEWLDR.Record()
  // AAP partition entry #0 with special semantics
  this.aap = new MBR.AAP.Record()
  // Partition table offset
  this.tableOffset = 0x1BE
  // Partition table
  this.partitions = [
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
    new MBR.Partition(),
  ]
  
  if( buffer != null ) {
    this.parse( buffer )
  }
  
}

module.exports = NEWLDR

NEWLDR.Record = require( './newldr-record' )

NEWLDR.prototype = {
  
  constructor: NEWLDR,
  
  parse: function( buffer ) {
    
    this.code = buffer.slice(
      buffer[1], 0x1AC
    )
    
    this.newldr.parse(
      buffer.slice( 0, buffer[1] )
    )
    
    this.aap.parse(
      buffer.slice( 0x1AE, 0x1BE )
    )
    
    var i, count = this.partitions.length
    var offset = this.tableOffset
    
    for( i = 0; i < count; i++ ) {
      this.partitions[i].parse(
        buffer.slice( offset, offset += 0x10 )
      )
    }
    
    return this
    
  },
  
  toBuffer: function() {
    
  }
  
}
