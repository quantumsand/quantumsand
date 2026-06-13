# Quantum Sand Development Setup Instructions

These are the instructions for development setup of Quantum Sand on Linux, macOS or Windows.

Currently Linux is the only platform which supports Wayland and QtWayland. However, every separate component of Quantum Sand can run fine on macOS or Windows with no issues.

This means that development of each component can be done on all three of these platforms.

## macOS setup

* Install Homebrew. This will also download Command Line Tools for Xcode.
* Add Homebrew to your PATH using the commands which are mentioned as next steps.
* Install wget; `brew install wget`
* Install htop; `brew install htop`
* Install FFmpeg; `brew install ffmpeg`
* Install audiowaveform;  `brew install audiowaveform`
* Install RabbitMQ; `brew install rabbitmq`
* To start rabbitmq now and restart at login: `brew services start rabbitmq`
* Install Valkey; `brew install valkey`
* To start valkey now and restart at login: `brew services start valkey`
* Install ejabberd; `brew install ejabberd`
* To start ejabberd now and restart at login: `brew services start ejabberd`
* Install VLC media player (Apple Silicon); make sure it is the arm64 dmg.
* Install Blender 4.5 LTS (Apple Silicon); make sure it is the arm64 dmg.
* Install Wacom tablet macOS driver; if you have a Wacom tablet; double click the pkg within the dmg.
* Install Huion tablet macOS driver; if you have a Huion tablet.
* Install Krita.
* Install Mozilla Firefox.
* Install Google Chrome.
* Install OBS Studio; for macOS (Apple Silicon); make sure it is the arm64 dmg.
* Open OBS Studio; You will be prompted to provide OBS Studio with the permissions that you want to allow.
* This can actually take a few minutes and you might need to authorise permissions using a password.
* Choose the option; “Optimise just for recording, I will not be streaming”
* Accept and apply the default settings.
* For now you can close OBS Studio.
* Install LDtk; for macOS (experimental).
* Open System Settings; Go into Privacy & Security; You should see: “LDtk” was blocked to protect your Mac.
* Click Open Anyway; Twice. LDtk should have loaded. From now on, it should load fine without any issues.
* Install LibreOffice; for macOS (Apple Silicon); make sure it is the arm64 (aarch64) dmg.
* Install Audacity; for macOS (Apple Silicon); make sure it is the arm64 dmg.
* Install Audacious; `brew install audacious`
* Install Kanri; `brew install kanriapp/cask/kanri`
* When you try to open Kanri you might see this message:
```
“kanri” is damaged and can’t be opened. You should move it to the Bin.
```
* Run this command; `xattr -cr /Applications/kanri.app`
* Kanri should run fine now with no problems.
* Install Visual Studio Code (Apple Silicon); make sure it is the arm64 dmg.
* Configure the path with VS Code; Launch VS Code; Open the Command Palette (Cmd+Shift+P); Type 'shell command'; Run the Shell Command: Install 'code' command in PATH command.
* Generate a new SSH key; if you do not have one already; `ssh-keygen -t ed25519 -C "your_email@example.com"`
* Install scm_breeze.
* Configure your git identity; if you have not done so already; `git config --global --edit`
* Clone the Quantum Sand repo; `git clone https://github.com/quantumsand/quantumsand.git`
* Launch Visual Studio Code; `code quantumsand`
* Install uv; `curl -LsSf https://astral.sh/uv/install.sh | sh`
* You should see the following message:
```
downloading uv 0.11.3 aarch64-apple-darwin
installing to /Users/your-user-name/.local/bin
  uv
  uvx
everything's installed!

To add $HOME/.local/bin to your PATH, either restart your shell or run:

    source $HOME/.local/bin/env (sh, bash, zsh)
    source $HOME/.local/bin/env.fish (fish)
```
* Close and reopen your terminal to start using uv.
* Test your uv installation: `uv`
* You should see the following message:
```
An extremely fast Python package manager.

Usage: uv [OPTIONS] <COMMAND>
```
* Install Python; `uv python install 3.14.3`
* You should see the following message:
```
Installed Python 3.14.3 in 2.53s
 + cpython-3.14.3-macos-aarch64-none (python3.14)
 ```
