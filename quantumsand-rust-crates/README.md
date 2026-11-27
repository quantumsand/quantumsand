# Quantum Sand Rust Crates

The Rust/bevy videogames, simulations and apps need to share certain functionality.

Instead of duplicating the same Rust code within each component, it is being coded once as reusable crates.

These Rust crates are dual-licensed under the MIT License and Apache License 2.0.

This will include:

* HTTP JSON API (Ruby-on-Rails PostGIS API); persistent game state stored in PostgreSQL.
* MQTT (RabbitMQ); wiring up all components so they can communicate with each other.
* Valkey (forked from Redis); very fast temporary storage database/cache.
* Bevy level editor; a built-in game level editor; edit the game levels inside the game itself; use custom React UI components; to modify and script game assets; with Quantum Sand Rails as the backend; game levels are stored as JSON within PostgreSQL.
* Bevy LDtk game (bevy_ecs_ldtk); with some reused customisation.
* Bevy CEF animated book (bevy_cef/cef-rs); render web pages into a 3d animated book using Bevy and CEF.
* Bevy CEF animated newspaper (bevy_cef/cef-rs); render web pages into a 3d animated newspaper using Bevy and CEF.
* Bevy CEF animated compendium (bevy_cef/cef-rs); render web pages into a 3d oraculum calendrical compendium using Bevy and CEF.
* Bevy CEF animated adverts (bevy_cef/cef-rs); render the React component for Adverts within the game.
* PyO3; running and interacting with Python code from Rust.
