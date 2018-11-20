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
var mbr = MBR.parse( buffer )
```

```js
// TODO
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
