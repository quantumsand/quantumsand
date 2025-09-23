class QuantumsandLive
  def self.build
    puts "QuantumsandLive.build"
    puts "Quantum Sand Live needs privileged access in order to format disks. Please enter your sudo password to continue."
    sudo_password = STDIN.noecho(&:gets).chomp
    dirpath = "/mnt/gentoo"

    gentoo_use_flags = %w(kde gnome gtk gtk3 gtk4 plymouth wallpapers wacom networkmanager smart
                          accessibility bluetooth crypt cups discover flatpak oxygen-theme
                          grub webengine systemd sdk rdp pulseaudio elogind browser-integration
                          crash-handler display-manager wifi wayland openh264 libproxy jpegxl
                          jack hwaccel gnome-shell eme-free dbus telemetry system-av1
                          system-harfbuzz system-icu system-jpeg system-libevent system-libvpx
                          system-webp gmp-autoupdate clang classic extras python python3_13
                          offlinehelp stun debug full-xml sip sqlite zlib bullet color-management
                          cycles cycles-bin-kernels embree ffmpeg fftw fluid gmp jemalloc manifold
                          nanovdb oidn openexr opengl openmp openpgl opensubdiv openvdb otf
                          pdf potrace pugixml sndfile tbb tiff truetype webp alembic collada
                          cuda doc experimental hip jpeg2k man ndof nls oneapi openal optix
                          osl pipewire renderdoc sdl test gstreamer vulkan postgres qt6 pdfimport
                          hangouts proprietary-codecs rar screencast system-png system-zstd vaapi
                          widevine bindist bundled-toolchain custom-cflags ffmpeg-chromium kerberos
                          dav1d fontconfig gnutls gpl libass postproc xml alsa amf amr amrenc appkit
                          bluray bs2b bzip2 cdio chromaprint chromium codec2 dvd fdk flite frei0r
                          fribidi gcrypt gme gsm iec61883 ieee1394 kvazaar ladspa lame lcms libaom
                          libaribb24 libcaca libilbc liblc3 libplacebo librtmp libsoxr libtesseract
                          lv2 lzma modplug npp nvenc opencl openmpt openssl opus qrcode qsv quirc
                          rabbitmq rav1e rubberband samba shaderc snappy sndio soc speex srt ssh
                          svg svt-av1 theora twolame v4l vdpau verify-sig vidstab vmaf vorbis
                          vpx x264 x265 xvid zeromq zimg zvbi pax-kernel pgo base zeroconf
                          events-handlers-exec security xinetd ipv6 gssapi ssl berkdb examples
                          gdbm jit socks5 systemtap aio curl fdt jpeg oss pin-upstream-blobs png
                          seccomp slirp vhost-net vnc bpf capstone fuse glusterfs infiniband
                          io-uring iscsi keyutils lzo multipath ncurses nfs numa pam plugins rbd
                          sasl sdl-image smartcard spice udev usb usbredir vde virgl virtfs xattr
                          xdp xen zstd tcmalloc icons icu lz4 readline server uring ldap llvm
                          oauth perl static-libs tcl uuid address-standardizer topology postgres17
                          analog audio channels ctrlport digital dtv fec filter grc iio modtool
                          network performance-counters soapy trellis uhd utils vocoder wavelet
                          portaudio airspy bladerf hackrf iqbalance rtlsdr sdrplay xtrx lua5-4
                          luajit 3d georeferencer grass hdf5 mapserver netcdf pdal qml debugger
                          nsight profiler rdma sanitizer vis-profiler egl addressbook imagemagick
                          lensfun panorama semantic-desktop video calendar geolocation gphoto2
                          heif scanner spell container-init overlay2 apparmor btrfs media
                          mypaint-brush-engine xsimd gif gsl raw aalib aqua fits javascript lua
                          mng postscript unwind vala valadoc vector-icons wmf xpm cdr dia inkjar
                          sourceview svg2 visio wpg exif graphicsmagick build symlink firmware
                          jumbo-build system-pipewire valgrind wasm-sandbox abseil test-helpers
                          dvbpsi encode gui libsamplerate a52 aom archive aribsub bidi cddb
                          chromecast dc1394 dts faad flac fluidsynth kate keyring libnotify libtar
                          libtiger linsys lirc live loudness mad matroska mp3 mpeg mtp musepack
                          ogg omxil optimisememory projectm sftp shout sid skins soxr taglib tremor
                          upnp kpoll odbc sctp captcha redis roster-gw ptp caps introspection
                          raycast tools speech coinmp odk smi suid capinfos captype dftest
                          dumpcap editcap filecaps mergecap minizip netlink pcap randpkt randpktdump
                          reordercap sharkd text2pcap tshark udpdump androiddump bcg729 brotli
                          ciscodump dpauxmon http2 http3 ilbc libxml2 maxminddb sbc sdjournal spandsp
                          sshdump tfshark nse libssh2 ncat ndiff nping zenmap browser decklink mpegts
                          test-input vlc websocket test-install clamapp system-mspack clamdtop clamonacc
                          clamsubmit iconv libclamav-only metadata-analysis-api milter rootfs dist-kernel
                          kernel-builtin split-usr test-suite pie development nexpose asimage cudnn
                          davix fortran gdml http jupyter libcxx minuit pythia8 R roofit root7 shadow
                          tmva unuran vc xrootd graphviz mpi training opencv rtaudio rubberband vidstab
                          xine aac ampache cdda cue mms scrobbler speedpitch streamtuner wavpack excel
                          webagg cairo latex dvb tracer ocamlopt portmixer audiocom id3tag mpg123
                          sbsms vamp libgig soundio stk vst designer handbook policykit -branding -java).join(' ')
    puts "Gentoo USE flags: #{gentoo_use_flags}"

    # Gentoo common flags
    gentoo_cf_intel_alder_lake = "-march=alderlake -O2 -pipe"
    gentoo_cf_intel_skylake = "-march=skylake -O2 -pipe"
    gentoo_cf_intel_broadwell = "-march=broadwell -O2 -pipe"
    gentoo_cf_intel_haswell = "-march=haswell -O2 -pipe"
    gentoo_cf_intel_ivybridge_i3i5i7 = "-march=ivybridge -O2 -pipe"
    gentoo_cf_intel_ivybridge_pentium = "-march=ivybridge -mno-avx -mno-aes -mno-rdrnd -O2 -pipe"
    gentoo_cf_intel_sandybridge_i3i5i7 = "-march=sandybridge -O2 -pipe"
    gentoo_cf_intel_sandybridge_pentium = "-march=sandybridge -mno-avx -mno-aes -mno-rdrnd -O2 -pipe"
    gentoo_cf_intel_nehalem = "-march=nehalem -O2 -pipe"
    gentoo_cf_intel_westmere = "-march=westmere -O2 -pipe"
    gentoo_cf_intel_intel_core = "-march=core2 -O2 -pipe"
    gentoo_cf_amd_ryzen_1000_2000 = "-O2 -march=znver1 -pipe"
    gentoo_cf_amd_ryzen_3000_4000_5000 = "-O2 -march=znver2 -pipe"
    gentoo_cf_amd_ryzen_5000 = "-O2 -march=znver3 -pipe"
    gentoo_cf_amd_ryzen_7xx0 = "-O2 -march=znver4 -pipe"
    gentoo_cf_amd_ryzen_AI300_9000 = "-O2 -march=znver5 -pipe"
    gentoo_cf_risc_v = "-march=rv64imafdc_zicsr_zba_zbb -mcpu=sifive-u74 -mtune=sifive-7-series -O2 -pipe"

    gentoo_common_flags = {
      gentoo_cf_intel_alder_lake: gentoo_cf_intel_alder_lake,
      gentoo_cf_intel_skylake: gentoo_cf_intel_skylake,
      gentoo_cf_intel_broadwell: gentoo_cf_intel_broadwell,
      gentoo_cf_intel_haswell: gentoo_cf_intel_haswell,
      gentoo_cf_intel_ivybridge_i3i5i7: gentoo_cf_intel_ivybridge_i3i5i7,
      gentoo_cf_intel_ivybridge_pentium: gentoo_cf_intel_ivybridge_pentium,
      gentoo_cf_intel_sandybridge_i3i5i7: gentoo_cf_intel_sandybridge_i3i5i7,
      gentoo_cf_intel_sandybridge_pentium: gentoo_cf_intel_sandybridge_pentium,
      gentoo_cf_intel_nehalem: gentoo_cf_intel_nehalem,
      gentoo_cf_intel_westmere: gentoo_cf_intel_westmere,
      gentoo_cf_intel_intel_core: gentoo_cf_intel_intel_core,
      gentoo_cf_amd_ryzen_1000_2000: gentoo_cf_amd_ryzen_1000_2000,
      gentoo_cf_amd_ryzen_3000_4000_5000: gentoo_cf_amd_ryzen_3000_4000_5000,
      gentoo_cf_amd_ryzen_5000: gentoo_cf_amd_ryzen_5000,
      gentoo_cf_amd_ryzen_7xx0: gentoo_cf_amd_ryzen_7xx0,
      gentoo_cf_amd_ryzen_AI300_9000: gentoo_cf_amd_ryzen_AI300_9000,
      gentoo_cf_risc_v: gentoo_cf_risc_v
    }

    gentoo_c_flags   = gentoo_common_flags
    gentoo_cxx_flags = gentoo_common_flags

    puts "Gentoo C flags: #{gentoo_c_flags} and CXX flags: #{gentoo_cxx_flags}"

    gentoo_input_devices = %w("wacom libinput").join(' ')
    puts "Gentoo INPUT_DEVICES: #{gentoo_input_devices}"

    gentoo_accept_license = %Q("*")
    puts "Gentoo accept all licenses on all packages; ACCEPT_LICENSE=#{gentoo_accept_license}"

    gentoo_l10n = %Q("*")
    puts "Gentoo all available locales are built and installed: L10N=#{gentoo_l10n}"

    git_repos_github = [
      "linuxwacom/wacom-hid-descriptors",
      "google/oss-rebuild",
      "googlefonts/googlesans-code",
      "googlefonts/noto-emoji",
      "caddyserver/caddy",
      "jdx/mise",
      "valkey-io/valkey",
      "torchgeo/torchgeo",
      "citusdata/citus",
      "OSGeo/gdal",
      "n0-computer/iroh",
      "tipragot/godot-iroh",
      "PyO3/pyo3",
      "OpenPrinting/cups",
      "fish-shell/fish-shell",
      "pgRouting/pgrouting",
      "uber/h3",
      "postgresml/postgresml",
      "postgresml/pgcat",
      "jupyter/jupyter",
      "pydicom/pydicom",
      "fsvm88/cosmic-overlay",
      "CelestiaProject/Celestia",
      "ROCm/TheRock",
      "triton-lang/triton",
      "hhd-dev/hhd",
      "numpy/x86-simd-sort",
      "numpy/numpy",
      "osm2pgsql-dev/osm2pgsql",
      "sonic-pi-net/sonic-pi",
      "huggingface/xet-core",
      "huggingface/huggingface_hub",
      "NVIDIA/nvmath-python",
      "XTXMarkets/ternfs",
      "godotengine/godot",
      "bevyengine/bevy",
      "HaxeFoundation/haxe",
      "nodejs/node",
      "deepnight/ldtk",
      "HaxeFoundation/haxelib",
      "HaxeFoundation/hx3compat",
      "HaxeFoundation/record-macros",
      "HaxeFoundation/hx4compat",
      "HaxeFoundation/crypto",
      "obsproject/obs-studio",
      "CesiumGS/cesium",
      "emotion-js/emotion",
      "ruilisi/fortune-sheet",
      "mui/material-ui",
      "mui/base-ui",
      "mui/mui-x",
      "mui/pigment-css",
      "plouc/nivo",
      "d3/d3",
      "testing-library/react-testing-library",
      "testing-library/user-event",
      "testing-library/jest-dom",
      "testing-library/dom-testing-library",
      "testing-library/testing-library-docs",
      "testing-library/react-hooks-testing-library",
      "testing-library/eslint-plugin-testing-library",
      "eslint/eslint",
      "twbs/bootstrap"
    ]

    git_repos_gitlab = [
      "asus-linux/asusctl",
      "asus-linux/supergfxctl"
    ]

    git_repos_freedesktop_gitlab = [
      "mesa/mesa"
    ]

    git_repos_kitware_gitlab = [
      "cmake/cmake"
    ]

    git_repos_redox_os_gitlab = [
      "redox-os/cookbook"
    ]

    git_repos_osgeo = [
      "postgis/postgis"
    ]

    git_repos_codeberg = [
      "uzu/strudel"
    ]

    git_repos_kde_invent = [
      "sdk/kdesrc-build"
    ]

    git_repos_projects_blender = [
      "blender/blender"
    ]

    gentoo_emerge_packages = [
      "sys-fs/btrfs-progs",
      "www-apps/gitea",
      "sys-devel/distcc",
      "app-emulation/qemu",
      "dev-db/postgis",
      "sci-libs/gdal",
      "net-print/cups",
      "app-shells/fish",
      "dev-db/pgrouting",
      "dev-python/jupyter",
      "kde-plasma/plasma-meta",
      "gnome-base/gnome",
      "dev-lang/haxe"
    ]

    eselect_repository_add = {
      cosmic_overlay: "https://github.com/fsvm88/cosmic-overlay.git"
    }

    custom_overlay_emerge = [
      "cosmic-meta pop-theme-meta"
    ]

    # TODO: Create KDE deps directory and install kdesrc-build there
    kde_deps_fetch_command = "kdesrc-build --metadata-only"

    QuantumsandLive::FormatDrive.drive_partitioning(sudo_password)
    QuantumsandLive::FormatDrive.drive_formatting(sudo_password)

    # TODO: sys-fs/cryptsetup; cryptsetup luksFormat --key-size 512 /dev/nvme0n1p1
    # TODO: sudo-rs; a memory safe implementation of sudo and su

    gentoo_stage3_tar_command = "tar xpvf stage3-*.tar.xz --xattrs-include='*.*' --numeric-owner -C #{dirpath}"
    gentoo_stage3_url = QuantumsandLive::Resource.gentoo_stage3_url
    # curl command
    # -L; if server reports that requested url has moved to a different location then redo request
    # -O; keep the same file name; file output to a local file named like the file name of the remote file
    # -C -; continue download if partially downloaded previously
    gentoo_stage3_curl_command = "curl -L -O -C - #{gentoo_stage3_url}"
    QuantumsandLive::TerminalCommand.terminal_pipe_user command: gentoo_stage3_curl_command

    res = QuantumsandLive::TerminalCommand.terminal_capture_sudo password: sudo_password, command: gentoo_stage3_tar_command
    puts res.inspect

    res = QuantumsandLive::TerminalCommand.chroot_mount_sudo password: sudo_password, dirpath: dirpath
    puts res.inspect

    locale_gen_command = "locale-gen -A"
    res = QuantumsandLive::TerminalCommand.chroot_sudo password: sudo_password, dirpath: dirpath, command: locale_gen_command
    puts res.inspect

    emerge_sync_command = "emerge --sync"
    res = QuantumsandLive::TerminalCommand.chroot_sudo password: sudo_password, dirpath: dirpath, command: emerge_sync_command
    puts res.inspect

    emerge_oneshot_portage_command = "emerge --oneshot sys-apps/portage"
    res = QuantumsandLive::TerminalCommand.chroot_sudo password: sudo_password, dirpath: dirpath, command: emerge_oneshot_portage_command
    puts res.inspect

    # DONE: gentoo stage3
    # DONE: Install all locales: locale-gen -A
    # DONE: emerge --sync

    # DONE: USE flags
    # DONE: CFLAGS and CXXFLAGS
    # DONE: INPUT_DEVICES; Wacom; /etc/portage/make.conf INPUT_DEVICES="wacom libinput"
    # DONE: ACCEPT_LICENSE
    # TODO: CPU_FLAGS_X86; emerge --ask app-portage/cpuid2cpuflags; echo "*/* $(cpuid2cpuflags)" > /etc/portage/package.use/00cpu-flags
    # TODO: VIDEO_CARDS
    # DONE: LINGUAS unset; Unset LINGUAS means to install all available languages
    # DONE: L10N
    # TODO: Specify GPKG binary package format; BINPKG_FORMAT="gpkg"; FEATURES="getbinpkg"
    # TODO: kernel sources at /usr/src/linux
    # DONE: emerge --oneshot sys-apps/portage

    # TODO: sys-fs/btrfs-progs
    # TODO: linuxwacom/wacom-hid-descriptors
    # TODO: google/oss-rebuild; Google ❤️ Open Source
    # TODO: Google Sans Code
    # TODO: emerge --ask www-apps/gitea
    # TODO: Caddy
    # TODO: sys-devel/distcc
    # TODO: jdx/mise; dev tools, env vars, task runner
    # TODO: QEMU
    # TODO: Valkey
    # TODO: Noto Color Emoji
    # TODO: PostgreSQL
    # TODO: POSTGRES_MULTIPLE_EXTENSIONS=postgis,hstore,postgis_topology,postgis_raster,pgrouting,h3,h3_postgis,ogr_fdw
    # TODO: PostGIS
    # TODO: sci-libs/gdal
    # TODO: citusdata/citus
    # TODO: pgRouting; Routing on PostgreSQL
    # TODO: H3: A Hexagonal Hierarchical Geospatial Indexing System
    # TODO: PostgresML
    # TODO: pgcat
    # TODO: KDE; kde-plasma/plasma-meta
    # TODO: GNOME; emerge gnome-base/gnome
    # TODO: COSMIC; via a custom overlay
    # TODO: LimeSuite
    # TODO: GNU Radio
    # TODO: Gqrx
    # TODO: net-wireless/gr-osmosdr
    # TODO: kit-cel/gr-dab
    # TODO: OpenStreetMap
    # TODO: Osm2pgsql
    # TODO: mapnik
    # TODO: openstreetmap-carto
    # TODO: maplibre martin
    # TODO: QGIS
    # TODO: CoMaps; a community-led fork of Organic Maps
    # TODO: hyperknot/openfreemap; Free and open-source map hosting solution
    # TODO: rustup
    # TODO: Blender
    # TODO: sgl-project/sglang; fast serving framework for large language models and vision language models
    # TODO: DeepSeek
    # TODO: Fire-Flyer File System (3FS)
    # TODO: MiniMax-M1
    # TODO: comfyanonymous/ComfyUI
    # TODO: Comfy-Org/workflow_templates
    # TODO: Comfy-Org/comfy-cli
    # TODO: nvidia/parakeet-tdt-0.6b-v2
    # TODO: xai-org/grok-2
    # TODO: Wan-Video/Wan2.2; Wan: Open and Advanced Large-Scale Video Generative Models
    # TODO: oumi-ai/oumi; open-source platform that streamlines the entire lifecycle of foundation models
    # TODO: NASA-IMPACT/Surya; Implementation of the Surya Foundation Model and Downstream Tasks for Heliophysics
    # TODO: nasa-ibm-ai4science/Surya-1.0; The first open-source AI foundation model for heliophysics
    # TODO: nasa-ibm-ai4science/SDO_training; This dataset provides machine learning (ML)-ready solar data curated from NASA’s Solar Dynamics Observatory
    # TODO: apple/ml-diffucoder; DiffuCoder: Understanding and Improving Masked Diffusion Models for Code Generation
    # TODO: collabora/gst-python-ml; Python-powered ML analytics for GStreamer pipelines
    # TODO: NVIDIA Linux driver
    # TODO: CUDA
    # TODO: ROCm
    # TODO: PyTorch
    # TODO: tch-rs; Rust bindings for the C++ api of PyTorch
    # TODO: MONAI; PyTorch-based, open-source framework for deep learning in healthcare imaging
    # TODO: cornerstonejs/cornerstone3D; Cornerstone is a set of JavaScript libraries that can be used to build web-based medical imaging applications
    # TODO: luminal-ai/luminal; Deep learning at the speed of light
    # TODO; Evidently AI monitoring
    # TODO: a2aproject/A2A; open protocol enabling communication and interoperability between opaque agentic applications
    # TODO: nvidia/Llama-Nemotron-VLM-Dataset-v1; a 3-million-sample dataset for OCR, visual question answering, and captioning tasks
    # TODO: NVIDIA/NeMo-speech-data-processor; A toolkit for processing speech data and creating speech datasets
    # TODO: nvidia/Granary; Speech Recognition and Translation Dataset in 25 European Languages
    # TODO: scm_breeze
    # TODO: VSCodium
    # TODO: Docker; Snippet; /etc/kernel/config.d/docker-linux6-11-10.config
    # TODO: Docker Compose; app-containers/docker-compose
    # TODO: goharbor/harbor; open source trusted cloud native registry project that stores, signs, and scans content
    # TODO: Krita
    # TODO: GIMP
    # TODO: Inkscape
    # TODO: Linux kernel; CONFIG_X86_NATIVE_CPU
    # TODO: FFmpeg
    # TODO: Firefox
    # TODO: Chromium
    # TODO: VLC
    # TODO: dev-lang/erlang
    # TODO: dev-lang/elixir
    # TODO: ejabberd
    # TODO: GStreamer
    # TODO: dev-cpp/gtest; Google C++ Testing Framework
    # TODO: audio_waveform-ruby + peaks.js + audiowaveform
    # TODO: Quantum Sand deps
    # TODO: Customised Qt6 + Quantum Sand + OpenTelemetry + MapLibre GL JS
    # TODO: Godot Engine
    # TODO: Bevy Engine
    # TODO: Jupyter + NumPy + pandas + scikit-learn
    # TODO: pydicom
    # TODO: LibreOffice
    # TODO: Fail2Ban
    # TODO: tcpdump
    # TODO: Wireshark
    # TODO: Nmap
    # TODO: OBS Studio
    # TODO: dev-debug/dtrace
    # TODO: app-antivirus/clamav
    # TODO: ZFS
    # TODO: DGM.js with collaboration
    # TODO: Gitea
    # TODO: KiCad
    # TODO: atopile/atopile
    # TODO: pentoo-overlay; net-analyzer/metasploit
    # TODO: soapySDR
    # TODO: srsGUI + srsRAN_4G + srsRAN_Project (complete 5G RAN solution)
    # TODO: qradiolink
    # TODO: ROOT: data analysis framework; sci-physics/root
    # TODO: Tesseract Open Source OCR Engine
    # TODO: WanzenBug/rqrr; QR reader written in Rust
    # TODO: Open access papers PDF science and AI; title:, authors:, license:, pdf_url:
    # TODO: Open access classical sheet music; Public domain and Creative Commons Attribution; title:, authors:, license:, pdf_url:
    # TODO: mavlink/rust-mavlink
    # TODO: ArduPilot
    # TODO: Shotcut + MLT
    # TODO: gfortran; GCC's Fortran
    # TODO: Flang; LLVM's fortran compiler
    # TODO: flxzt/rnote; Sketch and take handwritten notes
    # TODO: https://gitlab.com/chrony/chrony.git; Advanced NTP client and server
    # TODO: Audacious; an open source audio player. A descendant of XMMS; media-sound/audacious
    # TODO; Glaxnimate; open-source vector animation and motion design desktop application
    # TODO; Haiku Animator; Design tool for creating Lottie animations and interactive web component
    # TODO; @lottiefiles/react-lottie-player
    # TODO: OctoPrint; Web interface for controlling consumer 3D printers
    # TODO: Matplotlib animation video generation
    # TODO: cowtoolz/webcamize; Use (almost) any camera as a webcam
    # TODO: Canop/dysk
    # TODO: SageMath; free open-source mathematics software system
    # TODO: pnpm; pnpm store path; global virtual stores; node_modules contains only symlinks to a central virtual store
    # TODO: dev-lang/haxe
    # TODO: ldtk; modern, lightweight and efficient 2D level editor
    # TODO: AlbrechtL/welle.io
    # TODO: Opendigitalradio/ODR-EncoderManager
    # TODO: Opendigitalradio/ODR-PadEnc
    # TODO: Opendigitalradio/ODR-AudioEnc
    # TODO: Opendigitalradio/odr-mmbtools-common
    # TODO: Opendigitalradio/fdk-aac
    # TODO: Opendigitalradio/ODR-DabMod
    # TODO: Opendigitalradio/ODR-DabMux
    # TODO: Opendigitalradio/dablin
    # TODO: Opendigitalradio/mmbtools-doc
    # TODO: jketterl/openwebrx
    # TODO: Automattic/harper; English grammar checker
    # TODO: sonic-pi-net/sonic-pi
    # TODO: GraphiteEditor/Graphite
    # TODO: vlang/v
    # TODO: ZetloStudio/ZeQLplus
    # TODO: digiKam
    # TODO: Audacity
    # TODO: Ardour
    # TODO: LMMS
    # TODO: Kdenlive; KDE Non-Linear Video Editor
    # TODO: GParted
    # TODO: OpenChemistry/avogadrolibs; 3D rendering, visualization, analysis and data processing
    # TODO: OpenChemistry/tomviz; processing, visualization, and analysis of 3D tomography data
    # TODO: OpenChemistry/molequeue; Desktop integration of high performance computing resources
    # TODO: OpenChemistry/chemicaljson; Chemical JSON data representation
    # TODO: Summa-Cogni/Mathpad; A mathematical keypad for students and professionals
    # TODO: enactic/openarm; A fully open-source humanoid arm for physical AI research and deployment
    # TODO: OpenSSH Post-Quantum Cryptography; sntrup761x25519-sha512 and mlkem768x25519-sha256
    # TODO: ComposersDesktop/CDP8
    # TODO: rdkit/rdkit; a collection of cheminformatics and machine-learning software written in C++ and Python
    # TODO: sys-fs/dosfstools; FAT userspace utilities
    # TODO: sys-fs/exfatprogs; exFAT file system
    # TODO: sys-fs/diskdev_cmds; a port of HFS/HFS+ utilities from OpenDarwin
    # TODO: uutils/coreutils; Cross-platform Rust rewrite of the GNU coreutils
    # TODO: huggingface/huggingface_hub; official Python client for the Huggingface Hub
    # TODO: torchgeo/torchgeo; TorchGeo is a PyTorch domain library
    # TODO: n0-computer/iroh
    # TODO: PyO3/pyo3
    # TODO: tipragot/godot-iroh; peer-to-peer multiplayer extension for Godot based on Iroh
    # TODO: app-shells/fish
    # TODO: uzu/strudel
    # TODO: Celestia
    # TODO: triton-lang/triton; Triton language and compiler
    # TODO: Handheld Daemon; provides hardware enablement for Windows handhelds
    # TODO: x86-simd-sort; C++ template library for high performance SIMD based sorting algorithms
    # TODO: Sonic Pi; a new kind of musical instrument
    # TODO: NVIDIA Math Libraries for the Python Ecosystem
    # TODO: ternfs
  end
end

require 'quantumsand_live/format_drive'
require 'quantumsand_live/terminal_command'
require 'quantumsand_live/resource'
