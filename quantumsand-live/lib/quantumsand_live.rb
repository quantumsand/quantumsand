class QuantumsandLive
  def self.build
    puts "QuantumsandLive.build"
    puts "Quantum Sand Live needs privileged access in order to format disks. Please enter your sudo password to continue."
    sudo_password = STDIN.noecho(&:gets).chomp

    QuantumsandLive::FormatDrive.drive_partitioning(sudo_password)
    QuantumsandLive::FormatDrive.drive_formatting(sudo_password)

    gentoo_stage3_command = "tar xpvf stage3-*.tar.xz --xattrs-include='*.*' --numeric-owner -C /mnt/gentoo"
    gentoo_stage3_url = QuantumsandLive::Resource.gentoo_stage3_url
    # curl command
    # -L; if server reports that requested url has moved to a different location then redo request
    # -O; keep the same file name; file output to a local file named like the file name of the remote file
    # -C -; continue download if partially downloaded previously
    bash_command_gentoo_stage3 = "curl -L -O -C - #{gentoo_stage3_url}"
    QuantumsandLive::TerminalCommand.terminal_pipe_user command: bash_command_gentoo_stage3

    res = QuantumsandLive::TerminalCommand.terminal_capture_sudo password: sudo_password, command: gentoo_stage3_command
    puts res.inspect

    res = QuantumsandLive::TerminalCommand.chroot_mount_sudo password: sudo_password, dirpath: "/mnt/gentoo"
    puts res.inspect

    emerge_sync_command = "emerge --sync"
    res = QuantumsandLive::TerminalCommand.chroot_sudo password: sudo_password, dirpath: "/mnt/gentoo", command: emerge_sync_command
    puts res.inspect

    # DONE: gentoo stage3
    # DONE: emerge --sync
    #
    # TODO: distcc
    # TODO: rvm install; \curl -sSL https://get.rvm.io | bash -s -- --autolibs=read-fail
    # TODO: /etc/portage/make.conf; Specify GPKG binary package format; BINPKG_FORMAT="gpkg"; FEATURES="getbinpkg"
    # TODO: Caddy
    # TODO: QEMU
    # TODO: Valkey
    # TODO: Noto Color Emoji
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
    # TODO: Wacom; /etc/portage/make.conf INPUT_DEVICES="wacom libinput"
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
  end
end

require 'quantumsand_live/format_drive'
require 'quantumsand_live/terminal_command'
require 'quantumsand_live/resource'
