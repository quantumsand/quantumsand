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

  # terminal capture method for user
  def self.terminal_capture_user command: command = "cat '/etc/sudoers'"
    puts "Hello world! QuantumLive!! TerminalCommand terminal_capture_user"

    stdout, stderr, status = Open3.capture3("/bin/bash -c '#{command}'")
    puts "Output: #{stdout}"
    error = stderr.strip
    puts "Error: #{error}" unless error.length.zero?
    puts "stderr length #{stderr.strip.length}"
    puts "Exit Status: #{status.exitstatus}"
  end

  # terminal capture method for sudo
  def self.terminal_capture_sudo password:, command: command = "cat '/etc/sudoers'"
    puts "Hello world! QuantumLive!! TerminalCommand terminal_capture_sudo"

    command = "sudo -S <<< '#{password}' #{command}"

    stdout, stderr, status = Open3.capture3("/bin/bash -c '#{command}'")
    puts "Output: #{stdout}"
    error = stderr.strip
    puts "Error: #{error}" unless error.length.zero?
    puts "stderr length #{stderr.strip.length}"
    puts "Exit Status: #{status.exitstatus}"
  end
end
