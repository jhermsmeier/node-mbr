# MBR - Master Boot Record
[![npm](http://img.shields.io/npm/v/mbr.svg?style=flat-square)](https://npmjs.com/mbr)
[![npm downloads](http://img.shields.io/npm/dm/mbr.svg?style=flat-square)](https://npmjs.com/mbr)
[![build status](http://img.shields.io/travis/jhermsmeier/node-mbr.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-mbr)

## Install via [npm](https://npmjs.com)

```sh
$ npm install mbr
```

## Handling Logical Partitions

Logical partitions are not entries in the MBR. They're constructed from the contents of an extended partition's Extended Boot Records (EBR), which are essentially the same in structure as an MBR and can be parsed with this module as well.

In order to read logical partitions, find a partition entry that's marked as extended partition container (type `0x05`, see `lib/partition-types.js`), then read that partition's first 512 bytes (the EBR), parse that, then look for additional EBRs in the extended partition. For more detail on how extended / logical partitions work, see [Wikipedia / Extended Boot Record](https://en.wikipedia.org/wiki/Extended_boot_record)

## Usage

### new MBR( buffer )

> *Buffer* __buffer__ (optional)  

#### Properties:

- **type**: *String*, defauts to `'CLASSIC'`
- **tableOffset**: *Number*, defauts to `0x1BE`
- **partitions**: *Array*

#### Methods:

- **parse**( buffer ): *MBR*
  - *Buffer* **buffer**
- **toBuffer**(): *Buffer*


### new MBR.Partition( buffer )

> *Buffer* __buffer__ (optional)  

#### Properties:

- **status**: *Number*, defauts to `0x00`
- **type**: *Number*, defauts to `0x00`
- **info**: *Array*, type metadata (optional)
- **sectors**: *Number*, defauts to `0`
- **firstLBA**: *Number*, defauts to `0`
- **firstCHS**: *CHS*
- **lastCHS**: *CHS*

#### Methods:

- **parse**( buffer ): *MBR*
  - *Buffer* **buffer**
