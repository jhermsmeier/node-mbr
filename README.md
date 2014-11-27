# MBR - Master Boot Record
[![npm](http://img.shields.io/npm/v/mbr.svg?style=flat)](https://npmjs.org/mbr)
[![npm downloads](http://img.shields.io/npm/dm/mbr.svg?style=flat)](https://npmjs.org/mbr)
[![build status](http://img.shields.io/travis/jhermsmeier/node-mbr.svg?style=flat)](https://travis-ci.org/jhermsmeier/node-mbr)


## Install via [npm](https://npmjs.org)

```sh
$ npm install mbr
```


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
