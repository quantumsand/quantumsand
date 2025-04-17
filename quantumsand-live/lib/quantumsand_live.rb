class QuantumsandLive
  def self.build
    puts "QuantumsandLive.build"
    puts "Quantum Sand Live needs privileged access in order to format disks. Please enter your sudo password to continue."
    sudo_password = STDIN.noecho(&:gets).chomp

    QuantumsandLive::FormatDrive.drive_partitioning(sudo_password)
    QuantumsandLive::FormatDrive.drive_formatting(sudo_password)

    gentoo_stage3_url = QuantumsandLive::Resource.gentoo_stage3_url
    # curl command
    # -L; if server reports that requested url has moved to a different location then redo request
    # -O; keep the same file name; file output to a local file named like the file name of the remote file
    # -C -; continue download if partially downloaded previously
    bash_command_gentoo_stage3 = "curl -L -O -C - #{gentoo_stage3_url}" # TODO: emerge sync...
    bash_command_cat_sudoers = "cat '/etc/sudoers'"
    QuantumsandLive::TerminalCommand.terminal_pipe_sudo password: sudo_password, command: bash_command_gentoo_stage3
    QuantumsandLive::TerminalCommand.terminal_pipe_user command: bash_command_gentoo_stage3

    res = QuantumsandLive::TerminalCommand.terminal_capture_sudo password: sudo_password, command: bash_command_cat_sudoers
    puts res.inspect

    res = QuantumsandLive::TerminalCommand.terminal_capture_user command: bash_command_cat_sudoers
    puts res.inspect

    # TODO: gentoo stage3
    # TODO: emerge sync
    # TODO: rvm install; \curl -sSL https://get.rvm.io | bash -s -- --autolibs=read-fail
    # TODO: /etc/portage/make.conf; Specify GPKG binary package format; BINPKG_FORMAT="gpkg"; FEATURES="getbinpkg"

  end
end

require 'quantumsand_live/format_drive'
require 'quantumsand_live/terminal_command'
require 'quantumsand_live/resource'
