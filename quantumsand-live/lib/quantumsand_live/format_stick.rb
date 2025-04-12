require 'open3'

class QuantumsandLive::FormatStick
  def self.hi(sudo_password)
    puts "Hello world! QuantumsandLive!! FormatStick"
    puts "Testing sudo password by listing sudo cat '/etc/sudoers'"

    bash_command = "sudo -S <<< '#{sudo_password}' cat '/etc/sudoers'"

    stdout, stderr, status = Open3.capture3("/bin/bash -c '#{bash_command}'")
    puts "Output: #{stdout}"
    error = stderr.strip
    puts "Error: #{error}" unless error.length.zero?
    puts "stderr length #{stderr.strip.length}"
    puts "Exit Status: #{status.exitstatus}"

    sudoers_contents = stdout
    puts "Contents from sudoers... #{sudoers_contents}"
    puts "Testing non root echo *"
    system("echo *")

    puts "Which shell?"
    system("/bin/bash -c 'echo $0'")
  end
end
