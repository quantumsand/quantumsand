defmodule LiveDashboardWeb.PageController do
  use LiveDashboardWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end
end
