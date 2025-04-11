class QuantumsandLive::FormatStick
  def self.hi(root_password)
    puts "Hello world! QuantumsandLive!! FormatStick"
    puts "Testing root password by listing sudo cat '/etc/sudoers'"
    sudoers_contents = system("sudo -S <<< '#{root_password}' sudo cat '/etc/sudoers'", 
                              out: ['/tmp/quantumsand_out.log', 'a'], err: ['/tmp/quantumsand_err.log', 'a'])
    puts "Contents from sudoers... #{sudoers_contents}"
    puts "Testing non root echo *"
    system("sudo echo *")
  end
end
