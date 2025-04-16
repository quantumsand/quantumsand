class QuantumsandLive::Resource
  def self.gentoo_stage3_url() = "https://distfiles.gentoo.org/releases/amd64/autobuilds/20250406T165023Z/stage3-amd64-desktop-systemd-20250406T165023Z.tar.xz"
  def self.rvm_install_command() = "\curl -sSL https://get.rvm.io | bash -s -- --autolibs=read-fail"
end
