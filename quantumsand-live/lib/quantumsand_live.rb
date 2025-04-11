class QuantumsandLive
  def self.hi
    puts "Hello world! QuantumsandLive!!"
    puts "Quantum Sand Live needs privileged access in order to format disks. Please enter your root password to continue."
    root_password = STDIN.noecho(&:gets).chomp

    QuantumsandLive::FormatStick.hi(root_password)
  end
end

require 'quantumsand_live/format_stick'
