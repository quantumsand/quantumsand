require 'open3'
require 'byebug'

class QuantumsandLive::TerminalCommand
  # before entering the chroot a number of directories must be mounted
  def self.chroot_mount_sudo password:, dirpath: dirpath = "/mnt/gentoo"
    puts "QuantumsandLive::TerminalCommand.chroot_mount_sudo"

    chroot_mount_sudo_commands = [
      "mount --rbind /dev #{dirpath}/dev",
      "mount --make-rslave #{dirpath}/dev",
      "mount -t proc /proc #{dirpath}/proc",
      "mount --rbind /sys #{dirpath}/sys",
      "mount --make-rslave #{dirpath}/sys",
      "mount --rbind /tmp #{dirpath}/tmp",
      "mount --bind /run #{dirpath}/run"
    ]

    chroot_mount_sudo_commands.each do |command|
      res = terminal_capture_sudo password: password, command: command
      puts res
    end
  end

  # chroot changes the root directory of the calling process to that specified in dirpath
  def self.chroot_sudo password:, dirpath: dirpath = "#{dirpath}", command: command = "du -h ."
    puts "QuantumsandLive::TerminalCommand.chroot_sudo"
    chroot_command = "chroot #{dirpath} #{command}"
    res = terminal_capture_sudo password: password, command: chroot_command
    puts res
  end

  # terminal pipe method for user; example: download file using curl as a user
  def self.terminal_pipe_user command: command = "cat '/etc/sudoers'"
    puts "QuantumsandLive::TerminalCommand.terminal_pipe_user"

    IO.popen("/bin/bash -c '#{command}'", "w") do |pipe|
      puts pipe
    end
  end

  # terminal pipe method for sudo; example: download file using curl as sudo
  def self.terminal_pipe_sudo password:, command: command = "cat '/etc/sudoers'"
    puts "QuantumsandLive::TerminalCommand.terminal_pipe_sudo"

    command = "sudo -S <<< '#{password}' #{command}"

    IO.popen("/bin/bash -c '#{command}'", "w") do |pipe|
      puts pipe
    end
  end

  # terminal capture method for user; example: capture command output as a user
  def self.terminal_capture_user command: command = "cat '/etc/sudoers'"
    puts "QuantumsandLive::TerminalCommand.terminal_capture_user"

    stdout, stderr, status = Open3.capture3("/bin/bash -c '#{command}'")

    {output: stdout, error: stderr, status: status.exitstatus}
  end

  # terminal capture method for sudo; example: capture command output as sudo
  def self.terminal_capture_sudo password:, command: command = "cat '/etc/sudoers'"
    puts "QuantumsandLive::TerminalCommand.terminal_capture_sudo"

    command = "sudo -S <<< '#{password}' #{command}"

    stdout, stderr, status = Open3.capture3("/bin/bash -c '#{command}'")

    {output: stdout, error: stderr, status: status.exitstatus}
  end
end
