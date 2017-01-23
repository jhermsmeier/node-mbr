# MBR Format Structures
<!-- MarkdownTOC -->

- Classic
- Modern

<!-- /MarkdownTOC -->


## Classic

Structure of a classical generic MBR

| Hex Offset | Dec Offset | Size (bytes) | Description                  |
|-----------:|-----------:|-------------:|:-----------------------------|
|    `0x000` |        `0` |        `446` | Bootstrap code area          |
|    `0x1BE` |      `446` |         `16` | Partition entry 1            |
|    `0x1CE` |      `462` |         `16` | Partition entry 2            |
|    `0x1DE` |      `478` |         `16` | Partition entry 3            |
|    `0x1EE` |      `494` |         `16` | Partition entry 4            |
|    `0x1FE` |      `510` |          `1` | `0x55` Boot signature byte 1 |
|    `0x1FF` |      `511` |          `1` | `0xAA` Boot signature byte 2 |


## Modern

Structure of a modern standard MBR

| Hex Offset | Dec Offset |   Size (bytes) | Description                                                                |
|-----------:|-----------:|---------------:|:---------------------------------------------------------------------------|
|    `0x000` |        `0` |          `218` | Bootstrap code area (part 1)                                               |
|    `0x0DA` |      `218` |            `6` | Disk timestamp (optional). Alternatively, OEM loader signature with NEWLDR |
|    `0x0E0` |      `224` | `216` or `222` | Bootstrap code area (part 2)                                               |
|    `0x1B8` |      `440` |            `6` | Disk signature (optional)                                                  |
|    `0x1BE` |      `446` |           `16` | Partition entry 1                                                          |
|    `0x1CE` |      `462` |           `16` | Partition entry 2                                                          |
|    `0x1DE` |      `478` |           `16` | Partition entry 3                                                          |
|    `0x1EE` |      `494` |           `16` | Partition entry 4                                                          |
|    `0x1FE` |      `510` |            `1` | `0x55` Boot signature byte 1                                               |
|    `0x1FF` |      `511` |            `1` | `0xAA` Boot signature byte 2                                               |

Disk timestamp (MS-DOS 7.1–8.0 and Windows 95B/98/98SE/ME)

| Hex Offset | Dec Offset | Size (bytes) | Description                             |
|-----------:|-----------:|-------------:|:----------------------------------------|
|    `0x0DA` |      `218` |          `2` | `0x0000`                                |
|    `0x0DC` |      `220` |          `1` | Original physical drive (`0x80`–`0xFF`) |
|    `0x0DD` |      `221` |          `1` | Seconds (0–59)                          |
|    `0x0DE` |      `222` |          `1` | Minutes (0–59)                          |
|    `0x0DF` |      `223` |          `1` | Hours (0–23)                            |

Disk signature (UEFI, Windows NT/2000/Vista/7 and other OSes)

| Hex Offset | Dec Offset | Size (bytes) | Description                           |
|-----------:|-----------:|-------------:|:--------------------------------------|
|    `0x1B8` |      `440` |          `4` | 32-bit disk signature                 |
|    `0x1BC` |      `444` |          `2` | `0x0000` (`0x5A5A` if copy-protected) |
