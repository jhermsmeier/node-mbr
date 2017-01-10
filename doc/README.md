# API Reference
<a name="MBR"></a>

## MBR
**Kind**: global class  

* [MBR](#MBR)
    * [new MBR([buffer], [start], [end])](#new_MBR_new)
    * _instance_
        * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
        * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
        * [.format](#MBR+format) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
    * _static_
        * [.Code](#MBR.Code)
            * [new Code(buffer, [start], [end])](#new_MBR.Code_new)
            * [.length](#MBR.Code+length)
        * [.AAP](#MBR.AAP) ⇐ <code>[MBR](#MBR)</code>
            * [new AAP([buffer], [start], [end])](#new_MBR.AAP_new)
            * _instance_
                * [.aap](#MBR.AAP+aap) : <code>[Record](#MBR.AAP.Record)</code>
                * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
                * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
                * [.format](#MBR+format) : <code>String</code>
                * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
                * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
                * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
            * _static_
                * [.Record](#MBR.AAP.Record)
                    * [new Record([buffer], [start], [end])](#new_MBR.AAP.Record_new)
                    * [.physicalDrive](#MBR.AAP.Record+physicalDrive) : <code>Number</code>
                    * [.firstCHS](#MBR.AAP.Record+firstCHS) : <code>CHS</code>
                    * [.partitionType](#MBR.AAP.Record+partitionType) : <code>Number</code>
                    * [.lastCHS](#MBR.AAP.Record+lastCHS) : <code>CHS</code>
                    * [.firstLBA](#MBR.AAP.Record+firstLBA) : <code>Number</code>
                    * [.sectors](#MBR.AAP.Record+sectors) : <code>Number</code>
                    * [.buffer](#MBR.AAP.Record+buffer)
                * [.TABLE_OFFSET](#MBR.AAP.TABLE_OFFSET) : <code>Number</code>
                * [.PARTITION_ENTRIES](#MBR.AAP.PARTITION_ENTRIES) : <code>Number</code>
        * [.AST](#MBR.AST) ⇐ <code>[MBR](#MBR)</code>
            * [new AST([buffer], [start], [end])](#new_MBR.AST_new)
            * _instance_
                * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
                * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
                * [.format](#MBR+format) : <code>String</code>
                * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
                * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
                * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
            * _static_
                * [.TABLE_OFFSET](#MBR.AST.TABLE_OFFSET) : <code>Number</code>
                * [.PARTITION_ENTRIES](#MBR.AST.PARTITION_ENTRIES) : <code>Number</code>
        * [.CLASSIC](#MBR.CLASSIC) ⇐ <code>[MBR](#MBR)</code>
            * [new CLASSIC([buffer], [start], [end])](#new_MBR.CLASSIC_new)
            * _instance_
                * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
                * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
                * [.format](#MBR+format) : <code>String</code>
                * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
                * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
                * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
            * _static_
                * [.TABLE_OFFSET](#MBR.CLASSIC.TABLE_OFFSET) : <code>Number</code>
                * [.PARTITION_ENTRIES](#MBR.CLASSIC.PARTITION_ENTRIES) : <code>Number</code>
        * [.DM](#MBR.DM) ⇐ <code>[MBR](#MBR)</code>
            * [new DM([buffer], [start], [end])](#new_MBR.DM_new)
            * _instance_
                * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
                * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
                * [.format](#MBR+format) : <code>String</code>
                * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
                * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
                * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
            * _static_
                * [.TABLE_OFFSET](#MBR.DM.TABLE_OFFSET) : <code>Number</code>
                * [.PARTITION_ENTRIES](#MBR.DM.PARTITION_ENTRIES) : <code>Number</code>
        * [.MODERN](#MBR.MODERN) ⇐ <code>[MBR](#MBR)</code>
            * [new MODERN([buffer], [start], [end])](#new_MBR.MODERN_new)
            * _instance_
                * [.physicalDrive](#MBR.MODERN+physicalDrive) : <code>Number</code>
                * [.timestamp](#MBR.MODERN+timestamp) : <code>Object</code>
                * [.signature](#MBR.MODERN+signature) : <code>Number</code>
                * [.copyProtected](#MBR.MODERN+copyProtected) : <code>Boolean</code>
                * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
                * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
                * [.format](#MBR+format) : <code>String</code>
                * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
                * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
                * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
            * _static_
                * [.TABLE_OFFSET](#MBR.MODERN.TABLE_OFFSET) : <code>Number</code>
                * [.PARTITION_ENTRIES](#MBR.MODERN.PARTITION_ENTRIES) : <code>Number</code>
        * [.NEWLDR](#MBR.NEWLDR) ⇐ <code>[MBR](#MBR)</code>
            * [new NEWLDR([buffer], [start], [end])](#new_MBR.NEWLDR_new)
            * _instance_
                * [.newldr](#MBR.NEWLDR+newldr) : <code>[Record](#MBR.NEWLDR.Record)</code>
                * [.aap](#MBR.NEWLDR+aap) : <code>[Record](#MBR.AAP.Record)</code>
                * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
                * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
                * [.format](#MBR+format) : <code>String</code>
                * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
                * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
                * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
            * _static_
                * [.Record](#MBR.NEWLDR.Record)
                    * [new Record([buffer], [start], [end])](#new_MBR.NEWLDR.Record_new)
                    * [.size](#MBR.NEWLDR.Record+size) : <code>Number</code>
                    * [.physicalDrive](#MBR.NEWLDR.Record+physicalDrive) : <code>Number</code>
                    * [.firstCHS](#MBR.NEWLDR.Record+firstCHS) : <code>CHS</code>
                    * [.minDL](#MBR.NEWLDR.Record+minDL) : <code>Number</code>
                    * [.firstLBA](#MBR.NEWLDR.Record+firstLBA) : <code>Number</code>
                    * [.patchOffset](#MBR.NEWLDR.Record+patchOffset) : <code>Number</code>
                    * [.checksum](#MBR.NEWLDR.Record+checksum) : <code>Number</code>
                    * [.signature](#MBR.NEWLDR.Record+signature) : <code>String</code>
                * [.TABLE_OFFSET](#MBR.NEWLDR.TABLE_OFFSET) : <code>Number</code>
                * [.PARTITION_ENTRIES](#MBR.NEWLDR.PARTITION_ENTRIES) : <code>Number</code>
        * [.Partition](#MBR.Partition)
            * [new Partition([buffer], [start], [end])](#new_MBR.Partition_new)
            * _instance_
                * [.byteOffset(blockSize)](#MBR.Partition+byteOffset) ⇒ <code>Number</code>
                * [.byteSize(blockSize)](#MBR.Partition+byteSize) ⇒ <code>Number</code>
            * _static_
                * [.EXTENDED](#MBR.Partition.EXTENDED) : <code>Array</code>
                * [.parse([buffer], [start], [end])](#MBR.Partition.parse) ⇒ <code>Partition</code>
                * [.isExtended(type)](#MBR.Partition.isExtended) ⇒ <code>Boolean</code>
        * [.TABLE_OFFSET](#MBR.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.PARTITION_ENTRIES) : <code>Number</code>
        * [.parse(buffer, [start], [end])](#MBR.parse) ⇒ <code>[MBR](#MBR)</code>
        * [.detectFormat(buffer)](#MBR.detectFormat) ⇒ <code>String</code>
        * [.createBuffer()](#MBR.createBuffer) ⇒ <code>Buffer</code>
        * [.isExtendedPartition(partition)](#MBR.isExtendedPartition) ⇒ <code>Boolean</code>


-

<a name="new_MBR_new"></a>

### new MBR([buffer], [start], [end])
Master Boot Record (MBR)

**Params**

- [buffer] <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR+partitions"></a>

### mbR.partitions : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
Partition table

**Kind**: instance property of <code>[MBR](#MBR)</code>  

-

<a name="MBR+code"></a>

### mbR.code : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
Bootloader code

**Kind**: instance property of <code>[MBR](#MBR)</code>  

-

<a name="MBR+format"></a>

### mbR.format : <code>String</code>
MBR format

**Kind**: instance property of <code>[MBR](#MBR)</code>  
**Read only**: true  

-

<a name="MBR+tableOffset"></a>

### mbR.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of <code>[MBR](#MBR)</code>  
**Read only**: true  

-

<a name="MBR+partitionEntries"></a>

### mbR.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of <code>[MBR](#MBR)</code>  
**Read only**: true  

-

<a name="MBR+parse"></a>

### mbR.parse(buffer, [start], [end]) ⇒ <code>[MBR](#MBR)</code>
Parse a Buffer

**Kind**: instance method of <code>[MBR](#MBR)</code>  
**Params**

- buffer <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.Code"></a>

### MBR.Code
**Kind**: static class of <code>[MBR](#MBR)</code>  

* [.Code](#MBR.Code)
    * [new Code(buffer, [start], [end])](#new_MBR.Code_new)
    * [.length](#MBR.Code+length)


-

<a name="new_MBR.Code_new"></a>

#### new Code(buffer, [start], [end])
Code section structure

**Params**

- buffer <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.Code+length"></a>

#### code.length
Number of bytes

**Kind**: instance property of <code>[Code](#MBR.Code)</code>  
**Read only**: true  
**Properties**

- length <code>Number</code>  


-

<a name="MBR.AAP"></a>

### MBR.AAP ⇐ <code>[MBR](#MBR)</code>
**Kind**: static class of <code>[MBR](#MBR)</code>  
**Extends:** <code>[MBR](#MBR)</code>  

* [.AAP](#MBR.AAP) ⇐ <code>[MBR](#MBR)</code>
    * [new AAP([buffer], [start], [end])](#new_MBR.AAP_new)
    * _instance_
        * [.aap](#MBR.AAP+aap) : <code>[Record](#MBR.AAP.Record)</code>
        * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
        * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
        * [.format](#MBR+format) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
    * _static_
        * [.Record](#MBR.AAP.Record)
            * [new Record([buffer], [start], [end])](#new_MBR.AAP.Record_new)
            * [.physicalDrive](#MBR.AAP.Record+physicalDrive) : <code>Number</code>
            * [.firstCHS](#MBR.AAP.Record+firstCHS) : <code>CHS</code>
            * [.partitionType](#MBR.AAP.Record+partitionType) : <code>Number</code>
            * [.lastCHS](#MBR.AAP.Record+lastCHS) : <code>CHS</code>
            * [.firstLBA](#MBR.AAP.Record+firstLBA) : <code>Number</code>
            * [.sectors](#MBR.AAP.Record+sectors) : <code>Number</code>
            * [.buffer](#MBR.AAP.Record+buffer)
        * [.TABLE_OFFSET](#MBR.AAP.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.AAP.PARTITION_ENTRIES) : <code>Number</code>


-

<a name="new_MBR.AAP_new"></a>

#### new AAP([buffer], [start], [end])
AAP (Advanced Active Partitions)

**Params**

- [buffer] <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.AAP+aap"></a>

#### aaP.aap : <code>[Record](#MBR.AAP.Record)</code>
AAP Record

**Kind**: instance property of <code>[AAP](#MBR.AAP)</code>  

-

<a name="MBR+partitions"></a>

#### aaP.partitions : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
Partition table

**Kind**: instance property of <code>[AAP](#MBR.AAP)</code>  

-

<a name="MBR+code"></a>

#### aaP.code : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
Bootloader code

**Kind**: instance property of <code>[AAP](#MBR.AAP)</code>  

-

<a name="MBR+format"></a>

#### aaP.format : <code>String</code>
MBR format

**Kind**: instance property of <code>[AAP](#MBR.AAP)</code>  
**Read only**: true  

-

<a name="MBR+tableOffset"></a>

#### aaP.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of <code>[AAP](#MBR.AAP)</code>  
**Read only**: true  

-

<a name="MBR+partitionEntries"></a>

#### aaP.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of <code>[AAP](#MBR.AAP)</code>  
**Read only**: true  

-

<a name="MBR+parse"></a>

#### aaP.parse(buffer, [start], [end]) ⇒ <code>[MBR](#MBR)</code>
Parse a Buffer

**Kind**: instance method of <code>[AAP](#MBR.AAP)</code>  
**Params**

- buffer <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.AAP.Record"></a>

#### AAP.Record
**Kind**: static class of <code>[AAP](#MBR.AAP)</code>  

* [.Record](#MBR.AAP.Record)
    * [new Record([buffer], [start], [end])](#new_MBR.AAP.Record_new)
    * [.physicalDrive](#MBR.AAP.Record+physicalDrive) : <code>Number</code>
    * [.firstCHS](#MBR.AAP.Record+firstCHS) : <code>CHS</code>
    * [.partitionType](#MBR.AAP.Record+partitionType) : <code>Number</code>
    * [.lastCHS](#MBR.AAP.Record+lastCHS) : <code>CHS</code>
    * [.firstLBA](#MBR.AAP.Record+firstLBA) : <code>Number</code>
    * [.sectors](#MBR.AAP.Record+sectors) : <code>Number</code>
    * [.buffer](#MBR.AAP.Record+buffer)


-

<a name="new_MBR.AAP.Record_new"></a>

##### new Record([buffer], [start], [end])
AAP Record

**Params**

- [buffer] <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.AAP.Record+physicalDrive"></a>

##### record.physicalDrive : <code>Number</code>
AAP physical drive (80h-FEh; 00h: not used; 01h-7Fh, FFh: reserved)

**Kind**: instance property of <code>[Record](#MBR.AAP.Record)</code>  

-

<a name="MBR.AAP.Record+firstCHS"></a>

##### record.firstCHS : <code>CHS</code>
CHS (start) address of AAP partition/image file or VBR/EBR

**Kind**: instance property of <code>[Record](#MBR.AAP.Record)</code>  

-

<a name="MBR.AAP.Record+partitionType"></a>

##### record.partitionType : <code>Number</code>
AAP partition type (00h if not used) (optional)

**Kind**: instance property of <code>[Record](#MBR.AAP.Record)</code>  

-

<a name="MBR.AAP.Record+lastCHS"></a>

##### record.lastCHS : <code>CHS</code>
CHS end address in AAP (optional, 000000h if not used)

**Kind**: instance property of <code>[Record](#MBR.AAP.Record)</code>  

-

<a name="MBR.AAP.Record+firstLBA"></a>

##### record.firstLBA : <code>Number</code>
Start LBA of AAP image file or VBR/EBR

**Kind**: instance property of <code>[Record](#MBR.AAP.Record)</code>  

-

<a name="MBR.AAP.Record+sectors"></a>

##### record.sectors : <code>Number</code>
Reserved for sectors in AAP (optional; 00000000h if not used)

**Kind**: instance property of <code>[Record](#MBR.AAP.Record)</code>  

-

<a name="MBR.AAP.Record+buffer"></a>

##### record.buffer
Buffer

**Kind**: instance property of <code>[Record](#MBR.AAP.Record)</code>  
**Properties**

- buffer <code>Buffer</code>  


-

<a name="MBR.AAP.TABLE_OFFSET"></a>

#### AAP.TABLE_OFFSET : <code>Number</code>
Partition table offset

**Kind**: static constant of <code>[AAP](#MBR.AAP)</code>  

-

<a name="MBR.AAP.PARTITION_ENTRIES"></a>

#### AAP.PARTITION_ENTRIES : <code>Number</code>
Partition table entry count

**Kind**: static constant of <code>[AAP](#MBR.AAP)</code>  

-

<a name="MBR.AST"></a>

### MBR.AST ⇐ <code>[MBR](#MBR)</code>
**Kind**: static class of <code>[MBR](#MBR)</code>  
**Extends:** <code>[MBR](#MBR)</code>  

* [.AST](#MBR.AST) ⇐ <code>[MBR](#MBR)</code>
    * [new AST([buffer], [start], [end])](#new_MBR.AST_new)
    * _instance_
        * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
        * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
        * [.format](#MBR+format) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
    * _static_
        * [.TABLE_OFFSET](#MBR.AST.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.AST.PARTITION_ENTRIES) : <code>Number</code>


-

<a name="new_MBR.AST_new"></a>

#### new AST([buffer], [start], [end])
AST (AST Research / NEC MS-DOS and SpeedStor)

**Params**

- [buffer] <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR+partitions"></a>

#### asT.partitions : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
Partition table

**Kind**: instance property of <code>[AST](#MBR.AST)</code>  

-

<a name="MBR+code"></a>

#### asT.code : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
Bootloader code

**Kind**: instance property of <code>[AST](#MBR.AST)</code>  

-

<a name="MBR+format"></a>

#### asT.format : <code>String</code>
MBR format

**Kind**: instance property of <code>[AST](#MBR.AST)</code>  
**Read only**: true  

-

<a name="MBR+tableOffset"></a>

#### asT.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of <code>[AST](#MBR.AST)</code>  
**Read only**: true  

-

<a name="MBR+partitionEntries"></a>

#### asT.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of <code>[AST](#MBR.AST)</code>  
**Read only**: true  

-

<a name="MBR+parse"></a>

#### asT.parse(buffer, [start], [end]) ⇒ <code>[MBR](#MBR)</code>
Parse a Buffer

**Kind**: instance method of <code>[AST](#MBR.AST)</code>  
**Params**

- buffer <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.AST.TABLE_OFFSET"></a>

#### AST.TABLE_OFFSET : <code>Number</code>
Partition table offset

**Kind**: static constant of <code>[AST](#MBR.AST)</code>  

-

<a name="MBR.AST.PARTITION_ENTRIES"></a>

#### AST.PARTITION_ENTRIES : <code>Number</code>
Partition table entry count

**Kind**: static constant of <code>[AST](#MBR.AST)</code>  

-

<a name="MBR.CLASSIC"></a>

### MBR.CLASSIC ⇐ <code>[MBR](#MBR)</code>
**Kind**: static class of <code>[MBR](#MBR)</code>  
**Extends:** <code>[MBR](#MBR)</code>  

* [.CLASSIC](#MBR.CLASSIC) ⇐ <code>[MBR](#MBR)</code>
    * [new CLASSIC([buffer], [start], [end])](#new_MBR.CLASSIC_new)
    * _instance_
        * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
        * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
        * [.format](#MBR+format) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
    * _static_
        * [.TABLE_OFFSET](#MBR.CLASSIC.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.CLASSIC.PARTITION_ENTRIES) : <code>Number</code>


-

<a name="new_MBR.CLASSIC_new"></a>

#### new CLASSIC([buffer], [start], [end])
CLASSIC (classical generic)

**Params**

- [buffer] <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR+partitions"></a>

#### classiC.partitions : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
Partition table

**Kind**: instance property of <code>[CLASSIC](#MBR.CLASSIC)</code>  

-

<a name="MBR+code"></a>

#### classiC.code : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
Bootloader code

**Kind**: instance property of <code>[CLASSIC](#MBR.CLASSIC)</code>  

-

<a name="MBR+format"></a>

#### classiC.format : <code>String</code>
MBR format

**Kind**: instance property of <code>[CLASSIC](#MBR.CLASSIC)</code>  
**Read only**: true  

-

<a name="MBR+tableOffset"></a>

#### classiC.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of <code>[CLASSIC](#MBR.CLASSIC)</code>  
**Read only**: true  

-

<a name="MBR+partitionEntries"></a>

#### classiC.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of <code>[CLASSIC](#MBR.CLASSIC)</code>  
**Read only**: true  

-

<a name="MBR+parse"></a>

#### classiC.parse(buffer, [start], [end]) ⇒ <code>[MBR](#MBR)</code>
Parse a Buffer

**Kind**: instance method of <code>[CLASSIC](#MBR.CLASSIC)</code>  
**Params**

- buffer <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.CLASSIC.TABLE_OFFSET"></a>

#### CLASSIC.TABLE_OFFSET : <code>Number</code>
Partition table offset

**Kind**: static constant of <code>[CLASSIC](#MBR.CLASSIC)</code>  

-

<a name="MBR.CLASSIC.PARTITION_ENTRIES"></a>

#### CLASSIC.PARTITION_ENTRIES : <code>Number</code>
Partition table entry count

**Kind**: static constant of <code>[CLASSIC](#MBR.CLASSIC)</code>  

-

<a name="MBR.DM"></a>

### MBR.DM ⇐ <code>[MBR](#MBR)</code>
**Kind**: static class of <code>[MBR](#MBR)</code>  
**Extends:** <code>[MBR](#MBR)</code>  

* [.DM](#MBR.DM) ⇐ <code>[MBR](#MBR)</code>
    * [new DM([buffer], [start], [end])](#new_MBR.DM_new)
    * _instance_
        * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
        * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
        * [.format](#MBR+format) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
    * _static_
        * [.TABLE_OFFSET](#MBR.DM.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.DM.PARTITION_ENTRIES) : <code>Number</code>


-

<a name="new_MBR.DM_new"></a>

#### new DM([buffer], [start], [end])
DM (Disk Manager)

**Params**

- [buffer] <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR+partitions"></a>

#### dM.partitions : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
Partition table

**Kind**: instance property of <code>[DM](#MBR.DM)</code>  

-

<a name="MBR+code"></a>

#### dM.code : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
Bootloader code

**Kind**: instance property of <code>[DM](#MBR.DM)</code>  

-

<a name="MBR+format"></a>

#### dM.format : <code>String</code>
MBR format

**Kind**: instance property of <code>[DM](#MBR.DM)</code>  
**Read only**: true  

-

<a name="MBR+tableOffset"></a>

#### dM.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of <code>[DM](#MBR.DM)</code>  
**Read only**: true  

-

<a name="MBR+partitionEntries"></a>

#### dM.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of <code>[DM](#MBR.DM)</code>  
**Read only**: true  

-

<a name="MBR+parse"></a>

#### dM.parse(buffer, [start], [end]) ⇒ <code>[MBR](#MBR)</code>
Parse a Buffer

**Kind**: instance method of <code>[DM](#MBR.DM)</code>  
**Params**

- buffer <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.DM.TABLE_OFFSET"></a>

#### DM.TABLE_OFFSET : <code>Number</code>
Partition table offset

**Kind**: static constant of <code>[DM](#MBR.DM)</code>  

-

<a name="MBR.DM.PARTITION_ENTRIES"></a>

#### DM.PARTITION_ENTRIES : <code>Number</code>
Partition table entry count

**Kind**: static constant of <code>[DM](#MBR.DM)</code>  

-

<a name="MBR.MODERN"></a>

### MBR.MODERN ⇐ <code>[MBR](#MBR)</code>
**Kind**: static class of <code>[MBR](#MBR)</code>  
**Extends:** <code>[MBR](#MBR)</code>  

* [.MODERN](#MBR.MODERN) ⇐ <code>[MBR](#MBR)</code>
    * [new MODERN([buffer], [start], [end])](#new_MBR.MODERN_new)
    * _instance_
        * [.physicalDrive](#MBR.MODERN+physicalDrive) : <code>Number</code>
        * [.timestamp](#MBR.MODERN+timestamp) : <code>Object</code>
        * [.signature](#MBR.MODERN+signature) : <code>Number</code>
        * [.copyProtected](#MBR.MODERN+copyProtected) : <code>Boolean</code>
        * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
        * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
        * [.format](#MBR+format) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
    * _static_
        * [.TABLE_OFFSET](#MBR.MODERN.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.MODERN.PARTITION_ENTRIES) : <code>Number</code>


-

<a name="new_MBR.MODERN_new"></a>

#### new MODERN([buffer], [start], [end])
MODERN (modern standard)

**Params**

- [buffer] <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.MODERN+physicalDrive"></a>

#### moderN.physicalDrive : <code>Number</code>
Original physical drive (80h-FFh)

**Kind**: instance property of <code>[MODERN](#MBR.MODERN)</code>  

-

<a name="MBR.MODERN+timestamp"></a>

#### moderN.timestamp : <code>Object</code>
Disk timestamp (optional)

**Kind**: instance property of <code>[MODERN](#MBR.MODERN)</code>  

-

<a name="MBR.MODERN+signature"></a>

#### moderN.signature : <code>Number</code>
Disk signature (32bit, optional)

**Kind**: instance property of <code>[MODERN](#MBR.MODERN)</code>  

-

<a name="MBR.MODERN+copyProtected"></a>

#### moderN.copyProtected : <code>Boolean</code>
Copy Protection

**Kind**: instance property of <code>[MODERN](#MBR.MODERN)</code>  

-

<a name="MBR+partitions"></a>

#### moderN.partitions : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
Partition table

**Kind**: instance property of <code>[MODERN](#MBR.MODERN)</code>  

-

<a name="MBR+code"></a>

#### moderN.code : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
Bootloader code

**Kind**: instance property of <code>[MODERN](#MBR.MODERN)</code>  

-

<a name="MBR+format"></a>

#### moderN.format : <code>String</code>
MBR format

**Kind**: instance property of <code>[MODERN](#MBR.MODERN)</code>  
**Read only**: true  

-

<a name="MBR+tableOffset"></a>

#### moderN.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of <code>[MODERN](#MBR.MODERN)</code>  
**Read only**: true  

-

<a name="MBR+partitionEntries"></a>

#### moderN.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of <code>[MODERN](#MBR.MODERN)</code>  
**Read only**: true  

-

<a name="MBR+parse"></a>

#### moderN.parse(buffer, [start], [end]) ⇒ <code>[MBR](#MBR)</code>
Parse a Buffer

**Kind**: instance method of <code>[MODERN](#MBR.MODERN)</code>  
**Params**

- buffer <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.MODERN.TABLE_OFFSET"></a>

#### MODERN.TABLE_OFFSET : <code>Number</code>
Partition table offset

**Kind**: static constant of <code>[MODERN](#MBR.MODERN)</code>  

-

<a name="MBR.MODERN.PARTITION_ENTRIES"></a>

#### MODERN.PARTITION_ENTRIES : <code>Number</code>
Partition table entry count

**Kind**: static constant of <code>[MODERN](#MBR.MODERN)</code>  

-

<a name="MBR.NEWLDR"></a>

### MBR.NEWLDR ⇐ <code>[MBR](#MBR)</code>
**Kind**: static class of <code>[MBR](#MBR)</code>  
**Extends:** <code>[MBR](#MBR)</code>  

* [.NEWLDR](#MBR.NEWLDR) ⇐ <code>[MBR](#MBR)</code>
    * [new NEWLDR([buffer], [start], [end])](#new_MBR.NEWLDR_new)
    * _instance_
        * [.newldr](#MBR.NEWLDR+newldr) : <code>[Record](#MBR.NEWLDR.Record)</code>
        * [.aap](#MBR.NEWLDR+aap) : <code>[Record](#MBR.AAP.Record)</code>
        * [.partitions](#MBR+partitions) : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
        * [.code](#MBR+code) : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
        * [.format](#MBR+format) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.parse(buffer, [start], [end])](#MBR+parse) ⇒ <code>[MBR](#MBR)</code>
    * _static_
        * [.Record](#MBR.NEWLDR.Record)
            * [new Record([buffer], [start], [end])](#new_MBR.NEWLDR.Record_new)
            * [.size](#MBR.NEWLDR.Record+size) : <code>Number</code>
            * [.physicalDrive](#MBR.NEWLDR.Record+physicalDrive) : <code>Number</code>
            * [.firstCHS](#MBR.NEWLDR.Record+firstCHS) : <code>CHS</code>
            * [.minDL](#MBR.NEWLDR.Record+minDL) : <code>Number</code>
            * [.firstLBA](#MBR.NEWLDR.Record+firstLBA) : <code>Number</code>
            * [.patchOffset](#MBR.NEWLDR.Record+patchOffset) : <code>Number</code>
            * [.checksum](#MBR.NEWLDR.Record+checksum) : <code>Number</code>
            * [.signature](#MBR.NEWLDR.Record+signature) : <code>String</code>
        * [.TABLE_OFFSET](#MBR.NEWLDR.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.NEWLDR.PARTITION_ENTRIES) : <code>Number</code>


-

<a name="new_MBR.NEWLDR_new"></a>

#### new NEWLDR([buffer], [start], [end])
NEWLDR

**Params**

- [buffer] <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.NEWLDR+newldr"></a>

#### newldR.newldr : <code>[Record](#MBR.NEWLDR.Record)</code>
NEWLDR record

**Kind**: instance property of <code>[NEWLDR](#MBR.NEWLDR)</code>  

-

<a name="MBR.NEWLDR+aap"></a>

#### newldR.aap : <code>[Record](#MBR.AAP.Record)</code>
AAP partition entry #0 with special semantics

**Kind**: instance property of <code>[NEWLDR](#MBR.NEWLDR)</code>  

-

<a name="MBR+partitions"></a>

#### newldR.partitions : <code>[Array.&lt;Partition&gt;](#MBR.Partition)</code>
Partition table

**Kind**: instance property of <code>[NEWLDR](#MBR.NEWLDR)</code>  

-

<a name="MBR+code"></a>

#### newldR.code : <code>[Array.&lt;Code&gt;](#MBR.Code)</code>
Bootloader code

**Kind**: instance property of <code>[NEWLDR](#MBR.NEWLDR)</code>  

-

<a name="MBR+format"></a>

#### newldR.format : <code>String</code>
MBR format

**Kind**: instance property of <code>[NEWLDR](#MBR.NEWLDR)</code>  
**Read only**: true  

-

<a name="MBR+tableOffset"></a>

#### newldR.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of <code>[NEWLDR](#MBR.NEWLDR)</code>  
**Read only**: true  

-

<a name="MBR+partitionEntries"></a>

#### newldR.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of <code>[NEWLDR](#MBR.NEWLDR)</code>  
**Read only**: true  

-

<a name="MBR+parse"></a>

#### newldR.parse(buffer, [start], [end]) ⇒ <code>[MBR](#MBR)</code>
Parse a Buffer

**Kind**: instance method of <code>[NEWLDR](#MBR.NEWLDR)</code>  
**Params**

- buffer <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.NEWLDR.Record"></a>

#### NEWLDR.Record
**Kind**: static class of <code>[NEWLDR](#MBR.NEWLDR)</code>  

* [.Record](#MBR.NEWLDR.Record)
    * [new Record([buffer], [start], [end])](#new_MBR.NEWLDR.Record_new)
    * [.size](#MBR.NEWLDR.Record+size) : <code>Number</code>
    * [.physicalDrive](#MBR.NEWLDR.Record+physicalDrive) : <code>Number</code>
    * [.firstCHS](#MBR.NEWLDR.Record+firstCHS) : <code>CHS</code>
    * [.minDL](#MBR.NEWLDR.Record+minDL) : <code>Number</code>
    * [.firstLBA](#MBR.NEWLDR.Record+firstLBA) : <code>Number</code>
    * [.patchOffset](#MBR.NEWLDR.Record+patchOffset) : <code>Number</code>
    * [.checksum](#MBR.NEWLDR.Record+checksum) : <code>Number</code>
    * [.signature](#MBR.NEWLDR.Record+signature) : <code>String</code>


-

<a name="new_MBR.NEWLDR.Record_new"></a>

##### new Record([buffer], [start], [end])
NEWLDR Record

**Params**

- [buffer] <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.NEWLDR.Record+size"></a>

##### record.size : <code>Number</code>
NEWLDR record size

**Kind**: instance property of <code>[Record](#MBR.NEWLDR.Record)</code>  

-

<a name="MBR.NEWLDR.Record+physicalDrive"></a>

##### record.physicalDrive : <code>Number</code>
Physical drive and boot flag

**Kind**: instance property of <code>[Record](#MBR.NEWLDR.Record)</code>  

-

<a name="MBR.NEWLDR.Record+firstCHS"></a>

##### record.firstCHS : <code>CHS</code>
CHS address of LOADER boot sector or image file

**Kind**: instance property of <code>[Record](#MBR.NEWLDR.Record)</code>  

-

<a name="MBR.NEWLDR.Record+minDL"></a>

##### record.minDL : <code>Number</code>
Allowed DL minimum, else take from partition table

**Kind**: instance property of <code>[Record](#MBR.NEWLDR.Record)</code>  

-

<a name="MBR.NEWLDR.Record+firstLBA"></a>

##### record.firstLBA : <code>Number</code>
LBA of LOADER boot sector or image file (optional)

**Kind**: instance property of <code>[Record](#MBR.NEWLDR.Record)</code>  

-

<a name="MBR.NEWLDR.Record+patchOffset"></a>

##### record.patchOffset : <code>Number</code>
Patch offset of VBR boot unit

**Kind**: instance property of <code>[Record](#MBR.NEWLDR.Record)</code>  

-

<a name="MBR.NEWLDR.Record+checksum"></a>

##### record.checksum : <code>Number</code>
Checksum (0000h if not used)

**Kind**: instance property of <code>[Record](#MBR.NEWLDR.Record)</code>  

-

<a name="MBR.NEWLDR.Record+signature"></a>

##### record.signature : <code>String</code>
OEM loader signature (optional)

**Kind**: instance property of <code>[Record](#MBR.NEWLDR.Record)</code>  

-

<a name="MBR.NEWLDR.TABLE_OFFSET"></a>

#### NEWLDR.TABLE_OFFSET : <code>Number</code>
Partition table offset

**Kind**: static constant of <code>[NEWLDR](#MBR.NEWLDR)</code>  

-

<a name="MBR.NEWLDR.PARTITION_ENTRIES"></a>

#### NEWLDR.PARTITION_ENTRIES : <code>Number</code>
Partition table entry count

**Kind**: static constant of <code>[NEWLDR](#MBR.NEWLDR)</code>  

-

<a name="MBR.Partition"></a>

### MBR.Partition
**Kind**: static class of <code>[MBR](#MBR)</code>  

* [.Partition](#MBR.Partition)
    * [new Partition([buffer], [start], [end])](#new_MBR.Partition_new)
    * _instance_
        * [.byteOffset(blockSize)](#MBR.Partition+byteOffset) ⇒ <code>Number</code>
        * [.byteSize(blockSize)](#MBR.Partition+byteSize) ⇒ <code>Number</code>
    * _static_
        * [.EXTENDED](#MBR.Partition.EXTENDED) : <code>Array</code>
        * [.parse([buffer], [start], [end])](#MBR.Partition.parse) ⇒ <code>Partition</code>
        * [.isExtended(type)](#MBR.Partition.isExtended) ⇒ <code>Boolean</code>


-

<a name="new_MBR.Partition_new"></a>

#### new Partition([buffer], [start], [end])
MBR Partition

**Params**

- [buffer] <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.Partition+byteOffset"></a>

#### partition.byteOffset(blockSize) ⇒ <code>Number</code>
Calculates the partition's offset in bytes

**Kind**: instance method of <code>[Partition](#MBR.Partition)</code>  
**Params**

- blockSize <code>Number</code> - (optional, default: 512)


-

<a name="MBR.Partition+byteSize"></a>

#### partition.byteSize(blockSize) ⇒ <code>Number</code>
Calculates the partition's size in bytes

**Kind**: instance method of <code>[Partition](#MBR.Partition)</code>  
**Params**

- blockSize <code>Number</code> - (optional, default: 512)


-

<a name="MBR.Partition.EXTENDED"></a>

#### Partition.EXTENDED : <code>Array</code>
List of partition type IDs
used for extended partitions

**Kind**: static property of <code>[Partition](#MBR.Partition)</code>  

-

<a name="MBR.Partition.parse"></a>

#### Partition.parse([buffer], [start], [end]) ⇒ <code>Partition</code>
Parse a MBR Partition structure

**Kind**: static method of <code>[Partition](#MBR.Partition)</code>  
**Params**

- [buffer] <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.Partition.isExtended"></a>

#### Partition.isExtended(type) ⇒ <code>Boolean</code>
Determines if a given partition type
describes an extended partition

**Kind**: static method of <code>[Partition](#MBR.Partition)</code>  
**Params**

- type <code>Number</code>


-

<a name="MBR.TABLE_OFFSET"></a>

### MBR.TABLE_OFFSET : <code>Number</code>
Default partition table offset

**Kind**: static constant of <code>[MBR](#MBR)</code>  

-

<a name="MBR.PARTITION_ENTRIES"></a>

### MBR.PARTITION_ENTRIES : <code>Number</code>
Default number of partition entries

**Kind**: static constant of <code>[MBR](#MBR)</code>  

-

<a name="MBR.parse"></a>

### MBR.parse(buffer, [start], [end]) ⇒ <code>[MBR](#MBR)</code>
Parses a buffer into an instance of MBR

**Kind**: static method of <code>[MBR](#MBR)</code>  
**Params**

- buffer <code>Buffer</code>
- [start] <code>Number</code>
- [end] <code>Number</code>


-

<a name="MBR.detectFormat"></a>

### MBR.detectFormat(buffer) ⇒ <code>String</code>
Detects the MBR format of a given buffer

**Kind**: static method of <code>[MBR](#MBR)</code>  
**Returns**: <code>String</code> - format  
**Params**

- buffer <code>Buffer</code>


-

<a name="MBR.createBuffer"></a>

### MBR.createBuffer() ⇒ <code>Buffer</code>
Creates a blank buffer
with an MBR signature

**Kind**: static method of <code>[MBR](#MBR)</code>  

-

<a name="MBR.isExtendedPartition"></a>

### MBR.isExtendedPartition(partition) ⇒ <code>Boolean</code>
Determines if a given partition
is an extended partition

**Kind**: static method of <code>[MBR](#MBR)</code>  
**Params**

- partition <code>[Partition](#MBR.Partition)</code>


-

