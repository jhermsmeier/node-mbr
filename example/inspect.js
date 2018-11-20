#!/usr/bin/env node

var MBR = require( '..' )
var inspect = require( '../test/inspect' )
var fs = require( 'fs' )
var argv = process.argv.slice( 2 )

var filename = argv.shift()

var fd = fs.openSync( filename, 'r' )

var length = MBR.SIZE
var buffer = Buffer.alloc( length )
var offset = 0
var position = 0

fs.read( fd, buffer, offset, length, position )

var mbr = MBR.parse( buffer )

inspect.log( mbr )
