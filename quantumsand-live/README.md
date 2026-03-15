# Quantum Sand Live

Quantum Sand Live builder RubyGem.

```
cd quantumsand-live
gem build quantumsand_live.gemspec
```

```
WARNING:  no homepage specified
WARNING:  See https://guides.rubygems.org/specification-reference/ for help
  Successfully built RubyGem
  Name: quantumsand_live
  Version: 0.0.0
  File: quantumsand_live-0.0.0.gem
```

```
gem install ./quantumsand_live-0.0.0.gem
```

```
Successfully installed quantumsand_live-0.0.0
Parsing documentation for quantumsand_live-0.0.0
Done installing documentation for quantumsand_live after 0 seconds
1 gem installed
```

```
% irb
3.3.0 :002 > require "quantumsand_live"
 => true 
3.3.0 :003 > QuantumsandLive.build
QuantumsandLive.build
Quantum Sand Live needs privileged access in order to format disks. Please enter your sudo password to continue.
```

## Crossdev

To build a cross toolchain, specify the target with the `--target` flag, such as:

`crossdev --target aarch64-unknown-linux-gnu`

To use the host LLVM toolchain as a cross compiler instead of compiling a target specific GCC toolchain, use the --llvm flag.

`crossdev --llvm --target aarch64-gentoo-linux-musl`

Manual build consists of installation of **glibc** and **@system** without recording them in **@world**.
```bash
USE=build aarch64-unknown-linux-gnu-emerge -v1 baselayout
aarch64-unknown-linux-gnu-emerge -v1 sys-libs/glibc
aarch64-unknown-linux-gnu-emerge -v1 @system
```

Thanks to: https://wiki.gentoo.org/wiki/Crossdev
User contributions are licensed under the CC-BY-SA-4.0 license.
