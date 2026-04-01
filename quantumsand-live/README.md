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

## Building Linux arm64 on macOS using Apple Containerization

* Install Xcode. Go into the App Store. Once installed click Open.
* Agree to the Xcode and Apple SDKs Agreement.
* Choose any platform support you wish; You need the macOS option selected.
* Click "Download & Install".
* After installation you should see a popup; "What's New in Xcode".
* Click Continue.
* You can close Xcode for now.
* Ensure the Xcode app is in the `/Applications` directory.
* `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer`
* Install Apple Containerization; a Swift package for running Linux containers on macOS.
* Launch the Terminal app; In a separate directory; Outside of quantumsand;
* Clone containerization; `git clone https://github.com/apple/containerization.git`
* Launch Visual Studio Code; `code containerization`
* Run the following command; `make cross-prep`
* You should see the following message:
```
Installing Swiftly...
```
* With a block of text explaining the installation...
* You are asked `Proceed? (Y/n):`
* Type `y` and press return
* Close and reopen your terminal.
* Run this command: `which swift`
* You should see the following message:
```
/Users/your-user-name/.swiftly/bin/swift
```
* Build Containerization from sources; `make all`
* Eventually you should see the following message;
```
Build complete! (56.33s)
Creating init.ext4...
creating initfs image vminit:latest...
```
* Fetch a default kernel; `make fetch-default-kernel`
* Run integration tests; `make all test integration`
* You should see a lot of messages...
```
Building containerization binaries...
swift-driver version: 1.148.6 Apple Swift version 6.3 (swiftlang-6.3.0.123.5 clang-2100.0.123.102)
Target: arm64-apple-macosx26.0

Integration suite completed in...
```

More to follow.