* Test your uv python installation;
* `uvx python --version`
* You should see the following message: `Python 3.14.3`
* Download Rustup and install Rust; `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
* Rust installer; Proceed with standard installation (default - just press enter)
* Install ninja; `brew install ninja`
* Install bevy_cef; Launch the Terminal app; In a separate directory; Outside of quantumsand;
  * Clone bevy_cef; `git clone https://github.com/not-elm/bevy_cef.git`
  * Launch another Visual Studio Code; `code bevy_cef`
  * `cargo install export-cef-dir@145.6.1+145.0.28`
  * `export-cef-dir --force $HOME/.local/share`
  * `cargo install bevy_cef_debug_render_process`
  * `cp $HOME/.cargo/bin/bevy_cef_debug_render_process "$HOME/.local/share/Chromium Embedded Framework.framework/Libraries/bevy_cef_debug_render_process"`
* Test bevy_cef by running one of the examples:
* `cargo run --example simple --features debug`
* Go back to your Visual Studio Code with quantumsand;
* Try running Doggo;
  * `cd quantumsand-videogame-doggo`
  * `cargo run quantumsand-videogame-doggo`
* Install PostGIS and PostgreSQL; `brew install postgis postgresql@18`
* To start postgresql@18 now and restart at login: `brew services start postgresql@18`
* Install osm2pgsql; `brew install osm2pgsql`
* Test your osm2pgsql installation; `osm2pgsql --version`
* You should see the following message:
```
osm2pgsql version 2.2.0
Build: Release
Compiled using the following library versions:
Libosmium 2.23.0
Proj 9.8.0
nlohmann JSON 3.12.0
Lua 5.1.4 (LuaJIT 2.1.1771261233)
```
* Install martin; `brew install martin`
* Test the martin installation;
* `martin --version`
* You should see the following message:
```
martin 1.5.0
```
* Install mapnik; `brew install mapnik`
* Install httpd; `brew install httpd`
* Test the httpd installation;
* `/opt/homebrew/opt/httpd/bin/httpd -v`
* You should see the following message:
```
Server version: Apache/2.4.66 (Unix)
Server built:   Dec  1 2025 12:44:02
```
* Edit `httpd.conf`; `code /opt/homebrew/etc/httpd/httpd.conf`
* Modify the following line: `Listen 8080`
* To only serve locally; `Listen 127.0.0.1:8081`
* To start httpd now and restart at login: `brew services start httpd`
* Inside Google Chrome visit the `httpd` endpoint url by typing this localhost address into the Chrome address bar:
* `http://localhost:8081`
* You should see a page with `It works!`
* Install mod_tile; Launch the Terminal app; In a separate directory; Outside of quantumsand;
* Install dependencies; `brew install curl iniparser libmemcached pkg-config`
* Clone mod_tile; `git clone https://github.com/openstreetmap/mod_tile.git`
* `code mod_tile`
* We need to modify a few files within mod_tile.
* Thanks to Grok Code Fast 1 within VS Code for providing these mod_tile diffs;
* Within; `cmake/FindLIBMAPNIK.cmake`
``` diff
-if((NOT LIBMAPNIK_INCLUDE_DIRS) AND (LIBMAPNIK_INCLUDE_DIR))
-  set(LIBMAPNIK_INCLUDE_DIRS ${LIBMAPNIK_INCLUDE_DIR})
-elseif(LIBMAPNIK_INCLUDE_DIRS AND LIBMAPNIK_INCLUDE_DIR)
-  list(APPEND LIBMAPNIK_INCLUDE_DIRS ${LIBMAPNIK_INCLUDE_DIR})
+if(LIBMAPNIK_INCLUDE_DIR)
+  get_filename_component(LIBMAPNIK_INCLUDE_DIRS ${LIBMAPNIK_INCLUDE_DIR} DIRECTORY)
```
* Within; `src/CMakeLists.txt`
```diff
 set(mod_tile_LIBS
   ${APR_LIBRARIES}
+  ${HTTPD_LIBRARIES}
   ${COMMON_LIBRARIES}
   ${INIPARSER_LIBRARIES}
   ${STORE_LIBRARIES}
 )
-add_library(mod_tile SHARED ${mod_tile_SRCS})
+add_library(mod_tile MODULE ${mod_tile_SRCS})
 target_link_libraries(mod_tile ${mod_tile_LIBS})
+target_link_options(mod_tile PRIVATE -Wl,-undefined,dynamic_lookup)
 set_target_properties(mod_tile PROPERTIES PREFIX "" SUFFIX ".so")
```
* Within; `src/store_ro_composite.c`
```diff
 #ifdef WANT_STORE_COMPOSITE
-#include <cairo/cairo.h>
+#include <cairo.h>
 #endif
```
* Build mod_tile;
```bash
mkdir build
cd build
ICU_ROOT=$(brew --prefix icu4c) cmake .. -DCMAKE_PREFIX_PATH='/opt/homebrew' -DCMAKE_INSTALL_PREFIX:PATH='/opt/homebrew' -DCMAKE_LIBRARY_PATH='/opt/homebrew/lib'
make
```
* Install mod_tile; `cmake --install . --strip`
* You should see the following message:
```
-- Install configuration: ""
-- Installing: /opt/homebrew/var/cache/renderd/tiles
-- Installing: /opt/homebrew/var/run/renderd
-- Installing: /opt/homebrew/etc/httpd/extra/httpd-tile.conf
-- Installing: /opt/homebrew/etc/renderd.conf
-- Installing: /opt/homebrew/lib/httpd/modules/mod_tile.so
-- Installing: /opt/homebrew/bin/render_expired
-- Installing: /opt/homebrew/bin/render_list
-- Installing: /opt/homebrew/bin/render_old
-- Installing: /opt/homebrew/bin/render_speedtest
-- Installing: /opt/homebrew/bin/renderd
-- Installing: /opt/homebrew/share/man/man1/render_expired.1
-- Installing: /opt/homebrew/share/man/man1/render_list.1
-- Installing: /opt/homebrew/share/man/man1/render_old.1
-- Installing: /opt/homebrew/share/man/man1/render_speedtest.1
-- Installing: /opt/homebrew/share/man/man1/renderd.1
-- Installing: /opt/homebrew/share/man/man5/renderd.conf.5
```
* Install rqbit; bittorrent client in Rust; `brew install rqbit`
* You need approximately 86 GB of space to obtain the OpenStreetMap Planet data.
* In Google Chrome visit the OpenStreetMap Planet OSM; `https://planet.openstreetmap.org/`
* We will obtain the `Latest Weekly Planet PBF File` using the `(torrent)` url like so;
* Start the download; `rqbit download -o ~/Downloads https://planet.openstreetmap.org/pbf/planet-latest.osm.pbf.torrent`
* You should see messages like this:
```
2026-04-27T13:26:02.219024Z  INFO torrent{id=0}:initialize_and_start: librqbit::torrent_state::initializing: Initial check results: have 0, needed 86.1Gi, total selected 86.1Gi
2026-04-27T13:26:02.799624Z  INFO rqbit: [0]: 0.00% (0 / 86.11Gi), ↓0.00 MiB/s, ↑0.00 MiB/s (0), {live: 8, queued: 8, dead: 4, known: 20}
2026-04-27T13:26:03.803944Z  INFO rqbit: [0]: 0.01% (8.00Mi / 86.11Gi), ↓5.71 MiB/s, ↑0.00 MiB/s (0), ETA: 15447.965s, {live: 8, queued: 9, dead: 5, known: 22}
```
* This will take a considerable amount of time to download; recommendations; lock your screen; go and do something else.
* When the download reaches 100% you should see:
```
2026-04-27T14:29:33.140467Z  INFO torrent{id=0}:manage_peer{peer="99.100.137.113:6881"}:peer_connection: librqbit::torrent_state::live: torrent finished downloading
2026-04-27T14:29:33.624797Z  INFO rqbit: [0]: 100.00% (86.11Gi / 86.11Gi), ↓21.11 MiB/s, ↑0.00 MiB/s (0), ETA: 757ms, {live: 0, queued: 0, dead: 108, known: 118}
2026-04-27T14:29:34.626836Z  INFO rqbit: [0]: 100.00% (86.11Gi / 86.11Gi), ↓18.00 MiB/s, ↑0.00 MiB/s (0), {live: 0, queued: 0, dead: 108, known: 118}
```
* It is always nice to keep the BitTorrent seeding (sharing completed files with other users).
* Some people have capped data; or excess data charges; or have to share their internet connection; you can terminate `rqbit`.
* To terminate rqbit; `Control + C`.
* You can now check the cryptographic signature of the download: `md5sum ~/Downloads/planet-260420.osm.pbf`
* For this particular download the `md5` is mentioned on `https://planet.openstreetmap.org/`; `md5: a2938157c76ca9075fd6fe597abe3fae.`
* When our terminal command completes we see this:
```
a2938157c76ca9075fd6fe597abe3fae  /Users/your-user-name/Downloads/planet-260420.osm.pbf
```
* You can see the md5 cryptographic hash is the same.
* Install gnupg; `brew install gnupg`
* Fetch the public keys for RVM;
  * `command curl -sSL https://rvm.io/mpapis.asc | gpg --import -`
  * `command curl -sSL https://rvm.io/pkuczynski.asc | gpg --import -`
