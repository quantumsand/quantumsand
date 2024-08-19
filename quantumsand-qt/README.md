# quantumsand Qt
This Qt6 application is part of the quantumsand Edu Art-Game-Storytelling platform.

## To build quantumsand on macOS:
You do not need to use QEMU. Follow the Linux instructions below and use this:
```
 Qt6_DIR='/opt/homebrew' cmake .. -DCMAKE_PREFIX_PATH='/opt/homebrew'
```

## To build quantumsand on Windows:

You need to use Windows Subsystem for Linux version 2. Details to follow.

## To build quantumsand on Linux:

Download tar.xz for Qt everywhere source.

Install all of the dependencies for your Linux distribution. WebEngine requires newer versions of CMake. This may have to be manually installed depending on your Linux distro.

```bash
tar -xvf qt-everywhere-src-6.4.0.tar.xz
mkdir qt6-build
cd qt6-build
../qt-everywhere-src-6.4.0/configure --prefix=/'/path/to/Qt6/Qt-6.4.0' -opensource -confirm-license -qt-freetype -feature-vulkan
cmake --build . --parallel
cmake --install .
```

## To build quantumsand-qt:

```bash
cd quantumsand-qt
mkdir build
cd build
Qt6_DIR='/path/to/Qt6/Qt-6.4.0' cmake .. -DCMAKE_PREFIX_PATH='/path/to/Qt6/Qt-6.4.0'
make
./quantumsand
```

## To test Bevy inside quantumsand:
```bash
cd bevy
WINIT_UNIX_BACKEND=wayland WAYLAND_DISPLAY=wayland-1 cargo run --features bevy/wayland --example animated_fox
```

## To test Bevy inside quantumsand with lavapipe:
```bash
cd bevy
VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/lvp_icd.x86_64.json WINIT_UNIX_BACKEND=wayland WAYLAND_DISPLAY=wayland-1 cargo run --features bevy/wayland --example animated_fox
```

## To test Bevy inside quantumsand with locally built mesa vulkan drivers (lavapipe)
```bash
WGPU_BACKEND=vulkan VK_ICD_FILENAMES="/home/drewpotter/Desktop/Projects/mesa-local/share/vulkan/icd.d/lvp_icd.x86_64.json" WINIT_UNIX_BACKEND=wayland WAYLAND_DISPLAY=wayland-1 cargo run --features bevy/wayland --example lighting
```

## Qt WebEngine vulkan tip
```bash
QSG_RHI_BACKEND=vulkan ./quantumsand
```

## Qt WebEngine vulkan with lavapipe
```bash
VK_ICD_FILENAMES="/home/drewpotter/Desktop/Projects/mesa-local/share/vulkan/icd.d/lvp_icd.x86_64.json" QSG_RHI_BACKEND=vulkan ./quantumsand
```
