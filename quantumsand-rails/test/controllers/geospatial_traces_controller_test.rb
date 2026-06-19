require "test_helper"

class GeospatialTracesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @geospatial_trace = geospatial_traces(:one)
  end

  test "should get index" do
    get geospatial_traces_url, as: :json
    assert_response :success
  end

  test "should create geospatial_trace" do
    assert_difference("GeospatialTrace.count") do
      post geospatial_traces_url, params: { geospatial_trace: { data: @geospatial_trace.data, geospatial: @geospatial_trace.geospatial, name: @geospatial_trace.name } }, as: :json
    end

    assert_response :created
  end

  test "should show geospatial_trace" do
    get geospatial_trace_url(@geospatial_trace), as: :json
    assert_response :success
  end

  test "should update geospatial_trace" do
    patch geospatial_trace_url(@geospatial_trace), params: { geospatial_trace: { data: @geospatial_trace.data, geospatial: @geospatial_trace.geospatial, name: @geospatial_trace.name } }, as: :json
    assert_response :success
  end

  test "should destroy geospatial_trace" do
    assert_difference("GeospatialTrace.count", -1) do
      delete geospatial_trace_url(@geospatial_trace), as: :json
    end

    assert_response :no_content
  end
end
