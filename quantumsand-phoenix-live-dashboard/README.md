# Quantum Sand Phoenix Live Dashboard

## Steps to reproduce this Elixir Phoenix app

Step by step process to build this Elixir Phoenix app from scratch.

These steps are essentially a template to build any phoenix_live_dashboard app you can imagine.

* Create your Elixir Phoenix app; replace `quantumsand-phoenix-live-dashboard` with your app name.
* `mix phx.new quantumsand-phoenix-live-dashboard --app live_dashboard`
* You should see a lot of files being created.
* You should see; `Fetch and install dependencies? [Yn]`
* Type `y` and press return
* You should see; `We are almost there! The following steps are missing:`
* Let us now run those steps...
* `cd quantumsand-phoenix-live-dashboard`
* Additionally, we need to fix a missing user account within PostgreSQL; Provide your username into `createuser` to create the postgres username;
* `createuser -s postgres -U your-user-name`
* Configure your database in `config/dev.exs`
* Delete the password field to look like this:
```elixir
# Configure your database
config :live_dashboard, LiveDashboard.Repo,
  username: "postgres",
  hostname: "localhost",
  database: "live_dashboard_dev",
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10
```
* Create the storage for the given repository; `mix ecto.create`
* You should see:
```
Compiling 15 files (.ex)
Generated live_dashboard app
The database for LiveDashboard.Repo has been created
```
* Start your Phoenix app with; `mix phx.server`
* Inside Google Chrome visit the endpoint url by typing this localhost address into the Chrome address bar: 
* `http://localhost:4000`
* You should see a page with `Phoenix Framework`

More to follow.
