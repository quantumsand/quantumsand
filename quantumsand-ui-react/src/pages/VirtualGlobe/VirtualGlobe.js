import * as React from 'react';
import {useEffect, useState} from 'react';
import { CesiumWidget } from "@cesium/engine";
import { Cartesian3, buildModuleUrl, OpenStreetMapImageryProvider, ProviderViewModel, BaseLayerPicker } from "cesium";
import "@cesium/engine/Source/Widget/CesiumWidget.css";

import "./VirtualGlobe.css";

/* 

http-server quantumsand-ui-react/node_modules/cesium/Build/ --cors

*/

export default function VirtualGlobe({ lat, long, zoom}) {

  window.CESIUM_BASE_URL = 'http://127.0.0.1:8080/Cesium/';

  const chronomap = [
    {name: "San Diego", long: -117.16, lat:32.71, height: 10000000.0},
    {name: "Barton on Sea", long: -1.663284, lat:50.736593, height: 10000000.0},
    {name: "Barton on Sea zoom", long: -1.663284, lat: 50.736593, height: 100000.0},
    {name: "Makkah", long: 39.8579, lat: 21.3891, height: 10000000.0},
    {name: "Makkah zoom", long: 39.8579, lat: 21.3891, height: 100000.0}
  ];

  const [stepper, setStepper] = useState(0);
  const [widgetInstance, setWidgetInstance] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {

      if (stepper < chronomap.length - 1) {
        setStepper(stepper + 1);
      } else {
        setStepper(0);
      }

      console.log("chronomap[stepper]: " + JSON.stringify(chronomap[stepper]));

      widgetInstance.camera.flyTo({
        destination: Cartesian3.fromDegrees(chronomap[stepper].long,
          chronomap[stepper].lat, 
          chronomap[stepper].height)})
    }, 4000);

    return () => clearInterval(intervalId); //This is important
  })


  useEffect(() => {

    const imageryViewModels = [];
    imageryViewModels.push(new ProviderViewModel({
        name: "Open\u00adStreet\u00adMap",
        iconUrl: buildModuleUrl("Widgets/Images/ImageryProviders/openStreetMap.png"),
        tooltip: "OpenStreetMap (OSM) is a collaborative project to create a free editable \
    map of the world.\nhttp://www.openstreetmap.org",
        creationFunction: function() {
            return new OpenStreetMapImageryProvider({
                url: "https://tile.openstreetmap.org/"
            });
        }
    }))

    const cesiumWidget = new CesiumWidget("cesiumContainer", { baseLayer: false });

    setWidgetInstance(cesiumWidget);

    cesiumWidget.camera.flyTo({
      destination: Cartesian3.fromDegrees(-117.16, 32.71, 10000000.0),
    });

    //Create the baseLayerPicker widget using our view models.
    const layers = cesiumWidget.imageryLayers;
    const baseLayerPicker = new BaseLayerPicker("baseLayerPickerContainer", {
        globe: cesiumWidget.scene.globe,
        imageryProviderViewModels: imageryViewModels
    });
  }, [])

  return (
    <div className="virtualglobe">
      <div id="cesiumContainer"></div>
      <div id="baseLayerPickerContainer" style={{position: "absolute", 
      top:"24px", right:"24px", width:"38px", height:"38px"}}></div>
    </div>
  )

}
