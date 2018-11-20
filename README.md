# Master Boot Record (MBR)
[![npm](https://img.shields.io/npm/v/mbr.svg?style=flat-square)](https://npmjs.com/package/mbr)
[![npm license](https://img.shields.io/npm/l/mbr.svg?style=flat-square)](https://npmjs.com/package/mbr)
[![npm downloads](https://img.shields.io/npm/dm/mbr.svg?style=flat-square)](https://npmjs.com/package/mbr)
[![build status](https://img.shields.io/travis/jhermsmeier/node-mbr.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-mbr)

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save mbr
```

## Used by

- **[Etcher](https://github.com/balena-io/etcher)** to flash OS images to SD cards & USB drives
- [balena-io-modules](https://github.com/balena-io-modules) / **[partitioninfo](https://github.com/balena-io-modules/partitioninfo)** to get information about partitions in a disk image
- [balena-io-modules](https://github.com/balena-io-modules) / **[resin-image-fs](https://github.com/balena-io-modules/resin-image-fs)** to configure & manipulate OS images

## Related Modules

- [gpt](https://github.com/jhermsmeier/node-gpt) – Parse, construct & verify GUID Partition Tables
- [apple-partition-map](https://github.com/jhermsmeier/node-gpt) – Parse / construct Apple Partition Maps
- [blockdevice](https://github.com/jhermsmeier/node-blockdevice) – Read from / write to block devices
- [disk](https://github.com/jhermsmeier/node-disk) – Disk / image toolbox

## Handling Extended / Logical Partitions

Logical partitions are not entries in the MBR. They're constructed from the contents of an extended partition's Extended Boot Records (EBR), which are essentially the same in structure as an MBR and can be parsed with this module as well.

In order to read logical partitions, find a partition entry that's marked as extended partition container, then read that partition's first 512 bytes (the EBR), parse that, then look for additional EBRs in the extended partition. For more detail on how extended / logical partitions work, see [Wikipedia / Extended Boot Record](https://en.wikipedia.org/wiki/Extended_boot_record)

## Usage

For a complete API reference, see [`doc/README.md`](https://github.com/jhermsmeier/node-mbr/tree/master/doc)

```js
var MBR = require( 'mbr' )
```

```js
// Obtain a Buffer of an MBR
var buffer = fs.readFileSync( 'mbr.bin' )
```

**mbr.bin**

```
Offset   00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F

000000   FA B8 00 10 8E D0 BC 00 B0 B8 00 00 8E D8 8E C0   ú¸...Ð¼.°¸...Ø.À
000010   FB BE 00 7C BF 00 06 B9 00 02 F3 A4 EA 21 06 00   û¾.|¿..¹..ó¤ê!..
000020   00 BE BE 07 38 04 75 0B 83 C6 10 81 FE FE 07 75   .¾¾.8.u..Æ..þþ.u
000030   F3 EB 16 B4 02 B0 01 BB 00 7C B2 80 8A 74 01 8B   óë.´.°.».|²..t..
000040   4C 02 CD 13 EA 00 7C 00 00 EB FE 00 00 00 00 00   L.Í.ê.|..ëþ.....
000050   00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
  --
0001A0   00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0001B0   00 00 00 00 00 00 00 00 B9 77 74 8B 00 00 80 00   ........¹wt.....
0001C0   01 40 0C 03 60 7F 00 20 00 00 00 A0 00 00 00 00   .@..`.. ... ....
0001D0   41 80 83 03 E0 FF 00 C0 00 00 00 80 05 00 00 03   A...àÿ.À........
0001E0   E0 FF 83 03 E0 FF 00 40 06 00 00 80 05 00 00 03   àÿ..àÿ.@........
0001F0   E0 FF 0F 03 E0 FF 00 C0 0B 00 00 60 20 00 55 AA   àÿ..àÿ.À...` .Uª
```

## Example

```console
$ node example/inspect.js test/data/bootcamp-hybrid.bin
```

```js
MBR {
  signature: 43605,
  code: Code {
    offset: 0,
    length: 446,
    data: <Buffer 33 c0 8e d0 bc 00 7c 8e c0 8e d8 be 00 7c bf 00 06 b9 00 02 fc f3 a4 50 68 1c 06 cb fb b9 04 00 bd be 07 80 7e 00 00 7c 0b 0f 85 0e 01 83 c5 10 e2 f1 ... >
  },
  partitions: [
    Partition {
      status: 0,
      type: 238,
      sectors: 409639,
      firstLBA: 1,
      firstCHS: CHS { cylinder: 1023, head: 255, sector: 62 },
      lastCHS: CHS { cylinder: 1023, head: 255, sector: 62 }
    },
    Partition {
      status: 0,
      type: 175,
      sectors: 52734376,
      firstLBA: 409640,
      firstCHS: CHS { cylinder: 1023, head: 255, sector: 62 },
      lastCHS: CHS { cylinder: 1023, head: 255, sector: 62 }
    },
    Partition {
      status: 0,
      type: 171,
      sectors: 1269536,
      firstLBA: 53144016,
      firstCHS: CHS { cylinder: 1023, head: 255, sector: 62 },
      lastCHS: CHS { cylinder: 1023, head: 255, sector: 62 }
    },
    Partition {
      status: 128,
      type: 7,
      sectors: 182560768,
      firstLBA: 54415360,
      firstCHS: CHS { cylinder: 1023, head: 255, sector: 62 },
      lastCHS: CHS { cylinder: 1023, head: 255, sector: 62 }
    }
  ]
}
```

## Resources

- [wikipedia.org / master boot record](https://en.wikipedia.org/wiki/Master_boot_record)
- [thestarman.pcministry.com / partition tables](https://thestarman.pcministry.com/asm/mbr/PartTables.htm)
