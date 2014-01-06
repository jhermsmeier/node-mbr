# MBR - Master Boot Record
[![build status](https://secure.travis-ci.org/jhermsmeier/node-mbr.png)](http://travis-ci.org/jhermsmeier/node-mbr)
[![NPM version](https://badge.fury.io/js/mbr.png)](https://npmjs.org/mbr)


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
- **partitionCount**: *Number*, defauts to `4`
- **partitions**: *Array*

#### Methods:

- **parse**( buffer ): *MBR*
  - *Buffer* **buffer**


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
