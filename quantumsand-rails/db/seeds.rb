# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

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
