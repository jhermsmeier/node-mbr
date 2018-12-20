# Changelog

## v2.0.0

- refactor(modern): Move disk sig. to reflect prop order
- refactor(mbr): Flatten mbr.code into single code region
- test: Add basic sanity tests for all formats
- fix(mbr): Use MBR#signature in .write()
- fix(aap-record): Use read signature in parse() & write()
- fix(newldr): Implement .write()
- fix(newldr): Correct OEM signature length
- fix(diskmanager): Correct partition entry count
- fix(modern): Only parse & write optional fields if present
- fix(mbr): Improve detection of Modern format MBRs
- feat(lib): Add optional `noAssert` argv to parsing methods
- doc(README): Update example output, add references
- test(samples): Refactor & add input / output equality test
- refactor(format): Rewrite DiskManager format class
- fix(lib): Fix code region lengths
- feat(mbr): Add argument type checks in MBR#parse()
- refactor(format): Rewrite MBR.AAP format & record
- refactor(format): Rewrite MBR.AST format class
- refactor(format): Rewrite MBR.Modern format class
- refactor(mbr): Refactor MBR.parse()
- refactor(mbr): Rename NewLoader -> NewLdr
- feat(newldr): Consolidate NEWLDR record into format
- refactor(lib): Rewrite MBR & Code base classes
- test: Switch from MBR ctor to MBR.parse()
- test(ci): Add Node v8, v10; remove v4
- refactor(partition): Rewrite partition entry parsing
- refactor(aap): Rewrite AAP Record class
- fix(lib): Use Buffer.alloc()

## v1.1.3

- chore(package): Update dependencies
- doc(README): Add used-by and related modules sections

## v1.1.2

- chore(package): Bump chs to 1.0.1, update mocha

## v1.1.1

- fix(mbr): Return correct EFI partition or null

## v1.1.0

- Add benchmarks
- Add MBR#getEFIPart()
- test: Add parse tests for samples
- test: Rename test/mbr.js -> test/bootcamp-hybrid.js
- test: Add data/syslinux.bin
- test: Add data/rufus.bin
- test: Add data/rpi3.bin
- doc: Add Formats.md
- Move API.md -> doc/README.md
