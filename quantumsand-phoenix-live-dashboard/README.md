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
* Edit `config/config.exs` to update your endpoint configuration to include a signing salt:
```elixir
# Configure the endpoint
config :live_dashboard, LiveDashboardWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [html: LiveDashboardWeb.ErrorHTML, json: LiveDashboardWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: LiveDashboard.PubSub,
  live_view: [signing_salt: "SECRET_SALT"]
```
* Add the signing salt to `/lib/live_dashboard_web/endpoint.ex`:
```elixir
@session_options [
  store: :cookie,
  key: "_live_dashboard_key",
  signing_salt: "SECRET_SALT",
  same_site: "Lax"
]
```
* We will activate Erlang OS Monitoring to display stats within the Live Dashboard.
* Configure OS Data by adding `:os_mon` within `extra_applications` in your `mix.exs`;
```elixir
def application do
  [
    mod: {LiveDashboard.Application, []},
    extra_applications: [:logger, :runtime_tools, :os_mon]
  ]
end
```
* After editing certain configuration files, we have to restart Phoenix.
* If your Phoenix app is still running, stop it using `CTRL + c` twice.
* Run your Phoenix app again: `mix phx.server`
* Inside Google Chrome visit the endpoint url by typing this localhost address into the Chrome address bar:
* `http://localhost:4000/dev/dashboard`
* You should see `Phoenix LiveDashboard`

More to follow.
