require 'open3'
require 'byebug'

class QuantumsandLive::TerminalCommand
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
