class CreateGeospatialTraces < ActiveRecord::Migration[8.1]
  def change
    create_table :geospatial_traces do |t|
      t.string :name
      t.geometry :geospatial, limit: {srid: 4326, type: "geometry"}
      t.json :data

      t.timestamps
    end
  end
end
