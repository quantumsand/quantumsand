class QuantumsandLive::Resource
  def self.gentoo_stage3_amd64_url() = "https://distfiles.gentoo.org/releases/amd64/autobuilds/20260308T170100Z/stage3-amd64-desktop-systemd-20260308T170100Z.tar.xz"
  def self.gentoo_stage3_arm64_url() = "https://distfiles.gentoo.org/releases/arm64/autobuilds/20260308T233101Z/stage3-arm64-desktop-systemd-20260308T233101Z.tar.xz"
  def self.rvm_install_command() = "\curl -sSL https://get.rvm.io | bash -s -- --autolibs=read-fail"
end
