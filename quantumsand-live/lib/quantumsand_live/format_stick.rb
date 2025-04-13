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

    gentoo_stage3_url = "https://distfiles.gentoo.org/releases/amd64/autobuilds/20250406T165023Z/stage3-amd64-desktop-systemd-20250406T165023Z.tar.xz"
    # curl command
    # -L; if server reports that requested url has moved to a different location then redo request
    # -O; keep the same file name; file output to a local file named like the file name of the remote file
    # -C -; continue download if partially downloaded previously
    bash_command_gentoo_stage3 = "curl -L -O -C - #{gentoo_stage3_url}" # TODO: emerge sync...
    # Download stage3
    IO.popen("/bin/bash -c '#{bash_command_gentoo_stage3}'", "w") do |pipe|
      puts pipe
    end

    # TODO: rvm install; \curl -sSL https://get.rvm.io | bash -s -- --autolibs=read-fail
  end
end
