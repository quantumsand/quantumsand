class GeospatialTracesController < ApplicationController
  before_action :set_geospatial_trace, only: %i[ show update destroy ]

  # GET /geospatial_traces
  def index
    @geospatial_traces = GeospatialTrace.all

    render json: @geospatial_traces
  end

  # GET /geospatial_traces/1
  def show
    render json: @geospatial_trace
  end

  # POST /geospatial_traces
  def create
    @geospatial_trace = GeospatialTrace.new(geospatial_trace_params)

    if @geospatial_trace.save
      render json: @geospatial_trace, status: :created, location: @geospatial_trace
    else
      render json: @geospatial_trace.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /geospatial_traces/1
  def update
    if @geospatial_trace.update(geospatial_trace_params)
      render json: @geospatial_trace
    else
      render json: @geospatial_trace.errors, status: :unprocessable_content
    end
  end

  # DELETE /geospatial_traces/1
  def destroy
    @geospatial_trace.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_geospatial_trace
      @geospatial_trace = GeospatialTrace.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def geospatial_trace_params
      params.expect(geospatial_trace: [ :name, :geospatial, :data ])
    end
end
