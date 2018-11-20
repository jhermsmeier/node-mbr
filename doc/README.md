# API Reference
<a name="MBR"></a>

## MBR
Master Boot Record (MBR)

**Kind**: global class  

* [MBR](#MBR)
    * [new MBR()](#new_MBR_new)
    * _instance_
        * [.signature](#MBR+signature) : <code>Number</code>
        * [.code](#MBR+code) : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
        * [.partitions](#MBR+partitions) : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
        * [.type](#MBR+type) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.codeRegions](#MBR+codeRegions) : <code>Number</code>
        * [.getEFIPart()](#MBR+getEFIPart) ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
        * [.parse(buffer, [offset])](#MBR+parse) ⇒ <code>Record</code>
        * [.write([buffer], [offset])](#MBR+write) ⇒ <code>Buffer</code>
    * _static_
        * [.Code](#MBR.Code)
            * [new Code([offset], [length])](#new_MBR.Code_new)
            * [.offset](#MBR.Code+offset) : <code>Number</code>
            * [.length](#MBR.Code+length) : <code>Number</code>
            * [.data](#MBR.Code+data) : <code>Buffer</code>
        * [.AAP](#MBR.AAP) ⇐ [<code>MBR</code>](#MBR)
            * [new AAP()](#new_MBR.AAP_new)
            * _instance_
                * [.aap](#MBR.AAP+aap) : [<code>Record</code>](#MBR.AAP.Record)
                * [.signature](#MBR+signature) : <code>Number</code>
                * [.code](#MBR+code) : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
                * [.partitions](#MBR+partitions) : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
                * [.type](#MBR+type) : <code>String</code>
                * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
                * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
                * [.codeRegions](#MBR+codeRegions) : <code>Number</code>
                * [.parse(buffer, [offset])](#MBR.AAP+parse) ⇒ <code>Record</code>
                * [.write([buffer], [offset])](#MBR.AAP+write) ⇒ <code>Buffer</code>
                * [.getEFIPart()](#MBR+getEFIPart) ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
            * _static_
                * [.Record](#MBR.AAP.Record)
                    * [new Record()](#new_MBR.AAP.Record_new)
                    * _instance_
                        * [.physicalDrive](#MBR.AAP.Record+physicalDrive) : <code>Number</code>
                        * [.firstCHS](#MBR.AAP.Record+firstCHS) : <code>CHS</code>
                        * [.partitionType](#MBR.AAP.Record+partitionType) : <code>Number</code>
                        * [.lastCHS](#MBR.AAP.Record+lastCHS) : <code>CHS</code>
                        * [.firstLBA](#MBR.AAP.Record+firstLBA) : <code>Number</code>
                        * [.sectors](#MBR.AAP.Record+sectors) : <code>Number</code>
                        * [.parse(buffer, [offset])](#MBR.AAP.Record+parse) ⇒ <code>Record</code>
                        * [.write([buffer], [offset])](#MBR.AAP.Record+write) ⇒ <code>Buffer</code>
                    * _static_
                        * [.SIZE](#MBR.AAP.Record.SIZE) : <code>Number</code>
                        * [.SIGNATURE](#MBR.AAP.Record.SIGNATURE) : <code>Number</code>
                * [.TABLE_OFFSET](#MBR.AAP.TABLE_OFFSET) : <code>Number</code>
                * [.PARTITION_ENTRIES](#MBR.AAP.PARTITION_ENTRIES) : <code>Number</code>
                * [.CODE_REGIONS](#MBR.AAP.CODE_REGIONS) : <code>Array.&lt;Object&gt;</code>
        * [.AST](#MBR.AST) ⇐ [<code>MBR</code>](#MBR)
            * [new AST()](#new_MBR.AST_new)
            * _instance_
                * [.signature](#MBR+signature) : <code>Number</code>
                * [.code](#MBR+code) : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
                * [.partitions](#MBR+partitions) : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
                * [.type](#MBR+type) : <code>String</code>
                * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
                * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
                * [.codeRegions](#MBR+codeRegions) : <code>Number</code>
                * [.parse(buffer, [offset])](#MBR.AST+parse) ⇒ <code>Record</code>
                * [.write([buffer], [offset])](#MBR.AST+write) ⇒ <code>Buffer</code>
                * [.getEFIPart()](#MBR+getEFIPart) ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
            * _static_
                * [.TABLE_OFFSET](#MBR.AST.TABLE_OFFSET) : <code>Number</code>
                * [.PARTITION_ENTRIES](#MBR.AST.PARTITION_ENTRIES) : <code>Number</code>
                * [.CODE_REGIONS](#MBR.AST.CODE_REGIONS) : <code>Array.&lt;Object&gt;</code>
        * [.DiskManager](#MBR.DiskManager) ⇐ [<code>MBR</code>](#MBR)
            * [new DiskManager()](#new_MBR.DiskManager_new)
            * _instance_
                * [.signature](#MBR+signature) : <code>Number</code>
                * [.code](#MBR+code) : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
                * [.partitions](#MBR+partitions) : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
                * [.type](#MBR+type) : <code>String</code>
                * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
                * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
                * [.codeRegions](#MBR+codeRegions) : <code>Number</code>
                * [.parse(buffer, [offset])](#MBR.DiskManager+parse) ⇒ <code>Record</code>
                * [.write([buffer], [offset])](#MBR.DiskManager+write) ⇒ <code>Buffer</code>
                * [.getEFIPart()](#MBR+getEFIPart) ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
            * _static_
                * [.TABLE_OFFSET](#MBR.DiskManager.TABLE_OFFSET) : <code>Number</code>
                * [.PARTITION_ENTRIES](#MBR.DiskManager.PARTITION_ENTRIES) : <code>Number</code>
                * [.CODE_REGIONS](#MBR.DiskManager.CODE_REGIONS) : <code>Array.&lt;Object&gt;</code>
        * [.Modern](#MBR.Modern) ⇐ [<code>MBR</code>](#MBR)
            * [new Modern()](#new_MBR.Modern_new)
            * _instance_
                * [.physicalDrive](#MBR.Modern+physicalDrive) : <code>Number</code>
                * [.timestamp](#MBR.Modern+timestamp) : <code>Object</code>
                * [.diskSignature](#MBR.Modern+diskSignature) : <code>Number</code>
                * [.copyProtected](#MBR.Modern+copyProtected) : <code>Boolean</code>
                * [.signature](#MBR+signature) : <code>Number</code>
                * [.code](#MBR+code) : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
                * [.partitions](#MBR+partitions) : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
                * [.type](#MBR+type) : <code>String</code>
                * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
                * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
                * [.codeRegions](#MBR+codeRegions) : <code>Number</code>
                * [.parse(buffer, [offset])](#MBR.Modern+parse) ⇒ <code>Record</code>
                * [.write([buffer], [offset])](#MBR.Modern+write) ⇒ <code>Buffer</code>
                * [.getEFIPart()](#MBR+getEFIPart) ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
            * _static_
                * [.TABLE_OFFSET](#MBR.Modern.TABLE_OFFSET) : <code>Number</code>
                * [.PARTITION_ENTRIES](#MBR.Modern.PARTITION_ENTRIES) : <code>Number</code>
                * [.CODE_REGIONS](#MBR.Modern.CODE_REGIONS) : <code>Array.&lt;Object&gt;</code>
        * [.NewLdr](#MBR.NewLdr) ⇐ [<code>MBR</code>](#MBR)
            * [new NewLdr()](#new_MBR.NewLdr_new)
            * _instance_
                * [.jmp](#MBR.NewLdr+jmp) : <code>Number</code>
                * [.loaderSignature](#MBR.NewLdr+loaderSignature) : <code>String</code>
                * [.physicalDrive](#MBR.NewLdr+physicalDrive) : <code>Number</code>
                * [.firstCHS](#MBR.NewLdr+firstCHS) : <code>CHS</code>
                * [.minDL](#MBR.NewLdr+minDL) : <code>Number</code>
                * [.reserved](#MBR.NewLdr+reserved) : <code>Buffer</code>
                * [.firstLBA](#MBR.NewLdr+firstLBA) : <code>Number</code>
                * [.patchOffset](#MBR.NewLdr+patchOffset) : <code>Number</code>
                * [.checksum](#MBR.NewLdr+checksum) : <code>Number</code>
                * [.oem](#MBR.NewLdr+oem) : <code>String</code>
                * [.aap](#MBR.NewLdr+aap) : [<code>Partition</code>](#MBR.Partition)
                * [.signature](#MBR+signature) : <code>Number</code>
                * [.code](#MBR+code) : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
                * [.partitions](#MBR+partitions) : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
                * [.type](#MBR+type) : <code>String</code>
                * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
                * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
                * [.codeRegions](#MBR+codeRegions) : <code>Number</code>
                * [.parse(buffer, [offset])](#MBR.NewLdr+parse) ⇒ <code>Record</code>
                * [.write([buffer], [offset])](#MBR.NewLdr+write) ⇒ <code>Buffer</code>
                * [.getEFIPart()](#MBR+getEFIPart) ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
            * _static_
                * [.SIGNATURE](#MBR.NewLdr.SIGNATURE) : <code>Number</code>
                * [.TABLE_OFFSET](#MBR.NewLdr.TABLE_OFFSET) : <code>Number</code>
                * [.PARTITION_ENTRIES](#MBR.NewLdr.PARTITION_ENTRIES) : <code>Number</code>
                * [.CODE_REGIONS](#MBR.NewLdr.CODE_REGIONS) : <code>Array.&lt;Object&gt;</code>
        * [.Partition](#MBR.Partition)
            * [new Partition()](#new_MBR.Partition_new)
            * _instance_
                * [.status](#MBR.Partition+status) : <code>Number</code>
                * [.type](#MBR.Partition+type) : <code>Number</code>
                * [.sectors](#MBR.Partition+sectors) : <code>Number</code>
                * [.firstLBA](#MBR.Partition+firstLBA) : <code>Number</code>
                * [.firstCHS](#MBR.Partition+firstCHS) : <code>Number</code>
                * [.lastCHS](#MBR.Partition+lastCHS) : <code>Number</code>
                * [.statusText](#MBR.Partition+statusText) : <code>String</code>
                * [.active](#MBR.Partition+active) : <code>Boolean</code>
                * [.inactive](#MBR.Partition+inactive) : <code>Boolean</code>
                * [.invalid](#MBR.Partition+invalid) : <code>Boolean</code>
                * [.extended](#MBR.Partition+extended) : <code>Boolean</code>
                * [.lastLBA](#MBR.Partition+lastLBA) : <code>Number</code>
                * [.byteOffset([blockSize])](#MBR.Partition+byteOffset) ⇒ <code>Number</code>
                * [.byteSize([blockSize])](#MBR.Partition+byteSize) ⇒ <code>Number</code>
                * [.parse(buffer, [offset])](#MBR.Partition+parse) ⇒ <code>Record</code>
                * [.write([buffer], [offset])](#MBR.Partition+write) ⇒ <code>Buffer</code>
            * _static_
                * [.size](#MBR.Partition.size) : <code>Number</code>
                * [.EXTENDED](#MBR.Partition.EXTENDED) : <code>Array</code>
                * [.parse([buffer], [offset])](#MBR.Partition.parse) ⇒ <code>Partition</code>
                * [.isExtended(type)](#MBR.Partition.isExtended) ⇒ <code>Boolean</code>
        * [.SIZE](#MBR.SIZE) : <code>Number</code>
        * [.SIGNATURE](#MBR.SIGNATURE) : <code>Number</code>
        * [.TABLE_OFFSET](#MBR.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.PARTITION_ENTRIES) : <code>Number</code>
        * [.CODE_REGIONS](#MBR.CODE_REGIONS) : <code>Array.&lt;Object&gt;</code>
        * [.detectFormat(buffer, [offset])](#MBR.detectFormat) ⇒ <code>String</code>
        * [.parse(buffer, [offset])](#MBR.parse) ⇒ [<code>MBR</code>](#MBR)
        * [.write(mbr, [buffer], [offset])](#MBR.write) ⇒ <code>Buffer</code>


* * *

<a name="new_MBR_new"></a>

### new MBR()
Creates a Master Boot Record


* * *

<a name="MBR+signature"></a>

### mbR.signature : <code>Number</code>
Signature

**Kind**: instance property of [<code>MBR</code>](#MBR)  

* * *

<a name="MBR+code"></a>

### mbR.code : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
Bootloader code

**Kind**: instance property of [<code>MBR</code>](#MBR)  

* * *

<a name="MBR+partitions"></a>

### mbR.partitions : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
Partition table

**Kind**: instance property of [<code>MBR</code>](#MBR)  

* * *

<a name="MBR+type"></a>

### mbR.type : <code>String</code>
MBR format

**Kind**: instance property of [<code>MBR</code>](#MBR)  
**Read only**: true  

* * *

<a name="MBR+tableOffset"></a>

### mbR.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of [<code>MBR</code>](#MBR)  
**Read only**: true  

* * *

<a name="MBR+partitionEntries"></a>

### mbR.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of [<code>MBR</code>](#MBR)  
**Read only**: true  

* * *

<a name="MBR+codeRegions"></a>

### mbR.codeRegions : <code>Number</code>
Number of code regions

**Kind**: instance property of [<code>MBR</code>](#MBR)  
**Read only**: true  

* * *

<a name="MBR+getEFIPart"></a>

### mbR.getEFIPart() ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
Get the EFI system partition if available

**Kind**: instance method of [<code>MBR</code>](#MBR)  

* * *

<a name="MBR+parse"></a>

### mbR.parse(buffer, [offset]) ⇒ <code>Record</code>
Parse a Master Boot Record from a buffer

**Kind**: instance method of [<code>MBR</code>](#MBR)  
**Params**

- buffer <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR+write"></a>

### mbR.write([buffer], [offset]) ⇒ <code>Buffer</code>
Write a Master Boot Record to a buffer

**Kind**: instance method of [<code>MBR</code>](#MBR)  
**Params**

- [buffer] <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.Code"></a>

### MBR.Code
Code region

**Kind**: static class of [<code>MBR</code>](#MBR)  

* [.Code](#MBR.Code)
    * [new Code([offset], [length])](#new_MBR.Code_new)
    * [.offset](#MBR.Code+offset) : <code>Number</code>
    * [.length](#MBR.Code+length) : <code>Number</code>
    * [.data](#MBR.Code+data) : <code>Buffer</code>


* * *

<a name="new_MBR.Code_new"></a>

#### new Code([offset], [length])
Creates a code region

**Params**

- [offset] <code>Number</code> <code> = 0</code>
- [length] <code>Number</code>


* * *

<a name="MBR.Code+offset"></a>

#### code.offset : <code>Number</code>
Offset of code region within MBR

**Kind**: instance property of [<code>Code</code>](#MBR.Code)  

* * *

<a name="MBR.Code+length"></a>

#### code.length : <code>Number</code>
Length of code region in bytes

**Kind**: instance property of [<code>Code</code>](#MBR.Code)  

* * *

<a name="MBR.Code+data"></a>

#### code.data : <code>Buffer</code>
Bytes

**Kind**: instance property of [<code>Code</code>](#MBR.Code)  

* * *

<a name="MBR.AAP"></a>

### MBR.AAP ⇐ [<code>MBR</code>](#MBR)
AAP (Advanced Active Partition) Master Boot Record

**Kind**: static class of [<code>MBR</code>](#MBR)  
**Extends**: [<code>MBR</code>](#MBR)  

* [.AAP](#MBR.AAP) ⇐ [<code>MBR</code>](#MBR)
    * [new AAP()](#new_MBR.AAP_new)
    * _instance_
        * [.aap](#MBR.AAP+aap) : [<code>Record</code>](#MBR.AAP.Record)
        * [.signature](#MBR+signature) : <code>Number</code>
        * [.code](#MBR+code) : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
        * [.partitions](#MBR+partitions) : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
        * [.type](#MBR+type) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.codeRegions](#MBR+codeRegions) : <code>Number</code>
        * [.parse(buffer, [offset])](#MBR.AAP+parse) ⇒ <code>Record</code>
        * [.write([buffer], [offset])](#MBR.AAP+write) ⇒ <code>Buffer</code>
        * [.getEFIPart()](#MBR+getEFIPart) ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
    * _static_
        * [.Record](#MBR.AAP.Record)
            * [new Record()](#new_MBR.AAP.Record_new)
            * _instance_
                * [.physicalDrive](#MBR.AAP.Record+physicalDrive) : <code>Number</code>
                * [.firstCHS](#MBR.AAP.Record+firstCHS) : <code>CHS</code>
                * [.partitionType](#MBR.AAP.Record+partitionType) : <code>Number</code>
                * [.lastCHS](#MBR.AAP.Record+lastCHS) : <code>CHS</code>
                * [.firstLBA](#MBR.AAP.Record+firstLBA) : <code>Number</code>
                * [.sectors](#MBR.AAP.Record+sectors) : <code>Number</code>
                * [.parse(buffer, [offset])](#MBR.AAP.Record+parse) ⇒ <code>Record</code>
                * [.write([buffer], [offset])](#MBR.AAP.Record+write) ⇒ <code>Buffer</code>
            * _static_
                * [.SIZE](#MBR.AAP.Record.SIZE) : <code>Number</code>
                * [.SIGNATURE](#MBR.AAP.Record.SIGNATURE) : <code>Number</code>
        * [.TABLE_OFFSET](#MBR.AAP.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.AAP.PARTITION_ENTRIES) : <code>Number</code>
        * [.CODE_REGIONS](#MBR.AAP.CODE_REGIONS) : <code>Array.&lt;Object&gt;</code>


* * *

<a name="new_MBR.AAP_new"></a>

#### new AAP()
Creates an AAP (Advanced Active Partition) Master Boot Record


* * *

<a name="MBR.AAP+aap"></a>

#### aaP.aap : [<code>Record</code>](#MBR.AAP.Record)
AAP Record

**Kind**: instance property of [<code>AAP</code>](#MBR.AAP)  

* * *

<a name="MBR+signature"></a>

#### aaP.signature : <code>Number</code>
Signature

**Kind**: instance property of [<code>AAP</code>](#MBR.AAP)  

* * *

<a name="MBR+code"></a>

#### aaP.code : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
Bootloader code

**Kind**: instance property of [<code>AAP</code>](#MBR.AAP)  

* * *

<a name="MBR+partitions"></a>

#### aaP.partitions : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
Partition table

**Kind**: instance property of [<code>AAP</code>](#MBR.AAP)  

* * *

<a name="MBR+type"></a>

#### aaP.type : <code>String</code>
MBR format

**Kind**: instance property of [<code>AAP</code>](#MBR.AAP)  
**Read only**: true  

* * *

<a name="MBR+tableOffset"></a>

#### aaP.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of [<code>AAP</code>](#MBR.AAP)  
**Read only**: true  

* * *

<a name="MBR+partitionEntries"></a>

#### aaP.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of [<code>AAP</code>](#MBR.AAP)  
**Read only**: true  

* * *

<a name="MBR+codeRegions"></a>

#### aaP.codeRegions : <code>Number</code>
Number of code regions

**Kind**: instance property of [<code>AAP</code>](#MBR.AAP)  
**Read only**: true  

* * *

<a name="MBR.AAP+parse"></a>

#### aaP.parse(buffer, [offset]) ⇒ <code>Record</code>
Parse a Master Boot Record from a buffer

**Kind**: instance method of [<code>AAP</code>](#MBR.AAP)  
**Overrides**: [<code>parse</code>](#MBR+parse)  
**Params**

- buffer <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.AAP+write"></a>

#### aaP.write([buffer], [offset]) ⇒ <code>Buffer</code>
Write a Master Boot Record to a buffer

**Kind**: instance method of [<code>AAP</code>](#MBR.AAP)  
**Overrides**: [<code>write</code>](#MBR+write)  
**Params**

- [buffer] <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR+getEFIPart"></a>

#### aaP.getEFIPart() ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
Get the EFI system partition if available

**Kind**: instance method of [<code>AAP</code>](#MBR.AAP)  

* * *

<a name="MBR.AAP.Record"></a>

#### AAP.Record
AAP Record

**Kind**: static class of [<code>AAP</code>](#MBR.AAP)  

* [.Record](#MBR.AAP.Record)
    * [new Record()](#new_MBR.AAP.Record_new)
    * _instance_
        * [.physicalDrive](#MBR.AAP.Record+physicalDrive) : <code>Number</code>
        * [.firstCHS](#MBR.AAP.Record+firstCHS) : <code>CHS</code>
        * [.partitionType](#MBR.AAP.Record+partitionType) : <code>Number</code>
        * [.lastCHS](#MBR.AAP.Record+lastCHS) : <code>CHS</code>
        * [.firstLBA](#MBR.AAP.Record+firstLBA) : <code>Number</code>
        * [.sectors](#MBR.AAP.Record+sectors) : <code>Number</code>
        * [.parse(buffer, [offset])](#MBR.AAP.Record+parse) ⇒ <code>Record</code>
        * [.write([buffer], [offset])](#MBR.AAP.Record+write) ⇒ <code>Buffer</code>
    * _static_
        * [.SIZE](#MBR.AAP.Record.SIZE) : <code>Number</code>
        * [.SIGNATURE](#MBR.AAP.Record.SIGNATURE) : <code>Number</code>


* * *

<a name="new_MBR.AAP.Record_new"></a>

##### new Record()
Creates an AAP Record structure


* * *

<a name="MBR.AAP.Record+physicalDrive"></a>

##### record.physicalDrive : <code>Number</code>
AAP physical drive (80h-FEh; 00h: not used; 01h-7Fh, FFh: reserved)

**Kind**: instance property of [<code>Record</code>](#MBR.AAP.Record)  

* * *

<a name="MBR.AAP.Record+firstCHS"></a>

##### record.firstCHS : <code>CHS</code>
CHS (start) address of AAP partition/image file or VBR/EBR

**Kind**: instance property of [<code>Record</code>](#MBR.AAP.Record)  

* * *

<a name="MBR.AAP.Record+partitionType"></a>

##### record.partitionType : <code>Number</code>
AAP partition type (00h if not used) (optional)

**Kind**: instance property of [<code>Record</code>](#MBR.AAP.Record)  

* * *

<a name="MBR.AAP.Record+lastCHS"></a>

##### record.lastCHS : <code>CHS</code>
CHS end address in AAP (optional, 000000h if not used)

**Kind**: instance property of [<code>Record</code>](#MBR.AAP.Record)  

* * *

<a name="MBR.AAP.Record+firstLBA"></a>

##### record.firstLBA : <code>Number</code>
Start LBA of AAP image file or VBR/EBR

**Kind**: instance property of [<code>Record</code>](#MBR.AAP.Record)  

* * *

<a name="MBR.AAP.Record+sectors"></a>

##### record.sectors : <code>Number</code>
Reserved for sectors in AAP (optional; 00000000h if not used)

**Kind**: instance property of [<code>Record</code>](#MBR.AAP.Record)  

* * *

<a name="MBR.AAP.Record+parse"></a>

##### record.parse(buffer, [offset]) ⇒ <code>Record</code>
Parse an AAP Record from a buffer

**Kind**: instance method of [<code>Record</code>](#MBR.AAP.Record)  
**Params**

- buffer <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.AAP.Record+write"></a>

##### record.write([buffer], [offset]) ⇒ <code>Buffer</code>
Write an AAP Record to a buffer

**Kind**: instance method of [<code>Record</code>](#MBR.AAP.Record)  
**Params**

- [buffer] <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.AAP.Record.SIZE"></a>

##### Record.SIZE : <code>Number</code>
Size of AAP Record structure in bytes

**Kind**: static constant of [<code>Record</code>](#MBR.AAP.Record)  

* * *

<a name="MBR.AAP.Record.SIGNATURE"></a>

##### Record.SIGNATURE : <code>Number</code>
Partition table offset

**Kind**: static constant of [<code>Record</code>](#MBR.AAP.Record)  

* * *

<a name="MBR.AAP.TABLE_OFFSET"></a>

#### AAP.TABLE_OFFSET : <code>Number</code>
Partition table offset

**Kind**: static constant of [<code>AAP</code>](#MBR.AAP)  

* * *

<a name="MBR.AAP.PARTITION_ENTRIES"></a>

#### AAP.PARTITION_ENTRIES : <code>Number</code>
Number of partition entries

**Kind**: static constant of [<code>AAP</code>](#MBR.AAP)  

* * *

<a name="MBR.AAP.CODE_REGIONS"></a>

#### AAP.CODE_REGIONS : <code>Array.&lt;Object&gt;</code>
Code region layout

**Kind**: static constant of [<code>AAP</code>](#MBR.AAP)  

* * *

<a name="MBR.AST"></a>

### MBR.AST ⇐ [<code>MBR</code>](#MBR)
AST/NEC Master Boot Record

**Kind**: static class of [<code>MBR</code>](#MBR)  
**Extends**: [<code>MBR</code>](#MBR)  

* [.AST](#MBR.AST) ⇐ [<code>MBR</code>](#MBR)
    * [new AST()](#new_MBR.AST_new)
    * _instance_
        * [.signature](#MBR+signature) : <code>Number</code>
        * [.code](#MBR+code) : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
        * [.partitions](#MBR+partitions) : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
        * [.type](#MBR+type) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.codeRegions](#MBR+codeRegions) : <code>Number</code>
        * [.parse(buffer, [offset])](#MBR.AST+parse) ⇒ <code>Record</code>
        * [.write([buffer], [offset])](#MBR.AST+write) ⇒ <code>Buffer</code>
        * [.getEFIPart()](#MBR+getEFIPart) ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
    * _static_
        * [.TABLE_OFFSET](#MBR.AST.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.AST.PARTITION_ENTRIES) : <code>Number</code>
        * [.CODE_REGIONS](#MBR.AST.CODE_REGIONS) : <code>Array.&lt;Object&gt;</code>


* * *

<a name="new_MBR.AST_new"></a>

#### new AST()
Creates a AST/NEC Master Boot Record


* * *

<a name="MBR+signature"></a>

#### asT.signature : <code>Number</code>
Signature

**Kind**: instance property of [<code>AST</code>](#MBR.AST)  

* * *

<a name="MBR+code"></a>

#### asT.code : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
Bootloader code

**Kind**: instance property of [<code>AST</code>](#MBR.AST)  

* * *

<a name="MBR+partitions"></a>

#### asT.partitions : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
Partition table

**Kind**: instance property of [<code>AST</code>](#MBR.AST)  

* * *

<a name="MBR+type"></a>

#### asT.type : <code>String</code>
MBR format

**Kind**: instance property of [<code>AST</code>](#MBR.AST)  
**Read only**: true  

* * *

<a name="MBR+tableOffset"></a>

#### asT.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of [<code>AST</code>](#MBR.AST)  
**Read only**: true  

* * *

<a name="MBR+partitionEntries"></a>

#### asT.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of [<code>AST</code>](#MBR.AST)  
**Read only**: true  

* * *

<a name="MBR+codeRegions"></a>

#### asT.codeRegions : <code>Number</code>
Number of code regions

**Kind**: instance property of [<code>AST</code>](#MBR.AST)  
**Read only**: true  

* * *

<a name="MBR.AST+parse"></a>

#### asT.parse(buffer, [offset]) ⇒ <code>Record</code>
Parse a Master Boot Record from a buffer

**Kind**: instance method of [<code>AST</code>](#MBR.AST)  
**Overrides**: [<code>parse</code>](#MBR+parse)  
**Params**

- buffer <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.AST+write"></a>

#### asT.write([buffer], [offset]) ⇒ <code>Buffer</code>
Write a Master Boot Record to a buffer

**Kind**: instance method of [<code>AST</code>](#MBR.AST)  
**Overrides**: [<code>write</code>](#MBR+write)  
**Params**

- [buffer] <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR+getEFIPart"></a>

#### asT.getEFIPart() ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
Get the EFI system partition if available

**Kind**: instance method of [<code>AST</code>](#MBR.AST)  

* * *

<a name="MBR.AST.TABLE_OFFSET"></a>

#### AST.TABLE_OFFSET : <code>Number</code>
Partition table offset

**Kind**: static constant of [<code>AST</code>](#MBR.AST)  

* * *

<a name="MBR.AST.PARTITION_ENTRIES"></a>

#### AST.PARTITION_ENTRIES : <code>Number</code>
Partition table entry count

**Kind**: static constant of [<code>AST</code>](#MBR.AST)  

* * *

<a name="MBR.AST.CODE_REGIONS"></a>

#### AST.CODE_REGIONS : <code>Array.&lt;Object&gt;</code>
Code region layout

**Kind**: static constant of [<code>AST</code>](#MBR.AST)  

* * *

<a name="MBR.DiskManager"></a>

### MBR.DiskManager ⇐ [<code>MBR</code>](#MBR)
DiskManager (DM) Master Boot Record

**Kind**: static class of [<code>MBR</code>](#MBR)  
**Extends**: [<code>MBR</code>](#MBR)  

* [.DiskManager](#MBR.DiskManager) ⇐ [<code>MBR</code>](#MBR)
    * [new DiskManager()](#new_MBR.DiskManager_new)
    * _instance_
        * [.signature](#MBR+signature) : <code>Number</code>
        * [.code](#MBR+code) : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
        * [.partitions](#MBR+partitions) : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
        * [.type](#MBR+type) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.codeRegions](#MBR+codeRegions) : <code>Number</code>
        * [.parse(buffer, [offset])](#MBR.DiskManager+parse) ⇒ <code>Record</code>
        * [.write([buffer], [offset])](#MBR.DiskManager+write) ⇒ <code>Buffer</code>
        * [.getEFIPart()](#MBR+getEFIPart) ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
    * _static_
        * [.TABLE_OFFSET](#MBR.DiskManager.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.DiskManager.PARTITION_ENTRIES) : <code>Number</code>
        * [.CODE_REGIONS](#MBR.DiskManager.CODE_REGIONS) : <code>Array.&lt;Object&gt;</code>


* * *

<a name="new_MBR.DiskManager_new"></a>

#### new DiskManager()
Creates a DiskManager Master Boot Record


* * *

<a name="MBR+signature"></a>

#### diskManager.signature : <code>Number</code>
Signature

**Kind**: instance property of [<code>DiskManager</code>](#MBR.DiskManager)  

* * *

<a name="MBR+code"></a>

#### diskManager.code : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
Bootloader code

**Kind**: instance property of [<code>DiskManager</code>](#MBR.DiskManager)  

* * *

<a name="MBR+partitions"></a>

#### diskManager.partitions : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
Partition table

**Kind**: instance property of [<code>DiskManager</code>](#MBR.DiskManager)  

* * *

<a name="MBR+type"></a>

#### diskManager.type : <code>String</code>
MBR format

**Kind**: instance property of [<code>DiskManager</code>](#MBR.DiskManager)  
**Read only**: true  

* * *

<a name="MBR+tableOffset"></a>

#### diskManager.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of [<code>DiskManager</code>](#MBR.DiskManager)  
**Read only**: true  

* * *

<a name="MBR+partitionEntries"></a>

#### diskManager.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of [<code>DiskManager</code>](#MBR.DiskManager)  
**Read only**: true  

* * *

<a name="MBR+codeRegions"></a>

#### diskManager.codeRegions : <code>Number</code>
Number of code regions

**Kind**: instance property of [<code>DiskManager</code>](#MBR.DiskManager)  
**Read only**: true  

* * *

<a name="MBR.DiskManager+parse"></a>

#### diskManager.parse(buffer, [offset]) ⇒ <code>Record</code>
Parse a Master Boot Record from a buffer

**Kind**: instance method of [<code>DiskManager</code>](#MBR.DiskManager)  
**Overrides**: [<code>parse</code>](#MBR+parse)  
**Params**

- buffer <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.DiskManager+write"></a>

#### diskManager.write([buffer], [offset]) ⇒ <code>Buffer</code>
Write a Master Boot Record to a buffer

**Kind**: instance method of [<code>DiskManager</code>](#MBR.DiskManager)  
**Overrides**: [<code>write</code>](#MBR+write)  
**Params**

- [buffer] <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR+getEFIPart"></a>

#### diskManager.getEFIPart() ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
Get the EFI system partition if available

**Kind**: instance method of [<code>DiskManager</code>](#MBR.DiskManager)  

* * *

<a name="MBR.DiskManager.TABLE_OFFSET"></a>

#### DiskManager.TABLE_OFFSET : <code>Number</code>
Partition table offset

**Kind**: static constant of [<code>DiskManager</code>](#MBR.DiskManager)  

* * *

<a name="MBR.DiskManager.PARTITION_ENTRIES"></a>

#### DiskManager.PARTITION_ENTRIES : <code>Number</code>
Number of partition entries

**Kind**: static constant of [<code>DiskManager</code>](#MBR.DiskManager)  

* * *

<a name="MBR.DiskManager.CODE_REGIONS"></a>

#### DiskManager.CODE_REGIONS : <code>Array.&lt;Object&gt;</code>
Code region layout

**Kind**: static constant of [<code>DiskManager</code>](#MBR.DiskManager)  

* * *

<a name="MBR.Modern"></a>

### MBR.Modern ⇐ [<code>MBR</code>](#MBR)
Modern Master Boot Record

**Kind**: static class of [<code>MBR</code>](#MBR)  
**Extends**: [<code>MBR</code>](#MBR)  

* [.Modern](#MBR.Modern) ⇐ [<code>MBR</code>](#MBR)
    * [new Modern()](#new_MBR.Modern_new)
    * _instance_
        * [.physicalDrive](#MBR.Modern+physicalDrive) : <code>Number</code>
        * [.timestamp](#MBR.Modern+timestamp) : <code>Object</code>
        * [.diskSignature](#MBR.Modern+diskSignature) : <code>Number</code>
        * [.copyProtected](#MBR.Modern+copyProtected) : <code>Boolean</code>
        * [.signature](#MBR+signature) : <code>Number</code>
        * [.code](#MBR+code) : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
        * [.partitions](#MBR+partitions) : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
        * [.type](#MBR+type) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.codeRegions](#MBR+codeRegions) : <code>Number</code>
        * [.parse(buffer, [offset])](#MBR.Modern+parse) ⇒ <code>Record</code>
        * [.write([buffer], [offset])](#MBR.Modern+write) ⇒ <code>Buffer</code>
        * [.getEFIPart()](#MBR+getEFIPart) ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
    * _static_
        * [.TABLE_OFFSET](#MBR.Modern.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.Modern.PARTITION_ENTRIES) : <code>Number</code>
        * [.CODE_REGIONS](#MBR.Modern.CODE_REGIONS) : <code>Array.&lt;Object&gt;</code>


* * *

<a name="new_MBR.Modern_new"></a>

#### new Modern()
Creates a Modern Master Boot Record


* * *

<a name="MBR.Modern+physicalDrive"></a>

#### modern.physicalDrive : <code>Number</code>
Original physical drive (80h-FFh)

**Kind**: instance property of [<code>Modern</code>](#MBR.Modern)  

* * *

<a name="MBR.Modern+timestamp"></a>

#### modern.timestamp : <code>Object</code>
Disk timestamp (optional)

**Kind**: instance property of [<code>Modern</code>](#MBR.Modern)  

* * *

<a name="MBR.Modern+diskSignature"></a>

#### modern.diskSignature : <code>Number</code>
Disk signature (32bit, optional)

**Kind**: instance property of [<code>Modern</code>](#MBR.Modern)  

* * *

<a name="MBR.Modern+copyProtected"></a>

#### modern.copyProtected : <code>Boolean</code>
Copy Protection

**Kind**: instance property of [<code>Modern</code>](#MBR.Modern)  

* * *

<a name="MBR+signature"></a>

#### modern.signature : <code>Number</code>
Signature

**Kind**: instance property of [<code>Modern</code>](#MBR.Modern)  

* * *

<a name="MBR+code"></a>

#### modern.code : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
Bootloader code

**Kind**: instance property of [<code>Modern</code>](#MBR.Modern)  

* * *

<a name="MBR+partitions"></a>

#### modern.partitions : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
Partition table

**Kind**: instance property of [<code>Modern</code>](#MBR.Modern)  

* * *

<a name="MBR+type"></a>

#### modern.type : <code>String</code>
MBR format

**Kind**: instance property of [<code>Modern</code>](#MBR.Modern)  
**Read only**: true  

* * *

<a name="MBR+tableOffset"></a>

#### modern.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of [<code>Modern</code>](#MBR.Modern)  
**Read only**: true  

* * *

<a name="MBR+partitionEntries"></a>

#### modern.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of [<code>Modern</code>](#MBR.Modern)  
**Read only**: true  

* * *

<a name="MBR+codeRegions"></a>

#### modern.codeRegions : <code>Number</code>
Number of code regions

**Kind**: instance property of [<code>Modern</code>](#MBR.Modern)  
**Read only**: true  

* * *

<a name="MBR.Modern+parse"></a>

#### modern.parse(buffer, [offset]) ⇒ <code>Record</code>
Parse a Master Boot Record from a buffer

**Kind**: instance method of [<code>Modern</code>](#MBR.Modern)  
**Overrides**: [<code>parse</code>](#MBR+parse)  
**Params**

- buffer <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.Modern+write"></a>

#### modern.write([buffer], [offset]) ⇒ <code>Buffer</code>
Write a Master Boot Record to a buffer

**Kind**: instance method of [<code>Modern</code>](#MBR.Modern)  
**Overrides**: [<code>write</code>](#MBR+write)  
**Params**

- [buffer] <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR+getEFIPart"></a>

#### modern.getEFIPart() ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
Get the EFI system partition if available

**Kind**: instance method of [<code>Modern</code>](#MBR.Modern)  

* * *

<a name="MBR.Modern.TABLE_OFFSET"></a>

#### Modern.TABLE_OFFSET : <code>Number</code>
Default partition table offset

**Kind**: static constant of [<code>Modern</code>](#MBR.Modern)  

* * *

<a name="MBR.Modern.PARTITION_ENTRIES"></a>

#### Modern.PARTITION_ENTRIES : <code>Number</code>
Default number of partition entries

**Kind**: static constant of [<code>Modern</code>](#MBR.Modern)  

* * *

<a name="MBR.Modern.CODE_REGIONS"></a>

#### Modern.CODE_REGIONS : <code>Array.&lt;Object&gt;</code>
Code region layout

**Kind**: static constant of [<code>Modern</code>](#MBR.Modern)  

* * *

<a name="MBR.NewLdr"></a>

### MBR.NewLdr ⇐ [<code>MBR</code>](#MBR)
NewLoader (NEWLDR) Master Boot Record

**Kind**: static class of [<code>MBR</code>](#MBR)  
**Extends**: [<code>MBR</code>](#MBR)  

* [.NewLdr](#MBR.NewLdr) ⇐ [<code>MBR</code>](#MBR)
    * [new NewLdr()](#new_MBR.NewLdr_new)
    * _instance_
        * [.jmp](#MBR.NewLdr+jmp) : <code>Number</code>
        * [.loaderSignature](#MBR.NewLdr+loaderSignature) : <code>String</code>
        * [.physicalDrive](#MBR.NewLdr+physicalDrive) : <code>Number</code>
        * [.firstCHS](#MBR.NewLdr+firstCHS) : <code>CHS</code>
        * [.minDL](#MBR.NewLdr+minDL) : <code>Number</code>
        * [.reserved](#MBR.NewLdr+reserved) : <code>Buffer</code>
        * [.firstLBA](#MBR.NewLdr+firstLBA) : <code>Number</code>
        * [.patchOffset](#MBR.NewLdr+patchOffset) : <code>Number</code>
        * [.checksum](#MBR.NewLdr+checksum) : <code>Number</code>
        * [.oem](#MBR.NewLdr+oem) : <code>String</code>
        * [.aap](#MBR.NewLdr+aap) : [<code>Partition</code>](#MBR.Partition)
        * [.signature](#MBR+signature) : <code>Number</code>
        * [.code](#MBR+code) : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
        * [.partitions](#MBR+partitions) : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
        * [.type](#MBR+type) : <code>String</code>
        * [.tableOffset](#MBR+tableOffset) : <code>Number</code>
        * [.partitionEntries](#MBR+partitionEntries) : <code>Number</code>
        * [.codeRegions](#MBR+codeRegions) : <code>Number</code>
        * [.parse(buffer, [offset])](#MBR.NewLdr+parse) ⇒ <code>Record</code>
        * [.write([buffer], [offset])](#MBR.NewLdr+write) ⇒ <code>Buffer</code>
        * [.getEFIPart()](#MBR+getEFIPart) ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
    * _static_
        * [.SIGNATURE](#MBR.NewLdr.SIGNATURE) : <code>Number</code>
        * [.TABLE_OFFSET](#MBR.NewLdr.TABLE_OFFSET) : <code>Number</code>
        * [.PARTITION_ENTRIES](#MBR.NewLdr.PARTITION_ENTRIES) : <code>Number</code>
        * [.CODE_REGIONS](#MBR.NewLdr.CODE_REGIONS) : <code>Array.&lt;Object&gt;</code>


* * *

<a name="new_MBR.NewLdr_new"></a>

#### new NewLdr()
Creates a NewLoader Master Boot Record


* * *

<a name="MBR.NewLdr+jmp"></a>

#### newLdr.jmp : <code>Number</code>
NEWLDR record size

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr+loaderSignature"></a>

#### newLdr.loaderSignature : <code>String</code>
NEWLDR signature

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr+physicalDrive"></a>

#### newLdr.physicalDrive : <code>Number</code>
Physical drive and boot flag

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr+firstCHS"></a>

#### newLdr.firstCHS : <code>CHS</code>
CHS address of LOADER boot sector or image file

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr+minDL"></a>

#### newLdr.minDL : <code>Number</code>
Allowed DL minimum, else take from partition table

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr+reserved"></a>

#### newLdr.reserved : <code>Buffer</code>
Reserved bytes

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr+firstLBA"></a>

#### newLdr.firstLBA : <code>Number</code>
LBA of LOADER boot sector or image file (optional)

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr+patchOffset"></a>

#### newLdr.patchOffset : <code>Number</code>
Patch offset of VBR boot unit

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr+checksum"></a>

#### newLdr.checksum : <code>Number</code>
Checksum (0000h if not used)

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr+oem"></a>

#### newLdr.oem : <code>String</code>
OEM loader signature (optional)

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr+aap"></a>

#### newLdr.aap : [<code>Partition</code>](#MBR.Partition)
AAP partition entry #0 with special semantics

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR+signature"></a>

#### newLdr.signature : <code>Number</code>
Signature

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR+code"></a>

#### newLdr.code : [<code>Array.&lt;Code&gt;</code>](#MBR.Code)
Bootloader code

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR+partitions"></a>

#### newLdr.partitions : [<code>Array.&lt;Partition&gt;</code>](#MBR.Partition)
Partition table

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR+type"></a>

#### newLdr.type : <code>String</code>
MBR format

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  
**Read only**: true  

* * *

<a name="MBR+tableOffset"></a>

#### newLdr.tableOffset : <code>Number</code>
Partition table offset

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  
**Read only**: true  

* * *

<a name="MBR+partitionEntries"></a>

#### newLdr.partitionEntries : <code>Number</code>
Number of partition entries

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  
**Read only**: true  

* * *

<a name="MBR+codeRegions"></a>

#### newLdr.codeRegions : <code>Number</code>
Number of code regions

**Kind**: instance property of [<code>NewLdr</code>](#MBR.NewLdr)  
**Read only**: true  

* * *

<a name="MBR.NewLdr+parse"></a>

#### newLdr.parse(buffer, [offset]) ⇒ <code>Record</code>
Parse a Master Boot Record from a buffer

**Kind**: instance method of [<code>NewLdr</code>](#MBR.NewLdr)  
**Overrides**: [<code>parse</code>](#MBR+parse)  
**Params**

- buffer <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.NewLdr+write"></a>

#### newLdr.write([buffer], [offset]) ⇒ <code>Buffer</code>
Write a Master Boot Record to a buffer

**Kind**: instance method of [<code>NewLdr</code>](#MBR.NewLdr)  
**Overrides**: [<code>write</code>](#MBR+write)  
**Params**

- [buffer] <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR+getEFIPart"></a>

#### newLdr.getEFIPart() ⇒ [<code>Partition</code>](#MBR.Partition) \| <code>null</code>
Get the EFI system partition if available

**Kind**: instance method of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr.SIGNATURE"></a>

#### NewLdr.SIGNATURE : <code>Number</code>
NewLoader signature (ASCII 'NEWLDR')

**Kind**: static constant of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr.TABLE_OFFSET"></a>

#### NewLdr.TABLE_OFFSET : <code>Number</code>
Default partition table offset

**Kind**: static constant of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr.PARTITION_ENTRIES"></a>

#### NewLdr.PARTITION_ENTRIES : <code>Number</code>
Default number of partition entries

**Kind**: static constant of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.NewLdr.CODE_REGIONS"></a>

#### NewLdr.CODE_REGIONS : <code>Array.&lt;Object&gt;</code>
Code region layout

**Kind**: static constant of [<code>NewLdr</code>](#MBR.NewLdr)  

* * *

<a name="MBR.Partition"></a>

### MBR.Partition
MBR Partition

**Kind**: static class of [<code>MBR</code>](#MBR)  

* [.Partition](#MBR.Partition)
    * [new Partition()](#new_MBR.Partition_new)
    * _instance_
        * [.status](#MBR.Partition+status) : <code>Number</code>
        * [.type](#MBR.Partition+type) : <code>Number</code>
        * [.sectors](#MBR.Partition+sectors) : <code>Number</code>
        * [.firstLBA](#MBR.Partition+firstLBA) : <code>Number</code>
        * [.firstCHS](#MBR.Partition+firstCHS) : <code>Number</code>
        * [.lastCHS](#MBR.Partition+lastCHS) : <code>Number</code>
        * [.statusText](#MBR.Partition+statusText) : <code>String</code>
        * [.active](#MBR.Partition+active) : <code>Boolean</code>
        * [.inactive](#MBR.Partition+inactive) : <code>Boolean</code>
        * [.invalid](#MBR.Partition+invalid) : <code>Boolean</code>
        * [.extended](#MBR.Partition+extended) : <code>Boolean</code>
        * [.lastLBA](#MBR.Partition+lastLBA) : <code>Number</code>
        * [.byteOffset([blockSize])](#MBR.Partition+byteOffset) ⇒ <code>Number</code>
        * [.byteSize([blockSize])](#MBR.Partition+byteSize) ⇒ <code>Number</code>
        * [.parse(buffer, [offset])](#MBR.Partition+parse) ⇒ <code>Record</code>
        * [.write([buffer], [offset])](#MBR.Partition+write) ⇒ <code>Buffer</code>
    * _static_
        * [.size](#MBR.Partition.size) : <code>Number</code>
        * [.EXTENDED](#MBR.Partition.EXTENDED) : <code>Array</code>
        * [.parse([buffer], [offset])](#MBR.Partition.parse) ⇒ <code>Partition</code>
        * [.isExtended(type)](#MBR.Partition.isExtended) ⇒ <code>Boolean</code>


* * *

<a name="new_MBR.Partition_new"></a>

#### new Partition()
Creates a MBR partition record


* * *

<a name="MBR.Partition+status"></a>

#### partition.status : <code>Number</code>
Partition status

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  

* * *

<a name="MBR.Partition+type"></a>

#### partition.type : <code>Number</code>
Partition type identifier

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  

* * *

<a name="MBR.Partition+sectors"></a>

#### partition.sectors : <code>Number</code>
Sector count

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  

* * *

<a name="MBR.Partition+firstLBA"></a>

#### partition.firstLBA : <code>Number</code>
LBA of first sector

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  

* * *

<a name="MBR.Partition+firstCHS"></a>

#### partition.firstCHS : <code>Number</code>
CHS address of first sector

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  

* * *

<a name="MBR.Partition+lastCHS"></a>

#### partition.lastCHS : <code>Number</code>
CHS address of last sector

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  

* * *

<a name="MBR.Partition+statusText"></a>

#### partition.statusText : <code>String</code>
Text-representation of the partition's status (active, inactive, or invalid)

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  
**Read only**: true  

* * *

<a name="MBR.Partition+active"></a>

#### partition.active : <code>Boolean</code>
Whether the partition is marked active

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  
**Read only**: true  

* * *

<a name="MBR.Partition+inactive"></a>

#### partition.inactive : <code>Boolean</code>
Whether the partition is marked inactive

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  
**Read only**: true  

* * *

<a name="MBR.Partition+invalid"></a>

#### partition.invalid : <code>Boolean</code>
Whether the partition is marked invalid

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  
**Read only**: true  

* * *

<a name="MBR.Partition+extended"></a>

#### partition.extended : <code>Boolean</code>
Whether the partition is an extended partition

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  
**Read only**: true  

* * *

<a name="MBR.Partition+lastLBA"></a>

#### partition.lastLBA : <code>Number</code>
Partition's last usable LBA

**Kind**: instance property of [<code>Partition</code>](#MBR.Partition)  
**Read only**: true  

* * *

<a name="MBR.Partition+byteOffset"></a>

#### partition.byteOffset([blockSize]) ⇒ <code>Number</code>
Calculates the partition's offset in bytes

**Kind**: instance method of [<code>Partition</code>](#MBR.Partition)  
**Params**

- [blockSize] <code>Number</code> <code> = 512</code>


* * *

<a name="MBR.Partition+byteSize"></a>

#### partition.byteSize([blockSize]) ⇒ <code>Number</code>
Calculates the partition's size in bytes

**Kind**: instance method of [<code>Partition</code>](#MBR.Partition)  
**Params**

- [blockSize] <code>Number</code> <code> = 512</code>


* * *

<a name="MBR.Partition+parse"></a>

#### partition.parse(buffer, [offset]) ⇒ <code>Record</code>
Parse an MBR partition record from a buffer

**Kind**: instance method of [<code>Partition</code>](#MBR.Partition)  
**Params**

- buffer <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.Partition+write"></a>

#### partition.write([buffer], [offset]) ⇒ <code>Buffer</code>
Write an MBR partition record to a buffer

**Kind**: instance method of [<code>Partition</code>](#MBR.Partition)  
**Params**

- [buffer] <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.Partition.size"></a>

#### Partition.size : <code>Number</code>
Partition entry size in bytes

**Kind**: static constant of [<code>Partition</code>](#MBR.Partition)  

* * *

<a name="MBR.Partition.EXTENDED"></a>

#### Partition.EXTENDED : <code>Array</code>
List of partition type IDs
used for extended partitions

**Kind**: static constant of [<code>Partition</code>](#MBR.Partition)  

* * *

<a name="MBR.Partition.parse"></a>

#### Partition.parse([buffer], [offset]) ⇒ <code>Partition</code>
Parse a MBR Partition structure

**Kind**: static method of [<code>Partition</code>](#MBR.Partition)  
**Params**

- [buffer] <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.Partition.isExtended"></a>

#### Partition.isExtended(type) ⇒ <code>Boolean</code>
Determines if a given partition type
describes an extended partition

**Kind**: static method of [<code>Partition</code>](#MBR.Partition)  
**Params**

- type <code>Number</code>


* * *

<a name="MBR.SIZE"></a>

### MBR.SIZE : <code>Number</code>
Master Boot Record size in bytes

**Kind**: static constant of [<code>MBR</code>](#MBR)  

* * *

<a name="MBR.SIGNATURE"></a>

### MBR.SIGNATURE : <code>Number</code>
Master Boot Record signature value

**Kind**: static constant of [<code>MBR</code>](#MBR)  

* * *

<a name="MBR.TABLE_OFFSET"></a>

### MBR.TABLE_OFFSET : <code>Number</code>
Partition table offset

**Kind**: static constant of [<code>MBR</code>](#MBR)  

* * *

<a name="MBR.PARTITION_ENTRIES"></a>

### MBR.PARTITION_ENTRIES : <code>Number</code>
Number of partition entries

**Kind**: static constant of [<code>MBR</code>](#MBR)  

* * *

<a name="MBR.CODE_REGIONS"></a>

### MBR.CODE_REGIONS : <code>Array.&lt;Object&gt;</code>
Code region layout

**Kind**: static constant of [<code>MBR</code>](#MBR)  

* * *

<a name="MBR.detectFormat"></a>

### MBR.detectFormat(buffer, [offset]) ⇒ <code>String</code>
Detects the MBR format of a given buffer

**Kind**: static method of [<code>MBR</code>](#MBR)  
**Returns**: <code>String</code> - format  
**Params**

- buffer <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.parse"></a>

### MBR.parse(buffer, [offset]) ⇒ [<code>MBR</code>](#MBR)
Parse a Master Boot Record from a given buffer

**Kind**: static method of [<code>MBR</code>](#MBR)  
**Params**

- buffer <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

<a name="MBR.write"></a>

### MBR.write(mbr, [buffer], [offset]) ⇒ <code>Buffer</code>
Write a Master Boot Record to a buffer

**Kind**: static method of [<code>MBR</code>](#MBR)  
**Params**

- mbr [<code>MBR</code>](#MBR)
- [buffer] <code>Buffer</code>
- [offset] <code>Number</code> <code> = 0</code>


* * *

