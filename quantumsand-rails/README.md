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


## Database tables reference

### Grain table

- git_repo_name `:string`
- qr_code `:string`
- title `:string`
- description `:text`
- original_locale `:string`
- original_narrative_text `:text`
- advertising_tiles `:json`
- advertising_geospatial `:geometry`
- advertising_business_page `:string`
- narrative_sync `:json`
- chronological_triggers `:json`
- grain_dependencies `:json`


### Translation table

- original_locale `:string`
- original_locale_text `:text`
- translation_locale `:string`
- translation_locale_text `:text`


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
