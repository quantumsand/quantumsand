class QuantumsandLive
  def self.hi
    puts "Hello world! QuantumsandLive!!"
    puts "Quantum Sand Live needs privileged access in order to format disks. Please enter your sudo password to continue."
    sudo_password = STDIN.noecho(&:gets).chomp

    QuantumsandLive::FormatStick.hi(sudo_password)
  end
end

require 'quantumsand_live/format_stick'
