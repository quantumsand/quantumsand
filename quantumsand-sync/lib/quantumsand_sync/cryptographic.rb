require 'byebug'

class QuantumsandSync::Cryptographic
  def self.verify_sha256_cryptographic_digest sha256_digest:, file_path:
    cryptographic_digest_command = "sha256 #{file_path}"

    # run the cryptographic_digest_command
    res = IO.popen("/bin/bash -c '#{cryptographic_digest_command}'", "r") do |pipe|
      pipe.read
    end

    # obtain the sha256_result using a regex
    sha256_result = res[/=\s*([a-f0-9]{64})/, 1]
    puts "sha256_result: #{sha256_result}"

    sha256_digest == sha256_result
  end
end
