require 'open3'
require 'byebug'

class QuantumsandLive::TerminalCommand
  # terminal pipe method for user
  def self.terminal_pipe_user command: command = "cat '/etc/sudoers'"
    puts "Hello world! QuantumsandLive!! TerminalCommand terminal_pipe_user"

    IO.popen("/bin/bash -c '#{command}'", "w") do |pipe|
      puts pipe
    end
  end

  # terminal pipe method for sudo
  def self.terminal_pipe_sudo password:, command: command = "cat '/etc/sudoers'"
    puts "Hello world! QuantumsandLive!! TerminalCommand terminal_pipe_sudo"

    command = "sudo -S <<< '#{password}' #{command}"

    IO.popen("/bin/bash -c '#{command}'", "w") do |pipe|
      puts pipe
    end
  end
end
