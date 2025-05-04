class QuantumsandLive
  def self.build
    puts "QuantumsandLive.build"
    puts "Quantum Sand Live needs privileged access in order to format disks. Please enter your sudo password to continue."
    sudo_password = STDIN.noecho(&:gets).chomp
    dirpath = "/mnt/gentoo"

    QuantumsandLive::FormatDrive.drive_partitioning(sudo_password)
    QuantumsandLive::FormatDrive.drive_formatting(sudo_password)

    # TODO: sys-fs/cryptsetup; cryptsetup luksFormat --key-size 512 /dev/nvme0n1p1

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

    # TODO: Caddy
    # TODO: distcc
    # TODO: rvm install; \curl -sSL https://get.rvm.io | bash -s -- --autolibs=read-fail
    # TODO: QEMU
    # TODO: Valkey
    # TODO: Noto Color Emoji
    # TODO: PostgreSQL
    # TODO: POSTGRES_MULTIPLE_EXTENSIONS=postgis,hstore,postgis_topology,postgis_raster,pgrouting,h3,h3_postgis
    # TODO: PostGIS
    # TODO: H3: A Hexagonal Hierarchical Geospatial Indexing System
    # TODO: PostgresML
    # TODO: pgcat
    # TODO: KDE
    # TODO: GNOME
    # TODO: LimeSuite
    # TODO: GNU Radio
    # TODO: Gqrx
    # TODO: OpenStreetMap
    # TODO: Osm2pgsql
    # TODO: mapnik
    # TODO: openstreetmap-carto
    # TODO: maplibre martin
    # TODO: QGIS
    # TODO: rustup
    # TODO: Blender
    # TODO: DeepSeek
    # TODO: Fire-Flyer File System (3FS)
    # TODO: CUDA
    # TODO: PyTorch
    # TODO: scm_breeze
    # TODO: VSCodium
    # TODO: Docker
    # TODO: Krita
    # TODO: GIMP
    # TODO: Inkscape
    # TODO: Linux kernel
    # TODO: FFmpeg
    # TODO: Firefox
    # TODO: Chromium
    # TODO: VLC
    # TODO: dev-lang/erlang
    # TODO: dev-lang/elixir
    # TODO: ejabberd
    # TODO: GStreamer
    # TODO: Customised Qt6 + Quantum Sand
    # TODO: Godot Engine
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
  end
end

require 'quantumsand_live/format_drive'
require 'quantumsand_live/terminal_command'
require 'quantumsand_live/resource'
