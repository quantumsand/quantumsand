class QuantumsandLive
  def self.build
    puts "QuantumsandLive.build"
    puts "Quantum Sand Live needs privileged access in order to format disks. Please enter your sudo password to continue."
    sudo_password = STDIN.noecho(&:gets).chomp
    dirpath = "/mnt/gentoo"

    gentoo_use_flags = %w(kde gtk plymouth wallpapers wacom networkmanager smart
                          accessibility bluetooth crypt cups discover flatpak
                          oxygen-theme grub webengine systemd sdk rdp pulseaudio
                          elogind browser-integration crash-handler display-manager).join(' ')
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
    # TODO: distcc
    # TODO: rvm install; \curl -sSL https://get.rvm.io | bash -s -- --autolibs=read-fail
    # TODO: QEMU
    # TODO: Valkey
    # TODO: Noto Color Emoji
    # TODO: PostgreSQL
    # TODO: POSTGRES_MULTIPLE_EXTENSIONS=postgis,hstore,postgis_topology,postgis_raster,pgrouting,h3,h3_postgis
    # TODO: PostGIS
    # TODO: pgRouting; Routing on PostgreSQL
    # TODO: H3: A Hexagonal Hierarchical Geospatial Indexing System
    # TODO: PostgresML
    # TODO: pgcat
    # TODO: KDE; kde-plasma/plasma-meta
    # TODO: GNOME; emerge gnome-base/gnome
    # TODO: LimeSuite
    # TODO: GNU Radio
    # TODO: Gqrx
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
    # TODO: nvidia/parakeet-tdt-0.6b-v2
    # TODO: CUDA
    # TODO: ROCm
    # TODO: PyTorch
    # TODO: tch-rs; Rust bindings for the C++ api of PyTorch
    # TODO: MONAI; PyTorch-based, open-source framework for deep learning in healthcare imaging
    # TODO; Evidently AI monitoring
    # TODO: scm_breeze
    # TODO: VSCodium
    # TODO: Docker
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
  end
end

require 'quantumsand_live/format_drive'
require 'quantumsand_live/terminal_command'
require 'quantumsand_live/resource'
