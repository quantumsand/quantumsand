class QuantumsandLive
  def self.hi
    puts "Hello world! QuantumsandLive!!"
    puts "Quantum Sand Live needs privileged access in order to format disks. Please enter your sudo password to continue."
    sudo_password = STDIN.noecho(&:gets).chomp

    QuantumsandLive::FormatStick.hi(sudo_password)

    gentoo_stage3_url = "https://distfiles.gentoo.org/releases/amd64/autobuilds/20250406T165023Z/stage3-amd64-desktop-systemd-20250406T165023Z.tar.xz"
    # curl command
    # -L; if server reports that requested url has moved to a different location then redo request
    # -O; keep the same file name; file output to a local file named like the file name of the remote file
    # -C -; continue download if partially downloaded previously
    bash_command_gentoo_stage3 = "curl -L -O -C - #{gentoo_stage3_url}" # TODO: emerge sync...
    bash_command_cat_sudoers = "cat '/etc/sudoers'"
    QuantumsandLive::TerminalCommand.terminal_pipe_sudo password: sudo_password, command: bash_command_gentoo_stage3
    QuantumsandLive::TerminalCommand.terminal_pipe_user command: bash_command_gentoo_stage3

    QuantumsandLive::TerminalCommand.terminal_capture_sudo password: sudo_password, command: bash_command_cat_sudoers
    QuantumsandLive::TerminalCommand.terminal_capture_user command: bash_command_cat_sudoers
  end
end

require 'quantumsand_live/format_stick'
require 'quantumsand_live/terminal_command'