* Install Ruby enVironment Manager (RVM); `curl -sSL https://get.rvm.io | bash -s stable`
* After installation, restart your Terminal or run; `source ~/.rvm/scripts/rvm`
* Install dependencies for Ruby; `brew install autoconf automake pkg-config coreutils libyaml zlib openssl`
* Update RVM to the latest development version directly from the master branch `rvm get master`
* Install Ruby 4.0.2; `rvm install ruby-4.0.2`
* Test the Ruby installation;
  * `ruby -v`
  * You should see; `ruby 4.0.2 (2026-03-17 revision d3da9fec82) +PRISM [arm64-darwin25]`
* If you see the following message when you load your terminal...
```bash
SCM Breeze must be loaded after RVM, otherwise there will be a conflict when RVM wraps the 'cd' command.
Please move the line that loads SCM Breeze to the bottom of your ~/.bashrc
```
* Edit your ~/.zshrc using `code ~/.zshrc` to look like this:
```bash
# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"

autoload -Uz compinit
compinit
[ -s "$HOME/.scm_breeze/scm_breeze.sh" ] && source "$HOME/.scm_breeze/scm_breeze.sh"
```
* Reload your terminal and the message should have disappeared.
* Install Ruby on Rails; `gem install rails -v 8.1.3`
* Test the Ruby on Rails installation;
  * `rails -v`
  * You should see; `Rails 8.1.3`
