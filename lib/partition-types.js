// var partitionInfo = {
//   type: 0x07,
//   occurrence: MBR ^ EBR,
//   addressing: CHS ^ LBA,
//   bootable: true,
//   attributes: FILE_SYSTEM || CONTAINER || HIDDEN_FS ||
//     SECURED_FS || SERVICE_FS || HIDDEN_CONTAINER ||
//     SERVICE || FREE || HIBERNATION || POLICY_FS ||
//     SECURED || IMAGE || BLOCKER || SECURED_CONTAINER || HIDDEN,
//   origins: [
//     'Microsoft',
//     'IBM',
//     'Quantum Software Systems',
//   ],
//   support: [
//     'OS/2 1.2+',
//     'Windows NT',
//     'Windows Embedded CE',
//     'QNX 2',
//   ],
//   description: '...'
// }

// partitionInfo.ATTR = {
//   FREE:         1 << 0,
//   FILE_SYSTEM:  1 << 1,
//   CONTAINER:    1 << 2,
//   HIDDEN:       1 << 3,
//   SECURED:      1 << 4,
//   SERVICE:      1 << 5,
//   IMAGE:        1 << 6,
//   BLOCKER:      1 << 7,
//   POLICY:       1 << 8,
// }

module.exports = {
  0x00: 'EMPTY',
  0x01: 'FAT12',
  0x04: 'FAT16',
  0x05: 'MS_EXTENDED',
  0x06: 'FAT16',
  0x07: 'NTFS',
  0x0B: 'FAT32',
  0x0C: 'FAT32',
  0x0E: 'FAT16',
  0x0F: 'MS_EXTENDED',
  0x11: 'HIDDEN_FAT12',
  0x14: 'HIDDEN_FAT16',
  0x16: 'HIDDEN_FAT16',
  0x1B: 'HIDDEN_FAT32',
  0x1C: 'HIDDEN_FAT32',
  0x1E: 'HIDDEN_FAT16',
  0x42: 'MS_MBR_DYNAMIC',
  0x82: 'SOLARIS_X86.LINUX_SWAP',
  0x83: 'LINUX',
  0x84: 'HIBERNATION',
  0x85: 'LINUX_EXTENDED',
  0x86: 'NTFS_VOLUME_SET',
  0x87: 'NTFS_VOLUME_SET_1',
  0xA0: 'HIBERNATION_1',
  0xA1: 'HIBERNATION_2',
  0xA5: 'FREEBSD',
  0xA6: 'OPENBSD',
  0xA8: 'MACOSX',
  0xA9: 'NETBSD',
  0xAB: 'MACOSX_BOOT',
  0xB7: 'BSDI',
  0xB8: 'BSDI_SWAP',
  0xEE: 'EFI_GPT',
  0xEF: 'EFI_SYSTEM_PARTITION',
  0xFB: 'VMWARE_FILE_SYSTEM',
  0xFC: 'VMWARE_SWAP',
}
