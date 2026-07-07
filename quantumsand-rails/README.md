# Quantum Sand Rails

HTTP JSON API (Ruby-on-Rails PostGIS API).

Data types understood by PostGIS and exposed by activerecord-postgis-adapter:

- `:geometry` -- Any geometric type; stores any type of geometry (point, line, polygon)
- `:st_point` -- Point data; stored as longitude/latitude coordinates
- `:line_string` -- LineString data; a straight line between two longitude/latitude coordinates
- `:st_polygon` -- Polygon data; a collection of line strings, connected to form a shape
- `:geometry_collection` -- Any collection type; a collection of geometric features
- `:multi_point` -- A collection of Points; A collection of `:st_point` features
- `:multi_line_string` -- A collection of LineStrings; A collection of `:line_string` features
- `:multi_polygon` -- A collection of Polygons; A collection of `:st_polygon` features



Thanks to: https://github.com/rgeo/activerecord-postgis-adapter

And: https://www.simplethread.com/geospatial-applications-using-rails/


## Steps to reproduce this Rails app

Step by step process to build this Rails app from scratch.

These steps are essentially a template to build any geospatial app you can imagine.

* Create your Rails app; replace `quantumsand-rails` with your app name.
* `rails new quantumsand-rails --api --database=postgresql`
* Add the activerecord-postgis-adapter to your Gemfile.
```ruby
gem 'activerecord-postgis-adapter', '~> 11.1', '>= 11.1.1'`
```
* Run `bundle install`
* Switch to using the postgis adapter within `config/database.yml`:
```yml
default: &default
  adapter: postgis
  encoding: unicode
```
* Create the database; `rake db:create`
* You should see:
```bash
Created database 'quantumsand_rails_development'
Created database 'quantumsand_rails_test'
```
* To add the PostGIS extension to your database, we need to create a migration:
```bash
rails generate migration AddPostgisExtensionToDatabase
```
* Modify the migration in `db/migrate` to look like this:
```ruby
class AddPostgisExtensionToDatabase < ActiveRecord::Migration[8.1]
  def change
    enable_extension 'postgis'
  end
end
```
* Run the migration:
```bash
rails db:migrate
```

### Create the Geospatial Traces table

* Create the `geospatial_traces` table;
* `bin/rails generate scaffold geospatial_traces name:string geospatial:geometry data:json`

* Modify the database migration;
* SRID 4326 is the most widely used spatial reference identifier for the WGS 84 (World Geodetic System 1984) standard. We need to modify `db/migrate/XXX_create_geospatial_traces.rb` like so;
```diff
-    t.geometry :geospatial
+    t.geometry :geospatial, limit: {srid: 4326, type: "geometry"}
```

* Migrate the database;
* `bin/rails db:migrate`

* You should see;
```
== 20260619122553 CreateGeospatialTraces: migrating ===========================
-- create_table(:geospatial_traces)
   -> 0.0549s
== 20260619122553 CreateGeospatialTraces: migrated (0.0549s) ==================
```

* Add some seeds for the `geospatial_traces` table; add the following to `seeds.rb`;

```ruby
geospatial_traces = [
  {
    name: "Harbour seals in Christchurch Bay",
    geospatial: "POINT(50.713294760937224 -1.6601009519012668)",
    data: {
      name: "Harbour seal",
      scientific_name: "Phoca vitulina"
    }
  }
]

geospatial_traces.each do |geospatial_trace|
  GeospatialTrace.where(name: geospatial_trace[:name]).first_or_create do |trace|
    trace.name = geospatial_trace[:name]
    trace.geospatial = geospatial_trace[:geospatial]
    trace.data = geospatial_trace[:data]

    puts "Created geospatial_trace with name: #{geospatial_trace[:name]}"
  end
end
```

* Seed the database;
* `bin/rails db:seed`
* You should see;
```
Created geospatial_trace with name: Harbour seals in Christchurch Bay
```

* Run the rails server locally;
* `bin/rails s`

* In Chrome visit this localhost url `http://127.0.0.1:3000/geospatial_traces`.

You should see the `geospatial_traces` that we have seeded into the PostGIS database in JSON format.
Selecting `Pretty print` within Chrome makes it easier to read.

More to follow.


## Database tables reference

### Grains table

- git_repo_name `:string`
- git_hash_hex `:binary`
- qr_code `:string`
- title `:string`
- description `:text`
- original_locale `:string`
- original_narrative_text `:text`
- video_narrative_hash_hex `:binary`
- translation_audio `:json`
- advertising_tiles `:json`
- advertising_geospatial `:geometry`
- advertising_business_page `:string`
- narrative_sync `:json`
- chronological_triggers `:json`
- grain_thumbnail `:string`
- grain_dependencies `:json`


### Translations table

- original_locale `:string`
- original_locale_text `:text`
- translation_locale `:string`
- translation_locale_text `:text`


### Games table

- game_name `:string`
- game_metadata `:json`
- game_levels `:json`
- game_characters `:json`
- game_narrative `:json`
- game_traits `:json`
- game_inventory `:json`
- game_shop `:json`
- game_ui `:json`


### Game Slots table

- game_id `:bigint`
- game_slot `:string`
- game_player `:json`
- game_progress `:json`


### Resources table

- git_repo_name `:string`
- qr_code `:string`
- resource_type `:string`
- resource_path `:string`
- resource_data `:json`
- resource_thumbnail `:string`


### Geospatial Traces table

- name `:string`
- geospatial `:geometry`
- data `:json`


### Surveys table

- name `:string`
- uuid `:string`
- description `:text`
- settings `:json`


### Questions table

- survey_id `:bigint`
- original_locale `:string`
- original_question `:json`
- weight `:float`


### Answers table

- response_id `:bigint`
- raw `:json`


### Responses table

- survey_id `:bigint`
- uuid `:string`
- score `:float`


## TODO:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