* Install missing fonts;
* `brew install font-noto-sans-arabic font-noto-sans-jp font-noto-sans font-scheherazade`
* Install Node Version Manager nvm; `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash`
* Close and reopen your terminal to start using nvm.
* Install Node.js; `nvm install 25.8.1`
* You should see the following message:
```bash
Now using node v25.8.1 (npm v11.11.0)
Creating default alias: default -> 25.8.1 (-> v25.8.1 *)
```
* Install http-server; `npm install --global http-server`
* Test your Node.js installation by running quantumsand-ui-react;
  * `cd quantumsand-ui-react`
  * `npm i --legacy-peer-deps`
  * NOTE; there are known vulnerabilities in the dependency tree; at the moment do not worry about this.
  * `npm start`
  * If you see a popup with: “Visual Studio Code” wants access to control “Google Chrome”. Click Allow.
  * Inside Google Chrome visit one of the UI endpoint urls by typing this localhost address into the Chrome address bar: 
  * `http://localhost:3001/narrativesync`
  * You should see the React component for NarrativeSync.
* Install Elixir; `brew install elixir`
* Test the Elixir installation;
* `elixir -v`
* You should see the following message:
```bash
Erlang/OTP 28 [erts-16.3] [source] [64-bit] [smp:18:18] [ds:18:18:10] [async-threads:1] [jit] [dtrace]

Elixir 1.19.5 (compiled with Erlang/OTP 28)
```
* Install the Phoenix application generator; `mix archive.install hex phx_new`
* You should see: `Are you sure you want to install "phx_new-1.8.5.ez"? [Yn]`
* Type `y` and press return
* You should see the following message:
```bash
* creating /Users/your-user-name/.mix/archives/phx_new-1.8.5
```
* Install Qt; `brew install qt`
* Install CMake; `brew install cmake`
* Test your Qt installation by running quantumsand-qt;
```bash
cd quantumsand-qt
mkdir build
cd build
cmake ..
make
./quantumsand
```

More to follow.

## Windows setup (x86_64)

* Install Windows Subsystem for Linux (WSL);
* Open PowerShell in administrator mode by right-clicking and selecting "Run as administrator".
* Run the command; `wsl --install --no-distribution`
* Then restart your machine.

More to follow.

## Windows setup (arm64)

* Install Windows Subsystem for Linux (WSL);
* Open PowerShell in administrator mode by right-clicking and selecting "Run as administrator".
* Run the command; `wsl --install --no-distribution`
* Then restart your machine.

More to follow.

## Linux setup (x86_64)

More to follow.

## Linux setup (arm64)

More to follow.
