# Quantum Sand Development Setup Instructions

These are the instructions for development setup of Quantum Sand on Linux, macOS or Windows.

Currently Linux is the only platform which supports Wayland and QtWayland. However, every separate component of Quantum Sand can run fine on macOS or Windows with no issues.

This means that development of each component can be done on all three of these platforms.

## macOS setup

* Install Homebrew. This will also download Command Line Tools for Xcode.
* Add Homebrew to your PATH using the commands which are mentioned as next steps.
* Install wget using `brew install wget`
* Install VLC media player (Apple Silicon); make sure it is the arm64 dmg.
* Install Blender 4.5 LTS (Apple Silicon); make sure it is the arm64 dmg.
* Install Wacom tablet macOS driver; if you have a Wacom tablet; double click the pkg within the dmg.
* Install Krita.
* Install Mozilla Firefox.
* Install Google Chrome.
* Install Visual Studio Code (Apple Silicon); make sure it is the arm64 dmg.
* Configure the path with VS Code; Launch VS Code; Open the Command Palette (Cmd+Shift+P); Type 'shell command'; Run the Shell Command: Install 'code' command in PATH command.
* Generate a new SSH key; if you do not have one already; `ssh-keygen -t ed25519 -C "your_email@example.com"`
* Install scm_breeze.

More to follow.

## Windows setup

More to follow.

## Linux setup

More to follow.
