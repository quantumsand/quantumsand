defmodule LiveDashboard.Repo do
  use Ecto.Repo,
    otp_app: :live_dashboard,
    adapter: Ecto.Adapters.Postgres
end
