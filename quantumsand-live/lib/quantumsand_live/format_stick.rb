class QuantumsandLive::FormatStick
  def self.hi(root_password)
    puts "Hello world! QuantumsandLive!! FormatStick"
    puts "Testing root password my listing sudo cat '/etc/sudoers'"
    system("sudo -S <<< '#{root_password}' sudo cat '/etc/sudoers'")
    puts "Testing non root echo *"
    system("sudo echo *")
  end
end
