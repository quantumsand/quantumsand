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
                          sbsms vamp libgig soundio stk vst designer handbook -branding -java).join(' ')
    puts "Gentoo USE flags: #{gentoo_use_flags}"

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

    # TODO: USE flags
    # TODO: CFLAGS and CXXFLAGS
    # TODO: INPUT_DEVICES; Wacom; /etc/portage/make.conf INPUT_DEVICES="wacom libinput"
    # TODO: linuxwacom/wacom-hid-descriptors
    # TODO: ACCEPT_LICENSE
    # TODO: CPU_FLAGS_X86
    # TODO: VIDEO_CARDS
    # TODO: LINGUAS
    # TODO: L10N
    # TODO: Specify GPKG binary package format; BINPKG_FORMAT="gpkg"; FEATURES="getbinpkg"
    # TODO: kernel sources at /usr/src/linux
    # DONE: emerge --oneshot sys-apps/portage

    # TODO: emerge --ask www-apps/gitea
    # TODO: Caddy
    # TODO: sys-devel/distcc
    # TODO: rvm install; \curl -sSL https://get.rvm.io | bash -s -- --autolibs=read-fail
    # TODO: QEMU
    # TODO: Valkey
    # TODO: Noto Color Emoji
    # TODO: PostgreSQL
    # TODO: POSTGRES_MULTIPLE_EXTENSIONS=postgis,hstore,postgis_topology,postgis_raster,pgrouting,h3,h3_postgis
    # TODO: PostGIS
    # TODO: citusdata/citus
    # TODO: pgRouting; Routing on PostgreSQL
    # TODO: H3: A Hexagonal Hierarchical Geospatial Indexing System
    # TODO: PostgresML
    # TODO: pgcat
    # TODO: KDE; kde-plasma/plasma-meta
    # TODO: GNOME; emerge gnome-base/gnome
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
    # TODO: rustup
    # TODO: Blender
    # TODO: DeepSeek
    # TODO: Fire-Flyer File System (3FS)
    # TODO: MiniMax-M1
    # TODO: nvidia/parakeet-tdt-0.6b-v2
    # TODO: apple/ml-diffucoder; DiffuCoder: Understanding and Improving Masked Diffusion Models for Code Generation
    # TODO: collabora/gst-python-ml; Python-powered ML analytics for GStreamer pipelines
    # TODO: CUDA
    # TODO: ROCm
    # TODO: PyTorch
    # TODO: tch-rs; Rust bindings for the C++ api of PyTorch
    # TODO: MONAI; PyTorch-based, open-source framework for deep learning in healthcare imaging
    # TODO; Evidently AI monitoring
    # TODO: a2aproject/A2A; open protocol enabling communication and interoperability between opaque agentic applications
    # TODO: scm_breeze
    # TODO: VSCodium
    # TODO: Docker; Snippet; /etc/kernel/config.d/docker-linux6-11-10.config
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
    # TODO: Customised Qt6 + Quantum Sand + OpenTelemetry + MapLibre GL JS
    # TODO: Godot Engine
    # TODO: Bevy Engine
    # TODO: Jupyter
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
  end
end

require 'quantumsand_live/format_drive'
require 'quantumsand_live/terminal_command'
require 'quantumsand_live/resource'
