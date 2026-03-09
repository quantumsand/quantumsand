# Quantum Sand Videogame Rust Crates

The Rust/bevy videogames need to share certain functionality.

Instead of duplicating the same Rust code within each game, it is being coded once as reusable crates.

This will include:

* HTTP JSON API (Ruby-on-Rails PostGIS API); persistent game state stored in PostgreSQL.
* MQTT (RabbitMQ); wiring up all components so they can communicate with each other.
* Valkey (forked from Redis); very fast temporary storage database/cache.
* Bevy LDtk game (bevy_ecs_ldtk); with some reused customisation.
