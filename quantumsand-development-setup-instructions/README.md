# Quantum Sand Development Setup Instructions

These are the instructions for development setup of Quantum Sand on Linux, macOS or Windows.

Currently Linux is the only platform which supports Wayland and QtWayland. However, every separate component of Quantum Sand can run fine on macOS or Windows with no issues.

This means that development of each component can be done on all three of these platforms.

## macOS setup

* Install Homebrew. This will also download Command Line Tools for Xcode.
* Add Homebrew to your PATH using the commands which are mentioned as next steps.
* Install wget; `brew install wget`
* Install RabbitMQ; `brew install rabbitmq`
* To start rabbitmq now and restart at login: `brew services start rabbitmq`
* Install Valkey; `brew install valkey`
* To start valkey now and restart at login: `brew services start valkey`
* Install VLC media player (Apple Silicon); make sure it is the arm64 dmg.
* Install Blender 4.5 LTS (Apple Silicon); make sure it is the arm64 dmg.
* Install Wacom tablet macOS driver; if you have a Wacom tablet; double click the pkg within the dmg.
* Install Huion tablet macOS driver; if you have a Huion tablet.
* Install Krita.
* Install Mozilla Firefox.
* Install Google Chrome.
* Install Visual Studio Code (Apple Silicon); make sure it is the arm64 dmg.
* Configure the path with VS Code; Launch VS Code; Open the Command Palette (Cmd+Shift+P); Type 'shell command'; Run the Shell Command: Install 'code' command in PATH command.
* Generate a new SSH key; if you do not have one already; `ssh-keygen -t ed25519 -C "your_email@example.com"`
* Install scm_breeze.
* Configure your git identity; if you have not done so already; `git config --global --edit`
* Clone the Quantum Sand repo; `git clone https://github.com/quantumsand/quantumsand.git`
* Launch Visual Studio Code; `code quantumsand`
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
Qt6_DIR='/opt/brew' cmake .. -DCMAKE_PREFIX_PATH='/opt/brew'
make
./quantumsand
```

More to follow.

## Windows setup (x86_64)

More to follow.

## Windows setup (arm64)

More to follow.

## Linux setup (x86_64)

More to follow.

## Linux setup (arm64)

More to follow.
