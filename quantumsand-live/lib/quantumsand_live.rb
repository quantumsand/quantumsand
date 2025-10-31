class QuantumsandLive
  def self.build
    puts "QuantumsandLive.build"
    puts "Quantum Sand Live needs privileged access in order to format disks. Please enter your sudo password to continue."
    sudo_password = STDIN.noecho(&:gets).chomp
    dirpath = "/mnt/gentoo"

    gentoo_use_flags = %w(kde gnome gtk gtk3 gtk4 plymouth wallpapers wacom networkmanager smart
                          accessibility bluetooth crypt cups discover flatpak oxygen-theme
                          grub webengine systemd sdk rdp pulseaudio elogind browser-integration
                          crash-handler display-manager wifi wayland openh264 libproxy jpegxl
                          jack hwaccel gnome-shell eme-free dbus telemetry system-av1
                          system-harfbuzz system-icu system-jpeg system-libevent system-libvpx
                          system-webp gmp-autoupdate clang classic extras python python3_13
                          offlinehelp stun debug full-xml sip sqlite zlib bullet color-management
                          cycles cycles-bin-kernels embree ffmpeg fftw fluid gmp jemalloc manifold
                          nanovdb oidn openexr opengl openmp openpgl opensubdiv openvdb otf
                          pdf potrace pugixml sndfile tbb tiff truetype webp alembic collada
                          cuda doc experimental hip jpeg2k man ndof nls oneapi openal optix
                          osl pipewire renderdoc sdl test gstreamer vulkan postgres qt6 pdfimport
                          hangouts proprietary-codecs rar screencast system-png system-zstd vaapi
                          widevine bindist bundled-toolchain custom-cflags ffmpeg-chromium kerberos
                          dav1d fontconfig gnutls gpl libass postproc xml alsa amf amr amrenc appkit
                          bluray bs2b bzip2 cdio chromaprint chromium codec2 dvd fdk flite frei0r
                          fribidi gcrypt gme gsm iec61883 ieee1394 kvazaar ladspa lame lcms libaom
                          libaribb24 libcaca libilbc liblc3 libplacebo librtmp libsoxr libtesseract
                          lv2 lzma modplug npp nvenc opencl openmpt openssl opus qrcode qsv quirc
                          rabbitmq rav1e rubberband samba shaderc snappy sndio soc speex srt ssh
                          svg svt-av1 theora twolame v4l vdpau verify-sig vidstab vmaf vorbis
                          vpx x264 x265 xvid zeromq zimg zvbi pax-kernel pgo base zeroconf
                          events-handlers-exec security xinetd ipv6 gssapi ssl berkdb examples
                          gdbm jit socks5 systemtap aio curl fdt jpeg oss pin-upstream-blobs png
                          seccomp slirp vhost-net vnc bpf capstone fuse glusterfs infiniband
                          io-uring iscsi keyutils lzo multipath ncurses nfs numa pam plugins rbd
                          sasl sdl-image smartcard spice udev usb usbredir vde virgl virtfs xattr
                          xdp xen zstd tcmalloc icons icu lz4 readline server uring ldap llvm
                          oauth perl static-libs tcl uuid address-standardizer topology postgres17
                          analog audio channels ctrlport digital dtv fec filter grc iio modtool
                          network performance-counters soapy trellis uhd utils vocoder wavelet
                          portaudio airspy bladerf hackrf iqbalance rtlsdr sdrplay xtrx lua5-4
                          luajit 3d georeferencer grass hdf5 mapserver netcdf pdal qml debugger
                          nsight profiler rdma sanitizer vis-profiler egl addressbook imagemagick
                          lensfun panorama semantic-desktop video calendar geolocation gphoto2
                          heif scanner spell container-init overlay2 apparmor btrfs media
                          mypaint-brush-engine xsimd gif gsl raw aalib aqua fits javascript lua
                          mng postscript unwind vala valadoc vector-icons wmf xpm cdr dia inkjar
                          sourceview svg2 visio wpg exif graphicsmagick build symlink firmware
                          jumbo-build system-pipewire valgrind wasm-sandbox abseil test-helpers
                          dvbpsi encode gui libsamplerate a52 aom archive aribsub bidi cddb
                          chromecast dc1394 dts faad flac fluidsynth kate keyring libnotify libtar
                          libtiger linsys lirc live loudness mad matroska mp3 mpeg mtp musepack
                          ogg omxil optimisememory projectm sftp shout sid skins soxr taglib tremor
                          upnp kpoll odbc sctp captcha redis roster-gw ptp caps introspection
                          raycast tools speech coinmp odk smi suid capinfos captype dftest
                          dumpcap editcap filecaps mergecap minizip netlink pcap randpkt randpktdump
                          reordercap sharkd text2pcap tshark udpdump androiddump bcg729 brotli
                          ciscodump dpauxmon http2 http3 ilbc libxml2 maxminddb sbc sdjournal spandsp
                          sshdump tfshark nse libssh2 ncat ndiff nping zenmap browser decklink mpegts
                          test-input vlc websocket test-install clamapp system-mspack clamdtop clamonacc
                          clamsubmit iconv libclamav-only metadata-analysis-api milter rootfs dist-kernel
                          kernel-builtin split-usr test-suite pie development nexpose asimage cudnn
                          davix fortran gdml http jupyter libcxx minuit pythia8 R roofit root7 shadow
                          tmva unuran vc xrootd graphviz mpi training opencv rtaudio rubberband vidstab
                          xine aac ampache cdda cue mms scrobbler speedpitch streamtuner wavpack excel
                          webagg cairo latex dvb tracer ocamlopt portmixer audiocom id3tag mpg123
                          sbsms vamp libgig soundio stk vst designer handbook policykit editor image mpd
                          remote-fs search upower -branding -java).join(' ')
    puts "Gentoo USE flags: #{gentoo_use_flags}"

    # Gentoo common flags
    gentoo_cf_intel_alder_lake = "-march=alderlake -O2 -pipe"
    gentoo_cf_intel_skylake = "-march=skylake -O2 -pipe"
    gentoo_cf_intel_broadwell = "-march=broadwell -O2 -pipe"
    gentoo_cf_intel_haswell = "-march=haswell -O2 -pipe"
    gentoo_cf_intel_ivybridge_i3i5i7 = "-march=ivybridge -O2 -pipe"
    gentoo_cf_intel_ivybridge_pentium = "-march=ivybridge -mno-avx -mno-aes -mno-rdrnd -O2 -pipe"
    gentoo_cf_intel_sandybridge_i3i5i7 = "-march=sandybridge -O2 -pipe"
    gentoo_cf_intel_sandybridge_pentium = "-march=sandybridge -mno-avx -mno-aes -mno-rdrnd -O2 -pipe"
    gentoo_cf_intel_nehalem = "-march=nehalem -O2 -pipe"
    gentoo_cf_intel_westmere = "-march=westmere -O2 -pipe"
    gentoo_cf_intel_intel_core = "-march=core2 -O2 -pipe"
    gentoo_cf_amd_ryzen_1000_2000 = "-O2 -march=znver1 -pipe"
    gentoo_cf_amd_ryzen_3000_4000_5000 = "-O2 -march=znver2 -pipe"
    gentoo_cf_amd_ryzen_5000 = "-O2 -march=znver3 -pipe"
    gentoo_cf_amd_ryzen_7xx0 = "-O2 -march=znver4 -pipe"
    gentoo_cf_amd_ryzen_AI300_9000 = "-O2 -march=znver5 -pipe"
    gentoo_cf_risc_v = "-march=rv64imafdc_zicsr_zba_zbb -mcpu=sifive-u74 -mtune=sifive-7-series -O2 -pipe"

    gentoo_common_flags = {
      gentoo_cf_intel_alder_lake: gentoo_cf_intel_alder_lake,
      gentoo_cf_intel_skylake: gentoo_cf_intel_skylake,
      gentoo_cf_intel_broadwell: gentoo_cf_intel_broadwell,
      gentoo_cf_intel_haswell: gentoo_cf_intel_haswell,
      gentoo_cf_intel_ivybridge_i3i5i7: gentoo_cf_intel_ivybridge_i3i5i7,
      gentoo_cf_intel_ivybridge_pentium: gentoo_cf_intel_ivybridge_pentium,
      gentoo_cf_intel_sandybridge_i3i5i7: gentoo_cf_intel_sandybridge_i3i5i7,
      gentoo_cf_intel_sandybridge_pentium: gentoo_cf_intel_sandybridge_pentium,
      gentoo_cf_intel_nehalem: gentoo_cf_intel_nehalem,
      gentoo_cf_intel_westmere: gentoo_cf_intel_westmere,
      gentoo_cf_intel_intel_core: gentoo_cf_intel_intel_core,
      gentoo_cf_amd_ryzen_1000_2000: gentoo_cf_amd_ryzen_1000_2000,
      gentoo_cf_amd_ryzen_3000_4000_5000: gentoo_cf_amd_ryzen_3000_4000_5000,
      gentoo_cf_amd_ryzen_5000: gentoo_cf_amd_ryzen_5000,
      gentoo_cf_amd_ryzen_7xx0: gentoo_cf_amd_ryzen_7xx0,
      gentoo_cf_amd_ryzen_AI300_9000: gentoo_cf_amd_ryzen_AI300_9000,
      gentoo_cf_risc_v: gentoo_cf_risc_v
    }

    gentoo_c_flags   = gentoo_common_flags
    gentoo_cxx_flags = gentoo_common_flags

    puts "Gentoo C flags: #{gentoo_c_flags} and CXX flags: #{gentoo_cxx_flags}"

    gentoo_input_devices = %w("wacom libinput").join(' ')
    puts "Gentoo INPUT_DEVICES: #{gentoo_input_devices}"

    gentoo_accept_license = %Q("*")
    puts "Gentoo accept all licenses on all packages; ACCEPT_LICENSE=#{gentoo_accept_license}"

    gentoo_l10n = %Q("*")
    puts "Gentoo all available locales are built and installed: L10N=#{gentoo_l10n}"

    git_repos_github = [
      "linuxwacom/wacom-hid-descriptors",
      "google/oss-rebuild",
      "googlefonts/googlesans-code",
      "googlefonts/noto-emoji",
      "caddyserver/caddy",
      "jdx/mise",
      "valkey-io/valkey",
      "torchgeo/torchgeo",
      "citusdata/citus",
      "OSGeo/gdal",
      "n0-computer/iroh",
      "tipragot/godot-iroh",
      "PyO3/pyo3",
      "OpenPrinting/cups",
      "fish-shell/fish-shell",
      "pgRouting/pgrouting",
      "uber/h3",
      "postgresml/postgresml",
      "postgresml/pgcat",
      "jupyter/jupyter",
      "pydicom/pydicom",
      "fsvm88/cosmic-overlay",
      "CelestiaProject/Celestia",
      "ROCm/TheRock",
      "triton-lang/triton",
      "hhd-dev/hhd",
      "numpy/x86-simd-sort",
      "numpy/numpy",
      "osm2pgsql-dev/osm2pgsql",
      "sonic-pi-net/sonic-pi",
      "huggingface/xet-core",
      "huggingface/huggingface_hub",
      "NVIDIA/nvmath-python",
      "XTXMarkets/ternfs",
      "godotengine/godot",
      "bevyengine/bevy",
      "HaxeFoundation/haxe",
      "nodejs/node",
      "deepnight/ldtk",
      "HaxeFoundation/haxelib",
      "HaxeFoundation/hx3compat",
      "HaxeFoundation/record-macros",
      "HaxeFoundation/hx4compat",
      "HaxeFoundation/crypto",
      "obsproject/obs-studio",
      "CesiumGS/cesium",
      "emotion-js/emotion",
      "ruilisi/fortune-sheet",
      "mui/material-ui",
      "mui/base-ui",
      "mui/mui-x",
      "mui/pigment-css",
      "plouc/nivo",
      "d3/d3",
      "testing-library/react-testing-library",
      "testing-library/user-event",
      "testing-library/jest-dom",
      "testing-library/dom-testing-library",
      "testing-library/testing-library-docs",
      "testing-library/react-hooks-testing-library",
      "testing-library/eslint-plugin-testing-library",
      "eslint/eslint",
      "twbs/bootstrap",
      "rpearce/react-medium-image-zoom",
      "TroyAlford/react-jsx-parser",
      "georust/geo",
      "georust/geos",
      "georust/proj",
      "georust/robust",
      "georust/rstar",
      "georust/gdal",
      "georust/geojson",
      "georust/gpx",
      "georust/geotiff",
      "georust/kml",
      "georust/netcdf",
      "georust/osm",
      "georust/tilejson",
      "georust/transitfeed",
      "georust/wkt",
      "georust/wkb",
      "georust/world-file",
      "stac-utils/rustac",
      "stac-utils/rustac-py",
      "georust/ogcapi",
      "nav-solutions/rinex",
      "tmontaigu/shapefile-rs",
      "georust/geozero",
      "georust/geohash",
      "sunng87/node-geohash",
      "georust/geocoding",
      "georust/polyline",
      "geopandas/geopandas",
      "pgschema/pgschema",
      "BemiHQ/BemiDB",
      "darold/pgFormatter",
      "pgaudit/pgaudit",
      "pgexporter/pgexporter",
      "yaml/libyaml",
      "neondatabase-labs/elephantshark",
      "osmnames/osmnames",
      "alexreisner/geocoder",
      "janlelis/unicode-emoji",
      "lemonade-sdk/lemonade",
      "alexrudall/ruby-openai",
      "64bit/async-openai",
      "openai/openai-node",
      "olrea/openai-cpp",
      "openai/openai-python",
      "amd/gaia",
      "microsoft/onnxruntime-genai",
      "conda-forge/miniforge",
      "ealush/emoji-picker-react",
      "hodgef/react-simple-keyboard",
      "rails/rails",
      "AndreasFaust/react-ticker",
      "paulcollett/react-masonry-css",
      "pmndrs/react-spring",
      "3DJakob/react-tinder-card",
      "processone/ejabberd",
      "processone/ejabberd-po",
      "erlang/otp",
      "elixir-lang/elixir",
      "elixir-lang/ex_doc",
      "elixir-lang/gen_stage",
      "ziglang/zig",
      "lexical-lsp/vscode-lexical",
      "elixir-lang/expert",
      "casey/just",
      "spinel-coop/rv",
      "cjpais/Handy",
      "elixir-nx/axon",
      "elixir-nx/bumblebee",
      "elixir-nx/complex",
      "elixir-nx/emlx",
      "elixir-nx/nx",
      "elixir-nx/nx_image",
      "iree-org/iree",
      "elixir-nx/nx_iree",
      "elixir-nx/hnswlib",
      "nmslib/hnswlib",
      "elixir-nx/nx_signal",
      "emscripten-core/emsdk",
      "google/libprotobuf-mutator",
      "onnx/onnx",
      "microsoft/onnxruntime",
      "elixir-nx/ortex",
      "elixir-nx/polaris",
      "elixir-nx/safetensors",
      "dmlc/xgboost",
      "acalejos/exgboost",
      "elixir-nx/scholar",
      "elixir-nx/scidata",
      "nothings/stb",
      "elixir-nx/stb_image",
      "cocoa-xu/image_rs",
      "image-rs/image",
      "elixir-nx/tokenizers",
      "erlang/rebar3",
      "PCRE2Project/pcre2",
      "ulfjack/ryu",
      "erlang/otp-gdb-tools",
      "erlang/corba",
      "wxWidgets/wxWidgets",
      "erlang/sourcer",
      "erlang/egd",
      "erlang/pmod_transform",
      "erlang/epmd",
      "erlang/rebar3_otp_install_plugin",
      "erlang/rebar3_otpdoc_plugin",
      "erlang/percept",
      "rails/activemodel-serializers-xml",
      "rails/activerecord-session_store",
      "rails/activeresource",
      "rails/activesupport-json_encoder",
      "brendon/positioning",
      "brendon/acts_as_list",
      "amerine/acts_as_tree",
      "rails/bootsnap",
      "astral-sh/uv",
      "newton-physics/newton",
      "git-lfs/git-lfs",
      "katspaugh/wavesurfer.js",
      "yarnpkg/berry",
      "bbc/peaks.js",
      "bbc/audiowaveform",
      "konvajs/konva",
      "bbc/waveform-data.js",
      "bbc/audio_waveform-ruby",
      "transloadit/uppy",
      "s3rius/rustus",
      "tus/tus-js-client",
      "tus/tusd",
      "waylow/add_camera_rigs",
      "xyflow/xyflow",
      "microsoft/playwright",
      "open-cli-tools/concurrently",
      "prettier/prettier",
      "facebook/react",
      "isaacs/rimraf",
      "rollup/rollup",
      "vercel/turborepo",
      "microsoft/TypeScript",
      "changesets/changesets",
      "pnpm/pnpm",
      "npm/cli",
      "AcademySoftwareFoundation/OpenColorIO",
      "WenjieDu/PyPOTS",
      "mikeakohn/small_projects",
      "openzfs/zfs",
      "openzfs/openzfs-docs",
      "rails/builder",
      "buildkite/agent",
      "buildkite/emojis",
      "rails/buildkite-config",
      "gusto/buildkite-builder",
      "rails/coffee-rails",
      "rails/commands",
      "rails/conductor",
      "countries/country_select",
      "tailwindlabs/tailwindcss",
      "tailwindlabs/headlessui",
      "tailwindlabs/tailwindcss-typography",
      "tailwindlabs/prettier-plugin-tailwindcss",
      "postcss/postcss",
      "rails/cssbundling-rails",
      "rails/dartsass-rails",
      "rails/devcontainer",
      "rails/docked",
      "rails/jsbundling-rails",
      "evanw/esbuild",
      "oven-sh/bun",
      "webpack/webpack",
      "kmcphillips/exception_notification",
      "rails/execjs",
      "rails/globalid",
      "dshimy/http_authentication",
      "rails/importmap-rails",
      "rails/jbuilder",
      "rails/jquery-rails",
      "rails/jquery-ujs",
      "rails/kredis",
      "facebook/docusaurus",
      "i18next/i18next-cli",
      "i18next/react-i18next",
      "jscottsmith/react-scroll-parallax",
      "srdjan/react-multistep",
      "vercel/satori",
      "facebook/yoga",
      "ddnexus/pagy",
      "crmne/ruby_llm",
      "siaw23/railserd",
      "roo-rb/roo",
      "interagent/committee",
      "godot-rust/gdext",
      "nickberckley/bool_tool",
      "helsing-ai/sguaba",
      "Cairo-Dock/cairo-dock-core",
      "Cairo-Dock/cairo-dock-plug-ins",
      "Cairo-Dock/cairo-dock-plug-ins-extras",
      "ninja-build/ninja",
      "TypeCellOS/BlockNote",
      "PawanKolhe/color-calendar",
      "verdaccio/verdaccio",
      "samizdatco/skia-canvas",
      "mafintosh/tar-fs",
      "mafintosh/tar-stream",
      "ayuhito/modern-tar",
      "spencermountain/spacetime",
      "denoland/deno",
      "oxc-project/oxc",
      "raineorshine/npm-check-updates",
      "juliangarnier/anime",
      "cdump/radiacode",
      "sandialabs/InterSpec",
      "ckuethe/radiacode-tools",
      "psalias2006/gpu-hot",
      "timelinize/timelinize",
      "libvips/libvips",
      "strukturag/libheif",
      "servo/servo",
      "ROCm/ROCm",
      "mapeditor/tiled",
      "typesense/typesense",
      "typesense/typesense-rust",
      "jaeyson/ex_typesense",
      "RedSnail/typesense_orm",
      "typesense/typesense-go",
      "typesense/typesense-js",
      "typesense/typesense-python",
      "typesense/typesense-ruby",
      "typesense/typesense-instantsearch-adapter",
      "algolia/instantsearch",
      "algolia/algoliasearch-rails",
      "typesense/typesense-rails",
      "py-pdf/pdfly",
      "pytauri/pytauri",
      "Ttl/torchbp",
      "pypa/setuptools",
      "pytorch/pytorch",
      "pybind/pybind11",
      "google/googletest",
      "google/benchmark",
      "protocolbuffers/protobuf",
      "Maratyszcza/NNPACK",
      "pytorch/gloo",
      "Maratyszcza/pthreadpool",
      "Maratyszcza/FXdiv",
      "Maratyszcza/FP16",
      "Maratyszcza/psimd",
      "pytorch/cpuinfo",
      "malfet/PeachPy",
      "shibatch/sleef",
      "intel/ideep",
      "google/gemmlowp",
      "pytorch/fbgemm",
      "facebookincubator/fbjni",
      "google/XNNPACK",
      "fmtlib/fmt",
      "pytorch/tensorpipe",
      "NVIDIA/cudnn-frontend",
      "pytorch/kineto",
      "mreineck/pocketfft",
      "intel/ittapi",
      "google/flatbuffers",
      "nlohmann/json",
      "GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator",
      "NVIDIA/cutlass",
      "microsoft/mimalloc",
      "open-telemetry/opentelemetry-cpp",
      "yhirose/cpp-httplib",
      "NVIDIA/NVTX",
      "ROCm/composable_kernel",
      "ARM-software/kleidiai",
      "Dao-AILab/flash-attention",
      "ROCm/aiter",
      "scikit-build/scikit-build-cli",
      "scikit-build/scikit-build",
      "scikit-build/moderncmakedomain",
      "scikit-build/ninja-python-distributions",
      "scikit-build/dynamic-metadata",
      "scikit-build/cmake-python-distributions",
      "pyodide/pyodide",
      "emscripten-core/emscripten",
      "emscripten-core/emsdk",
      "llvm/llvm-project",
      "scikit-build/scikit-build-core",
      "scikit-build/f2py-cmake",
      "scikit-build/cython-cmake",
      "scikit-build/cmake-FindVcvars",
      "scikit-build/scikit-ci-addons",
      "pypa/cibuildwheel",
      "scikit-build/cmake-FindFortran",
      "flang-compiler/flang",
      "lfortran/lfortran",
      "scikit-build/wheeltools",
      "pypa/manylinux",
      "openssl/openssl",
      "PyO3/maturin",
      "pypa/pipx",
      "pypi/warehouse",
      "psf/black",
      "psf/requests",
      "readthedocs/ethical-ad-server",
      "readthedocs/common",
      "readthedocs/readthedocs.org",
      "sphinx-doc/sphinx",
      "sphinx-doc/sphinx-intl",
      "sphinx-doc/sphinx-autobuild",
      "sphinx-doc/sphinx-docker-images",
      "jupyter/notebook",
      "pytest-dev/pytest",
      "jupyter/jupyter_client",
      "jupyter/docker-stacks",
      "jupyter/jupyter_core",
      "jekyll/jekyll",
      "GoogleChrome/lighthouse",
      "jupyter/nbdime",
      "jupyter/cookiecutter-docker-stacks",
      "pallets/jinja",
      "pytest-dev/pytest-timeout",
      "python-trio/trio",
      "astral-sh/ruff",
      "python-attrs/attrs",
      "pre-commit/pre-commit",
      "pre-commit/pre-commit-hooks",
      "astral-sh/uv-pre-commit",
      "davidism/gha-update",
      "python/mypy",
      "dense-analysis/ale",
      "vim/vim",
      "neovim/neovim",
      "microsoft/pyright",
      "RobertCraigie/pyright-python",
      "ekalinin/nodeenv",
      "nedbat/coveragepy",
      "PyCQA/flake8",
      "PyCQA/pyflakes",
      "PyCQA/pycodestyle",
      "PyCQA/mccabe",
      "testing-cabal/mock",
      "tox-dev/tox",
      "devpi/devpi",
      "tox-dev/tox-uv",
      "pallets/pallets-sphinx-themes",
      "davidism/sphinxcontrib-log-cabinet",
      "python-babel/babel",
      "python-babel/flask-babel",
      "python-babel/django-babel",
      "django/django",
      "pallets/markupsafe",
      "pypa/flit",
      "pypa/pip",
      "facebook/pyrefly",
      "NordSecurity/nordvpn-linux",
      "o3de/o3de",
      "o3de/openmesh-cmake-library",
      "SELinuxProject/selinux",
      "pmndrs/triplex",
      "prabhuignoto/react-chrono",
      "MatthewHerbst/react-to-print",
      "satelllte/react-knob-headless",
      "satelllte/remotion-audio-visualizer",
      "wojtekmaj/react-pdf",
      "rictic/jsonriver",
      "microsoft/agent-framework",
      "safety-research/petri",
      "elevenlabs/ui",
      "shadcn-ui/ui",
      "trycua/cua",
      "karpathy/nanochat",
      "ROCm/aomp",
      "PlatformLab/HomaModule",
      "golang/go",
      "ollama/ollama",
      "ollama/ollama-python",
      "ollama/ollama-js",
      "Aharon-Bensadoun/Flufy",
      "cushydigit/lumina",
      "rabbitmq/rabbitmq-server",
      "tinygrad/tinygrad",
      "karpathy/micrograd",
      "luarocks/luarocks",
      "lua/lua",
      "rubynor/stemplin",
      "rubynor/heroku_db_sync",
      "excid3/ferrum_pdf",
      "rubycdp/ferrum",
      "rubycdp/cuprite",
      "rubycdp/vessel",
      "rubocop/rubocop",
      "teamcapybara/capybara",
      "bullet-train-co/bullet_train",
      "BemiHQ/BemiDB",
      "paradedb/paradedb",
      "helm/helm",
      "kubernetes/kubernetes",
      "pgdogdev/pgdog",
      "pgdogdev/helm",
      "pgdogdev/docs",
      "toluaina/pgsync",
      "minitest/minitest",
      "Perl/perl5",
      "rack/rack-attack",
      "windmotion-io/rspec-watchdog",
      "basecamp/activerecord-tenanted",
      "vercel/ai",
      "vercel/next.js",
      "vercel/ai-elements",
      "vercel/vercel",
      "vercel/otel",
      "vercel/components.build",
      "vercel/flags",
      "vercel/examples",
      "vercel/nft",
      "vercel/resumable-stream",
      "vercel/sdk",
      "vercel/edge-runtime",
      "vercel/storage",
      "vercel/acp-handler",
      "vercel/commerce",
      "ReactBricks/nextjs-commerce-rb",
      "vercel/mcp-handler",
      "goreleaser/goreleaser",
      "go-task/task",
      "vercel/registry-starter",
      "vercel/example-marketplace-integration",
      "vercel/streamdown",
      "vercel/ai-chatbot",
      "nextauthjs/next-auth",
      "radix-ui/primitives",
      "radix-ui/themes",
      "radix-ui/colors",
      "radix-ui/icons",
      "absinthe-graphql/absinthe",
      "absinthe-graphql/absinthe_plug",
      "vercel/next-forge",
      "vercel/nextjs-stripe-template",
      "vercel/ncc",
      "vercel/geist-font",
      "vercel/bidc",
      "vercel/next-app-router-playground",
      "vercel/react-tweet",
      "vercel/docs-search-battle-arena",
      "vercel/swr",
      "vercel/build-an-ai-app-starter-sep-25",
      "vercel/analytics",
      "ruby/rubygems",
      "openSIL/openSIL",
      "graffle-js/graffle",
      "skeletonlabs/skeleton",
      "cure53/DOMPurify",
      "django/asgiref",
      "platformatic/python-node",
      "kaluma-project/kaluma",
      "schedule-x/schedule-x",
      "streamich/json-joy",
      "sindresorhus/ky",
      "Hacker0x01/react-datepicker",
      "faker-js/faker",
      "hyprwm/Hyprland",
      "ilya-zlobintsev/LACT",
      "vcrhonek/hwdata",
      "KhronosGroup/Vulkan-Tools",
      "OCL-dev/ocl-icd",
      "OpenMixerProject/StageConnect",
      "carverauto/serviceradar",
      "LiberTEM/LiberTEM",
      "gnuradio/gnuradio",
      "OpenSpace/Spice",
      "CelestiaProject/Celestia",
      "jupytercad/JupyterCAD",
      "FreeCAD/FreeCAD",
      "y-crdt/pycrdt",
      "y-crdt/y-crdt",
      "audacious-media-player/audacious",
      "audacious-media-player/audacious-plugins",
      "audacious-media-player/libaudclient",
      "jupyter-xeus/xeus-octave",
      "emscripten-forge/recipes",
      "biopython/biopython",
      "biopython/docs",
      "jupyter-xeus/xeus",
      "reactos/reactos",
      "deepseek-ai/DeepSeek-OCR",
      "deepseek-ai/DeepEP",
      "deepseek-ai/DeepGEMM",
      "deepseek-ai/3FS",
      "deepseek-ai/DeepSeek-V3.2-Exp",
      "dao-AILab/flash-attention",
      "deepseek-ai/FlashMLA",
      "MetaX-MACA/FlashMLA",
      "MooreThreads/MT-flashMLA",
      "Deep-Spark/FlashMLA",
      "deepseek-ai/DeepSeek-V3",
      "deepseek-ai/DeepSeek-R1",
      "deepseek-ai/EPLB",
      "deepseek-ai/DualPipe",
      "deepseek-ai/smallpond",
      "duckdb/duckdb",
      "duckdb/duckdb-web",
      "duckdb/community-extensions",
      "just-the-docs/just-the-docs",
      "duckdb/duckdb-odbc",
      "duckdb/duckdb-node-neo",
      "duckdb/ducklake",
      "duckdb/ducklake-web",
      "duckdb/duckdb-rs",
      "gleam-lang/gleam",
      "gleam-lang/otp",
      "gleam-lang/website",
      "gleam-lang/stdlib",
      "gleam-lang/packages",
      "gleam-wisp/wisp",
      "rawhat/mist",
      "lpil/storail",
      "gleam-lang/time",
      "gleam-lang/language-tour",
      "gleam-lang/tree-sitter-gleam",
      "tree-sitter/tree-sitter",
      "gleam-lang/gleam-mode",
      "gleam-lang/http",
      "lpil/cgi",
      "evidentlyai/evidently",
      "Project-MONAI/MONAI",
      "iterative/dvc",
      "iterative/vscode-dvc",
      "iterative/vscode-dvc-demo",
      "yandex-cloud-socialtech/mri-newborns",
      "openbsd/src",
      "openbsd/ports",
      "openbsd/xenocara",
      "openbsd/www",
      "foundation/foundation-emails",
      "foundation/inky",
      "foundation/panini",
      "OpenDevicePartnership/patina",
      "bilinearlabs/rs-merkle-tree",
      "gleam-lang/crypto",
      "gleam-lang/erlang",
      "gleam-lang/hexpm-rust",
      "gleam-lang/zed-gleam",
      "zed-industries/zed",
      "gleam-lang/hackney",
      "gleam-lang/httpc",
      "gleam-lang/playground",
      "gleam-lang/fetch",
      "gleam-lang/hexpm-webapp",
      "hexpm/hexpm",
      "gleam-lang/javascript",
      "gleam-lang/json",
      "gleam-lang/vscode-gleam",
      "gleam-lang/elli",
      "conda/conda",
      "systemd/systemd",
      "ray-project/ray",
      "rapid7/metasploit-framework",
      "marp-team/marp",
      "gleam-lang/package-interface",
      "gleam-lang/example-echo-server",
      "gleam-lang/regexp",
      "gleam-lang/hexpm",
      "gleam-lang/gleam-highlight.js",
      "gleam-lang/example-lisp-interpreter",
      "gleam-lang/cowboy",
      "gleam-lang/cookbook",
      "gleam-lang/yielder",
      "gleam-lang/deque",
      "bigskysoftware/htmx",
      "michaeljones/matcha",
      "gleam-lang/example-todomvc",
      "gleam-lang/mix_gleam",
      "distcc/distcc",
      "gleam-lang/bitwise",
      "gleam-lang/gleam-compiler-ci-test",
      "gleam-lang/plug",
      "CelestiaProject/CelestiaContent",
      "CelestiaProject/www",
      "astropy/astropy",
      "astropy/asdf-astropy",
      "astropy/astro-image-display-api",
      "astropy/astroplan",
      "astropy/astropy-APEs",
      "astropy/astropy-benchmarks",
      "astropy/astropy-data",
      "Unidata/MetPy",
      "scipy/scipy",
      "pandas-dev/pandas",
      "hgrecco/pint",
      "pydata/xarray",
      "dask/dask",
      "astropy/astropy-healpix",
      "astropy/astropy-iers-data",
      "astropy/astropy-sphinx-theme",
      "astropy/astroscrappy",
      "astropy/astrowidgets",
      "astropy/ccd-reduction-and-photometry-guide",
      "meta-pytorch/monarch",
      "sveltejs/svelte",
      "deta/surf",
      "stalwartlabs/stalwart",
      "character-ai/Ovi",
      "lemmerelassal/NoraSearch",
      "sraoss/pg_ivm",
      "ed-o-saurus/PLHaskell",
      "sunng87/pgwire",
      "HexaCluster/pg_dbms_errlog",
      "supabase/postgres-meta",
      "supabase/supabase",
      "sbdchd/squawk",
      "pgadmin-org/pgadmin4",
      "geojupyter/jupytergis",
      "jupyterlite/jupyterlite",
      "AsahiLinux/m1n1",
      "AsahiLinux/artwork",
      "rafalh/rust-fatfs",
      "AsahiLinux/asahi-audio",
      "AsahiLinux/speakersafetyd",
      "alsa-project/alsa-lib",
      "alsa-project/alsa-firmware",
      "alsa-project/alsa-gobject",
      "alsa-project/alsa-gobject-rs",
      "alsa-project/alsa-oss",
      "alsa-project/alsa-plugins",
      "alsa-project/alsa-python",
      "alsa-project/alsa-tests",
      "alsa-project/alsa-tools",
      "alsa-project/alsa-topology-conf",
      "alsa-project/alsa-ucm-conf",
      "alsa-project/alsa-utils",
      "alsa-project/gobject-introspection-docs",
      "gtk-rs/gtk-rs-core",
      "gtk-rs/gtk4-rs",
      "typst/typst",
      "gtk-rs/gir",
      "alsa-project/hinawa-rs",
      "gtk-rs/gir-files",
      "alsa-project/hitaki-rs",
      "alsa-project/libhinawa",
      "alsa-project/libhitaki",
      "pyenv/pyenv",
      "alsa-project/snd-firewire-ctl-services",
      "alsa-project/tinycompress",
      "pymc-devs/pymc",
      "pymc-devs/pytensor",
      "PythonOT/POT",
      "pymc-devs/pymc-examples",
      "tahoebio/tahoe-x1",
      "KhronosGroup/Vulkan-Docs",
      "grafana/grafana",
      "maplibre/maplibre-gl-js",
      "visgl/react-map-gl",
      "maplibre/maplibre-native-qt",
      "jothepro/doxygen-awesome-css",
      "maplibre/maplibre-native",
      "dracut-ng/dracut-ng",
      "Kangie/plymouth-openrc-plugin",
      "lpil/gleescript",
      "ratatui/ratatui",
      "FRRouting/frr",
      "NetBSD/src",
      "NetBSD/xsrc",
      "NetBSD/pkgsrc",
      "NetBSD/pkgsrc-wip",
      "xmms2/xmms2-devel",
      "xmms2/s4",
      "xmms2/xmms2-tutorial",
      "xmms2/xmms2-stable",
      "xmms2/docs",
      "terrastruct/ci",
      "terrastruct/d2",
      "RohanAdwankar/oxdraw",
      "miketromba/shadcn-themer",
      "lucide-icons/lucide",
      "beacondb/beacondb",
      "beacondb/bcap",
      "beacondb/libwifi",
      "Nukesor/libwifi",
      "Nukesor/comfy-table",
      "mnadev/adhango",
      "alphahm/adhanpy",
      "insha/salah",
      "cfrancia/spectral",
      "rust-num/num",
      "radcheb/Adhan",
      "chronotope/chrono",
      "batoulapps/adhan-testdata",
      "batoulapps/adhan-js",
      "azzamsa/misykat",
      "Cisco-Talos/clamav",
      "CesiumGS/3d-tiles",
      "CesiumGS/3d-tiles-samples",
      "CesiumGS/3d-tiles-tools",
      "CesiumGS/3d-tiles-validator",
      "CesiumGS/3d-tiles-samples-generator",
      "CesiumGS/cdb-to-3dtiles",
      "mapbox/earcut.hpp",
      "mapbox/earcut",
      "glfw/glfw",
      "zeux/meshoptimizer",
      "g-truc/glm",
      "syoyo/tinygltf",
      "jarro2783/cxxopts",
      "openscenegraph/OpenSceneGraph",
      "catchorg/Catch2",
      "CesiumGS/cesium-google-earth-examples",
      "CesiumGS/cesium-ion-blender-addon",
      "CesiumGS/cesium-ion-rest-api-examples",
      "CesiumGS/cesium-materials-pack",
      "bilke/cmake-modules",
      "CesiumGS/cesium-native",
      "htacg/tidy-html5",
      "CesiumGS/cesium-o3de",
      "CesiumGS/cesium-o3de-samples",
      "CesiumGS/cesium-omniverse",
      "CesiumGS/cesium-omniverse-samples",
      "CesiumGS/cesium-threejs-experiment",
      "mrdoob/three.js",
      "CesiumGS/cesium-webpack-example",
      "CesiumGS/cesium-vite-example",
      "CesiumGS/cesium-wasm-utils",
      "CesiumGS/cesiumjs-workshop",
      "CesiumGS/collada-dom",
      "CesiumGS/COLLADA2GLTF",
      "KhronosGroup/COLLADA2GLTF",
      "OpenCOLLADA/OpenCOLLADA",
      "KhronosGroup/OpenCOLLADA",
      "Tencent/rapidjson",
      "lasalvavida/ahoy",
      "google/draco",
      "gulrak/filesystem",
      "CesiumGS/collada2gltf-web-service",
      "CesiumGS/community",
      "conan-io/conan",
      "CesiumGS/conan-center-index",
      "CesiumGS/EarthKAMExplorer",
      "CesiumGS/eslint-config-cesium",
      "CesiumGS/glTF",
      "KhronosGroup/glTF",
      "CesiumGS/gltf-pipeline",
      "istanbuljs/nyc",
      "mlabbe/glutess",
      "SCons/scons",
      "KhronosGroup/KTX-Software",
      "CesiumGS/LAStools",
      "LAStools/LAStools",
      "qgis/QGIS",
      "CesiumGS/libcitygml",
      "jklimke/libcitygml",
      "CesiumGS/libjpeg-turbo",
      "libjpeg-turbo/libjpeg-turbo",
      "CesiumGS/meshoptimizer",
      "zeux/meshoptimizer",
      "CesiumGS/obj2gltf",
      "CesiumGS/OpenPhillyGlobe",
      "CesiumGS/quantized-mesh",
      "CesiumGS/spz",
      "nianticlabs/spz",
      "CesiumGS/spz-loader",
      "drumath2237/spz-loader",
      "CesiumGS/strip-pragma-loader",
      "requirejs/r.js",
      "requirejs/requirejs",
      "CesiumGS/webglreport",
      "CesiumGS/wetzel",
      "CesiumGS/xatlas",
      "CesiumGS/xerces-c",
      "mateidavid/zstr",
      "CogitatorTech/ordered",
      "stride3d/stride",
      "jsonquerylang/jsonquery",
      "jsonquerylang/jsonquery-python",
      "appwrite/appwrite",
      "rust-num/num-bigint",
      "rust-num/num-complex",
      "rust-num/num-derive",
      "rust-num/num-integer",
      "rust-num/num-iter",
      "rust-num/num-rational",
      "rust-num/num-traits",
      "chronotope/chrono-tz",
      "chronotope/humantime",
      "chronotope/parse-zoneinfo",
      "chronotope/pure-rust-locales",
      "mapbox/polylabel",
      "mapbox/mason",
      "mourner/eslint-config-mourner",
      "andrewharvey/geojson-polygon-labels",
      "Twista/python-polylabel",
      "shapely/shapely",
      "libgeos/geos",
      "urschrei/polylabel-rs",
      "fredplante/ruby-polylabel"
    ]

    git_repos_chromium_googlesource = [
      "chromium/src",
      "v8/v8",
      "chromium/tools/chrome-devtools-frontend",
      "chromium/tools/chromium-build"
    ]

    git_repos_gn_googlesource = [
      "gn"
    ]

    git_repos_code_qt_io = [
      "qt/qtwebengine"
    ]

    git_repos_gcc_gnu_org = [
      "gcc",
      "gcc-wwwdocs"
    ]

    git_repos_savannah_gnu_org = [
      "make",
      "emacs"
    ]

    git_repos_git_sr_ht = [
      "~sircmpwn/scdoc"
    ]

    git_repos_review_haiku_os_org = [
      "haiku",
      "buildtools",
      "jamfile-engine",
      "userguide"
    ]

    git_repos_deuxfleurs_fr = [
      "Deuxfleurs/garage"
    ]

    git_repos_gitlab = [
      "asus-linux/asusctl",
      "asus-linux/supergfxctl",
      "wireshark/wireshark",
      "gpsd/gpsd",
      "glitchtip/glitchtip-backend",
      "glitchtip/glitchtip",
      "glitchtip/error-factories/rust-error-factory",
      "glitchtip/error-factories/rails-error-factory",
      "glitchtip/error-factories/nextjs-error-factor",
      "glitchtip/error-factories/js-node-error-factory",
      "glitchtip/error-factories/js-vite-error-factory",
      "glitchtip/error-factories/js-error-factory",
      "glitchtip/error-factories/go-error-factory",
      "glitchtip/error-factories/elixir-error-factory",
      "glitchtip/error-factories/django-error-factory",
      "glitchtip/error-factories/cpp-error-factory",
      "glitchtip/glitchtip-frontend",
      "glitchtip/glitchtip-helm-chart",
      "glitchtip/glitchtip-emails",
      "apparmor/apparmor",
      "libeigen/eigen",
      "libeigen/eigen-performance-monitoring"
    ]

    git_repos_freedesktop_gitlab = [
      "mesa/mesa",
      "wlroots/wlroots",
      "mesa/libdrm",
      "gstreamer/gstreamer-rs",
      "gstreamer/gstreamer",
      "gstreamer/gst-integration-testsuites",
      "gstreamer/gst-plugins-rs",
      "gstreamer/gst-template",
      "gstreamer/orc",
      "pipewire/pipewire",
      "pipewire/wireplumber",
      "pipewire/pipewire-rs",
      "pipewire/pipewire-native-rs",
      "pipewire/media-session",
      "pipewire/helvum",
      "plymouth/plymouth"
    ]

    git_repos_xfce_gitlab = [
      "xfce/xfwm4",
      "xfce/xfdesktop",
      "xfce/xfconf",
      "xfce/xfce4-settings",
      "xfce/xfce4-session",
      "xfce/xfce4-power-manager",
      "xfce/xfce4-panel",
      "xfce/xfce4-dev-tools",
      "xfce/xfce4-appfinder",
      "xfce/tumbler",
      "xfce/thunar-volman",
      "xfce/thunar",
      "xfce/libxfce4windowing",
      "xfce/libxfce4util",
      "xfce/libxfce4ui",
      "xfce/garcon",
      "xfce/exo",
      "artwork/public",
      "artwork/xfce-color-palette",
      "panel-plugins/xfce4-battery-plugin",
      "panel-plugins/xfce4-calculator-plugin",
      "panel-plugins/xfce4-clipman-plugin",
      "panel-plugins/xfce4-cpufreq-plugin",
      "panel-plugins/xfce4-cpugraph-plugin",
      "panel-plugins/xfce4-diskperf-plugin",
      "panel-plugins/xfce4-docklike-plugin",
      "panel-plugins/xfce4-eyes-plugin",
      "panel-plugins/xfce4-fsguard-plugin",
      "panel-plugins/xfce4-generic-slider",
      "panel-plugins/xfce4-genmon-plugin",
      "panel-plugins/xfce4-indicator-plugin",
      "panel-plugins/xfce4-mailwatch-plugin",
      "panel-plugins/xfce4-mount-plugin",
      "panel-plugins/xfce4-mpc-plugin",
      "panel-plugins/xfce4-netload-plugin",
      "panel-plugins/xfce4-notes-plugin",
      "panel-plugins/xfce4-places-plugin",
      "panel-plugins/xfce4-pulseaudio-plugin",
      "panel-plugins/xfce4-sample-plugin",
      "panel-plugins/xfce4-sensors-plugin",
      "panel-plugins/xfce4-smartbookmark-plugin",
      "panel-plugins/xfce4-stopwatch-plugin",
      "panel-plugins/xfce4-systemload-plugin",
      "panel-plugins/xfce4-time-out-plugin",
      "panel-plugins/xfce4-timer-plugin",
      "panel-plugins/xfce4-verve-plugin",
      "panel-plugins/xfce4-wavelan-plugin",
      "panel-plugins/xfce4-weather-plugin",
      "panel-plugins/xfce4-whiskermenu-plugin",
      "panel-plugins/xfce4-windowck-plugin",
      "panel-plugins/xfce4-xkb-plugin",
      "thunar-plugins/thunar-archive-plugin",
      "thunar-plugins/thunar-media-tags-plugin",
      "thunar-plugins/thunar-shares-plugin",
      "thunar-plugins/thunar-vcs-plugin",
      "bindings/thunarx-python",
      "bindings/xfce4-rs",
      "bindings/xfce4-vala",
      "apps/catfish",
      "apps/gigolo",
      "apps/mousepad",
      "apps/orage",
      "apps/parole",
      "apps/ristretto",
      "apps/xfburn",
      "apps/xfce4-dict",
      "apps/xfce4-mixer",
      "apps/xfce4-notifyd",
      "apps/xfce4-panel-profiles",
      "apps/xfce4-screensaver",
      "apps/xfce4-screenshooter",
      "apps/xfce4-taskmanager",
      "apps/xfce4-terminal",
      "apps/xfce4-volumed-pulse",
      "apps/xfdashboard",
      "apps/xfmpc"
    ]

    git_repos_kitware_gitlab = [
      "cmake/cmake"
    ]

    git_repos_code_videolan_org = [
      "videolan/vlc"
    ]

    git_repos_redox_os_gitlab = [
      "redox-os/cookbook"
    ]

    git_repos_freebsd_org = [
      "src"
    ]

    git_repos_gnome_gitlab = [
      "GNOME/vala",
      "GNOME/gimp",
      "GNOME/gtk",
      "GNOME/pygobject",
      "GNOME/libadwaita",
      "GNOME/adwaita-fonts",
      "GNOME/gi-docgen"
    ]

    git_repos_postgresql_org = [
      "postgresql"
    ]

    git_repos_osgeo = [
      "postgis/postgis"
    ]

    git_repos_codeberg = [
      "uzu/strudel",
      "chrisn/peaks.js",
      "chrisn/audiowaveform",
      "chrisn/peaksjs-react-example",
      "chrisn/waveform-data.js",
      "chrisn/audio_waveform-ruby"
    ]

    git_repos_kde_invent = [
      "sdk/kdesrc-build",
      "graphics/krita",
      "utilities/kirogi",
      "plasma/kwin",
      "network/kdeconnect-kde"
    ]

    git_repos_ffmpeg_org = [
      "ffmpeg"
    ]

    git_repos_projects_blender = [
      "blender/blender",
      "blender/cycles",
      "blender/lib-source",
      "blender/blender-asset-tracer",
      "blender/blender-benchmarks",
      "blender/blender-assets",
      "blender/blender-manual",
      "blender/blender-ui-translations",
      "blender/blender-manual-translations",
      "blender/blender-developer-docs",
      "extensions/io_scene_3ds",
      "extensions/amaranth",
      "extensions/add_mesh_BoltFactory",
      "extensions/render_povray",
      "extensions/space_view3d_pie_menus",
      "extensions/object_fracture_cell",
      "extensions/mesh_looptools",
      "extensions/greasepencil_tools",
      "extensions/print3d_toolbox",
      "extensions/lighting_tri_lights",
      "extensions/io_scene_x3d",
      "extensions/object_collection_manager",
      "extensions/mesh_inset",
      "extensions/add_curve_ivygen",
      "extensions/precision_drawing_tools",
      "extensions/bone_selection_sets",
      "extensions/btrace",
      "extensions/real_snow",
      "extensions/object_color_rules",
      "extensions/space_view3d_align_tools",
      "extensions/add_curve_sapling",
      "extensions/development_icon_get",
      "extensions/space_view3d_3d_navigation",
      "extensions/io_mesh_stl",
      "extensions/io_anim_nuke_chan",
      "extensions/power_sequencer",
      "extensions/system_property_chart",
      "extensions/io_anim_camera",
      "extensions/io_export_paper_model",
      "extensions/io_export_pc2",
      "extensions/io_export_dxf",
      "extensions/io_import_dxf",
      "extensions/io_shape_mdd",
      "extensions/io_import_BrushSet",
      "extensions/space_clip_editor_refine_solution",
      "extensions/render_copy_settings",
      "extensions/ant_landscape",
      "extensions/io_import_palette",
      "extensions/measureit",
      "extensions/curve_tools",
      "extensions/space_view3d_stored_views",
      "extensions/space_view3d_modifier_tools",
      "extensions/blender_id",
      "extensions/mesh_snap_utilities_line",
      "extensions/curve_simplify",
      "extensions/mesh_f2",
      "extensions/mesh_tiny_cad",
      "extensions/object_edit_linked",
      "extensions/add_curve_extra_objects",
      "extensions/add_mesh_extra_objects",
      "extensions/space_view3d_copy_attributes",
      "extensions/mesh_bsurfaces",
      "extensions/object_carver",
      "extensions/action_to_scene_range",
      "extensions/storypencil",
      "extensions/object_boolean_tools",
      "extensions/animation_animall",
      "extensions/automation-scripts",
      "extensions/theme_deep_grey",
      "extensions/vdm_brush_baker",
      "extensions/io_mesh_atomic",
      "extensions/development_edit_operator",
      "extensions/mesh_tissue",
      "extensions/magic_uv",
      "extensions/materials_utils",
      "extensions/theme_xsi",
      "extensions/theme_white",
      "extensions/theme_maya",
      "extensions/theme_minimal_dark",
      "extensions/theme_print_friendly",
      "extensions/theme_modo",
      "extensions/system_demo_mode",
      "extensions/curve_assign_shapekey",
      "extensions/animation_add_corrective_shape_key",
      "extensions/space_view3d_brush_menus",
      "extensions/space_view3d_math_vis",
      "extensions/mesh_tools",
      "extensions/lighting_dynamic_sky",
      "extensions/render_ui_animation_render",
      "extensions/object_scatter",
      "extensions/camera_turnaround",
      "extensions/paint_palette",
      "extensions/archimesh",
      "extensions/object_skinify",
      "extensions/add_mesh_geodesic_domes",
      "extensions/node_presets",
      "extensions/materials_library_vx",
      "extensions/development_iskeyfree",
      "extensions/render_freestyle_svg",
      "extensions/mesh_auto_mirror",
      "extensions/add_mesh_discombobulator",
      "extensions/system_blend_info",
      "extensions/space_view3d_spacebar_menu"
    ]

    fossil_repos_sqlite_org = [
      "src"
    ]

    svn_repos_code_sf_net = [
      "sdcc/code/trunk"
    ]

    gentoo_emerge_packages = [
      "sys-fs/btrfs-progs",
      "www-apps/gitea",
      "sys-devel/distcc",
      "app-emulation/qemu",
      "dev-db/postgis",
      "sci-libs/gdal",
      "app-shells/fish",
      "dev-db/pgrouting",
      "dev-python/jupyter",
      "kde-plasma/plasma-meta",
      "gnome-base/gnome",
      "dev-lang/haxe",
      "dev-libs/libev",
      "dev-python/docutils",
      "dev-libs/libyaml",
      "dev-lang/zig",
      "dev-vcs/git-lfs",
      "sys-fs/f2fs-tools",
      "dev-vcs/fossil",
      "net-misc/rabbitmq-server",
      "sec-policy/selinux-base",
      "sys-libs/libselinux",
      "sys-apps/policycoreutils",
      "sys-apps/hwdata",
      "dev-embedded/sdcc",
      "sys-boot/plymouth",
      "sys-kernel/dracut",
      "sys-boot/plymouth-openrc-plugin",
      "app-antivirus/clamav"
    ]

    eselect_repository_add = {
      cosmic_overlay: "https://github.com/fsvm88/cosmic-overlay.git"
    }

    custom_overlay_emerge = [
      "cosmic-meta pop-theme-meta"
    ]

    # TODO: Create KDE deps directory and install kdesrc-build there
    kde_deps_fetch_command = "kdesrc-build --metadata-only"

    QuantumsandLive::FormatDrive.drive_partitioning(sudo_password)
    QuantumsandLive::FormatDrive.drive_formatting(sudo_password)

    # TODO: sys-fs/cryptsetup; cryptsetup luksFormat --key-size 512 /dev/nvme0n1p1
    # TODO: sudo-rs; a memory safe implementation of sudo and su

    gentoo_stage3_tar_command = "tar xpvf stage3-*.tar.xz --xattrs-include='*.*' --numeric-owner -C #{dirpath}"
    gentoo_stage3_url = QuantumsandLive::Resource.gentoo_stage3_url
    # curl command
    # -L; if server reports that requested url has moved to a different location then redo request
    # -O; keep the same file name; file output to a local file named like the file name of the remote file
    # -C -; continue download if partially downloaded previously
    gentoo_stage3_curl_command = "curl -L -O -C - #{gentoo_stage3_url}"
    QuantumsandLive::TerminalCommand.terminal_pipe_user command: gentoo_stage3_curl_command

    res = QuantumsandLive::TerminalCommand.terminal_capture_sudo password: sudo_password, command: gentoo_stage3_tar_command
    puts res.inspect

    res = QuantumsandLive::TerminalCommand.chroot_mount_sudo password: sudo_password, dirpath: dirpath
    puts res.inspect

    locale_gen_command = "locale-gen -A"
    res = QuantumsandLive::TerminalCommand.chroot_sudo password: sudo_password, dirpath: dirpath, command: locale_gen_command
    puts res.inspect

    emerge_sync_command = "emerge --sync"
    res = QuantumsandLive::TerminalCommand.chroot_sudo password: sudo_password, dirpath: dirpath, command: emerge_sync_command
    puts res.inspect

    emerge_oneshot_portage_command = "emerge --oneshot sys-apps/portage"
    res = QuantumsandLive::TerminalCommand.chroot_sudo password: sudo_password, dirpath: dirpath, command: emerge_oneshot_portage_command
    puts res.inspect

    # DONE: gentoo stage3
    # DONE: Install all locales: locale-gen -A
    # DONE: emerge --sync

    # DONE: USE flags
    # DONE: CFLAGS and CXXFLAGS
    # DONE: INPUT_DEVICES; Wacom; /etc/portage/make.conf INPUT_DEVICES="wacom libinput"
    # DONE: ACCEPT_LICENSE
    # TODO: CPU_FLAGS_X86; emerge --ask app-portage/cpuid2cpuflags; echo "*/* $(cpuid2cpuflags)" > /etc/portage/package.use/00cpu-flags
    # TODO: VIDEO_CARDS
    # DONE: LINGUAS unset; Unset LINGUAS means to install all available languages
    # DONE: L10N
    # TODO: Specify GPKG binary package format; BINPKG_FORMAT="gpkg"; FEATURES="getbinpkg"
    # TODO: kernel sources at /usr/src/linux
    # DONE: emerge --oneshot sys-apps/portage

    # TODO: sys-fs/btrfs-progs
    # TODO: linuxwacom/wacom-hid-descriptors
    # TODO: google/oss-rebuild; Google ❤️ Open Source
    # TODO: Google Sans Code
    # TODO: emerge --ask www-apps/gitea
    # TODO: Caddy
    # TODO: sys-devel/distcc
    # TODO: jdx/mise; dev tools, env vars, task runner
    # TODO: QEMU
    # TODO: Valkey
    # TODO: Noto Color Emoji
    # TODO: PostgreSQL
    # TODO: POSTGRES_MULTIPLE_EXTENSIONS=postgis,hstore,postgis_topology,postgis_raster,pgrouting,h3,h3_postgis,ogr_fdw
    # TODO: PostGIS
    # TODO: sci-libs/gdal
    # TODO: citusdata/citus
    # TODO: pgRouting; Routing on PostgreSQL
    # TODO: H3: A Hexagonal Hierarchical Geospatial Indexing System
    # TODO: PostgresML
    # TODO: pgcat
    # TODO: KDE; kde-plasma/plasma-meta
    # TODO: GNOME; emerge gnome-base/gnome
    # TODO: COSMIC; via a custom overlay
    # TODO: LimeSuite
    # TODO: GNU Radio
    # TODO: Gqrx
    # TODO: net-wireless/gr-osmosdr
    # TODO: kit-cel/gr-dab
    # TODO: OpenStreetMap
    # TODO: Osm2pgsql
    # TODO: mapnik
    # TODO: openstreetmap-carto
    # TODO: maplibre martin
    # TODO: QGIS
    # TODO: CoMaps; a community-led fork of Organic Maps
    # TODO: hyperknot/openfreemap; Free and open-source map hosting solution
    # TODO: rustup
    # TODO: Blender; Deps @ blender/lib-source
    # TODO: sgl-project/sglang; fast serving framework for large language models and vision language models
    # TODO: DeepSeek
    # TODO: Fire-Flyer File System (3FS)
    # TODO: MiniMax-M1
    # TODO: comfyanonymous/ComfyUI
    # TODO: Comfy-Org/workflow_templates
    # TODO: Comfy-Org/comfy-cli
    # TODO: nvidia/parakeet-tdt-0.6b-v2
    # TODO: xai-org/grok-2
    # TODO: Wan-Video/Wan2.2; Wan: Open and Advanced Large-Scale Video Generative Models
    # TODO: QwenLM/Qwen3-Omni; natively end-to-end, omni-modal LLM developed by the Qwen team at Alibaba Cloud
    # TODO: oumi-ai/oumi; open-source platform that streamlines the entire lifecycle of foundation models
    # TODO: NASA-IMPACT/Surya; Implementation of the Surya Foundation Model and Downstream Tasks for Heliophysics
    # TODO: nasa-ibm-ai4science/Surya-1.0; The first open-source AI foundation model for heliophysics
    # TODO: nasa-ibm-ai4science/SDO_training; This dataset provides machine learning (ML)-ready solar data curated from NASA’s Solar Dynamics Observatory
    # TODO: apple/ml-diffucoder; DiffuCoder: Understanding and Improving Masked Diffusion Models for Code Generation
    # TODO: collabora/gst-python-ml; Python-powered ML analytics for GStreamer pipelines
    # TODO: NVIDIA Linux driver
    # TODO: CUDA
    # TODO: ROCm
    # TODO: PyTorch
    # TODO: tch-rs; Rust bindings for the C++ api of PyTorch
    # TODO: MONAI; PyTorch-based, open-source framework for deep learning in healthcare imaging
    # TODO: cornerstonejs/cornerstone3D; Cornerstone is a set of JavaScript libraries that can be used to build web-based medical imaging applications
    # TODO: luminal-ai/luminal; Deep learning at the speed of light
    # TODO; Evidently AI monitoring
    # TODO: a2aproject/A2A; open protocol enabling communication and interoperability between opaque agentic applications
    # TODO: nvidia/Llama-Nemotron-VLM-Dataset-v1; a 3-million-sample dataset for OCR, visual question answering, and captioning tasks
    # TODO: NVIDIA/NeMo-speech-data-processor; A toolkit for processing speech data and creating speech datasets
    # TODO: nvidia/Granary; Speech Recognition and Translation Dataset in 25 European Languages
    # TODO: scm_breeze
    # TODO: VSCodium
    # TODO: Docker; Snippet; /etc/kernel/config.d/docker-linux6-11-10.config
    # TODO: Docker Compose; app-containers/docker-compose
    # TODO: goharbor/harbor; open source trusted cloud native registry project that stores, signs, and scans content
    # TODO: Krita
    # TODO: GIMP
    # TODO: Inkscape
    # TODO: Linux kernel; CONFIG_X86_NATIVE_CPU
    # TODO: FFmpeg
    # TODO: Firefox
    # TODO: Chromium
    # TODO: VLC
    # TODO: dev-lang/erlang
    # TODO: dev-lang/elixir
    # TODO: ejabberd
    # TODO: GStreamer
    # TODO: dev-cpp/gtest; Google C++ Testing Framework
    # TODO: audio_waveform-ruby + peaks.js + audiowaveform
    # TODO: Quantum Sand deps
    # TODO: Customised Qt6 + Quantum Sand + OpenTelemetry + MapLibre GL JS
    # TODO: Godot Engine
    # TODO: Bevy Engine
    # TODO: Jupyter + NumPy + pandas + scikit-learn
    # TODO: pydicom
    # TODO: LibreOffice
    # TODO: Fail2Ban
    # TODO: tcpdump
    # TODO: Wireshark
    # TODO: Nmap
    # TODO: OBS Studio
    # TODO: dev-debug/dtrace
    # TODO: app-antivirus/clamav
    # TODO: ZFS
    # TODO: DGM.js with collaboration
    # TODO: Gitea
    # TODO: KiCad
    # TODO: atopile/atopile
    # TODO: pentoo-overlay; net-analyzer/metasploit
    # TODO: soapySDR
    # TODO: srsGUI + srsRAN_4G + srsRAN_Project (complete 5G RAN solution)
    # TODO: qradiolink
    # TODO: ROOT: data analysis framework; sci-physics/root
    # TODO: Tesseract Open Source OCR Engine
    # TODO: WanzenBug/rqrr; QR reader written in Rust
    # TODO: Open access papers PDF science and AI; title:, authors:, license:, pdf_url:
    # TODO: Open access classical sheet music; Public domain and Creative Commons Attribution; title:, authors:, license:, pdf_url:
    # TODO: mavlink/rust-mavlink
    # TODO: ArduPilot
    # TODO: Shotcut + MLT
    # TODO: gfortran; GCC's Fortran
    # TODO: Flang; LLVM's fortran compiler
    # TODO: flxzt/rnote; Sketch and take handwritten notes
    # TODO: https://gitlab.com/chrony/chrony.git; Advanced NTP client and server
    # TODO: Audacious; an open source audio player. A descendant of XMMS; media-sound/audacious
    # TODO; Glaxnimate; open-source vector animation and motion design desktop application
    # TODO; Haiku Animator; Design tool for creating Lottie animations and interactive web component
    # TODO; @lottiefiles/react-lottie-player
    # TODO: OctoPrint; Web interface for controlling consumer 3D printers
    # TODO: Matplotlib animation video generation
    # TODO: cowtoolz/webcamize; Use (almost) any camera as a webcam
    # TODO: Canop/dysk
    # TODO: SageMath; free open-source mathematics software system
    # TODO: pnpm; pnpm store path; global virtual stores; node_modules contains only symlinks to a central virtual store
    # TODO: dev-lang/haxe
    # TODO: ldtk; modern, lightweight and efficient 2D level editor
    # TODO: AlbrechtL/welle.io
    # TODO: Opendigitalradio/ODR-EncoderManager
    # TODO: Opendigitalradio/ODR-PadEnc
    # TODO: Opendigitalradio/ODR-AudioEnc
    # TODO: Opendigitalradio/odr-mmbtools-common
    # TODO: Opendigitalradio/fdk-aac
    # TODO: Opendigitalradio/ODR-DabMod
    # TODO: Opendigitalradio/ODR-DabMux
    # TODO: Opendigitalradio/dablin
    # TODO: Opendigitalradio/mmbtools-doc
    # TODO: jketterl/openwebrx
    # TODO: Automattic/harper; English grammar checker
    # TODO: sonic-pi-net/sonic-pi
    # TODO: GraphiteEditor/Graphite
    # TODO: vlang/v
    # TODO: ZetloStudio/ZeQLplus
    # TODO: digiKam
    # TODO: Audacity
    # TODO: Ardour
    # TODO: LMMS
    # TODO: Kdenlive; KDE Non-Linear Video Editor
    # TODO: GParted
    # TODO: OpenChemistry/avogadrolibs; 3D rendering, visualization, analysis and data processing
    # TODO: OpenChemistry/tomviz; processing, visualization, and analysis of 3D tomography data
    # TODO: OpenChemistry/molequeue; Desktop integration of high performance computing resources
    # TODO: OpenChemistry/chemicaljson; Chemical JSON data representation
    # TODO: Summa-Cogni/Mathpad; A mathematical keypad for students and professionals
    # TODO: enactic/openarm; A fully open-source humanoid arm for physical AI research and deployment
    # TODO: OpenSSH Post-Quantum Cryptography; sntrup761x25519-sha512 and mlkem768x25519-sha256
    # TODO: ComposersDesktop/CDP8
    # TODO: rdkit/rdkit; a collection of cheminformatics and machine-learning software written in C++ and Python
    # TODO: sys-fs/dosfstools; FAT userspace utilities
    # TODO: sys-fs/exfatprogs; exFAT file system
    # TODO: sys-fs/diskdev_cmds; a port of HFS/HFS+ utilities from OpenDarwin
    # TODO: uutils/coreutils; Cross-platform Rust rewrite of the GNU coreutils
    # TODO: huggingface/huggingface_hub; official Python client for the Huggingface Hub
    # TODO: torchgeo/torchgeo; TorchGeo is a PyTorch domain library
    # TODO: n0-computer/iroh
    # TODO: PyO3/pyo3
    # TODO: tipragot/godot-iroh; peer-to-peer multiplayer extension for Godot based on Iroh
    # TODO: app-shells/fish
    # TODO: uzu/strudel
    # TODO: Celestia
    # TODO: triton-lang/triton; Triton language and compiler
    # TODO: Handheld Daemon; provides hardware enablement for Windows handhelds
    # TODO: x86-simd-sort; C++ template library for high performance SIMD based sorting algorithms
    # TODO: Sonic Pi; a new kind of musical instrument
    # TODO: NVIDIA Math Libraries for the Python Ecosystem
    # TODO: ternfs
    # TODO: ROS 2; Robot Operating System
    # TODO: t0mpr1c3/knotty; A domain-specific language for knitting patterns
  end
end

require 'quantumsand_live/format_drive'
require 'quantumsand_live/terminal_command'
require 'quantumsand_live/resource'
