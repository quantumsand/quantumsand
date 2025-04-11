require 'open3'

class QuantumsandLive::FormatStick
  def self.hi(root_password)
    puts "Hello world! QuantumsandLive!! FormatStick"
    puts "Testing root password by listing sudo cat '/etc/sudoers'"

    stdout, stderr, status = Open3.capture3("sudo -S <<< '#{root_password}' cat '/etc/sudoers'")
    puts "Output: #{stdout}"
    error = stderr.strip
    puts "Error: #{error}" unless error.length.zero?
    puts "stderr length #{stderr.strip.length}"
    puts "Exit Status: #{status.exitstatus}"

    sudoers_contents = stdout
    puts "Contents from sudoers... #{sudoers_contents}"
    puts "Testing non root echo *"
    system("echo *")
  end
end
