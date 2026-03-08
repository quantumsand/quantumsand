import * as React from 'react';
import { useEffect, useState } from 'react';
import Peaks from 'peaks.js';

import "./NarrativeSyncWaveform.css";

export default function NarrativeSyncWaveform({ videoUrl, srcJson }) {

  const [peaksInstance, setPeaksInstance] = useState([]);

  useEffect(() => Peaks.init({
    containers: {
      zoomview: document.getElementById('zoomview-container'),
      overview: document.getElementById('overview-container')
    },
    zoomview: {
      container: document.getElementById('zoomview-container')
    },
    overview: {
      container: document.getElementById('overview-container')
    },
    mediaElement: document.querySelector('video'),
    dataUri: {
      //arraybuffer: srcArrayBuffer,
      json: srcJson
    },
    keyboard: true,
    pointMarkerColor: '#006eb0',
    showPlayheadTime: true,
  }, function(err, peaks) {

    if (err) {
      console.error('Failed to initialize Peaks instance: ' + err.message);
      return;
    }

    console.log(peaks.player.getCurrentTime());
    setPeaksInstance(peaks);
  }), [srcJson]);

  const handleResize = e => {
    console.log("resized to: ", window.innerWidth, "x", window.innerHeight, "y");
  }

  useEffect(() => {
  }, window.addEventListener('resize', handleResize));

  const zoomIn = e => {
    e.preventDefault();
    console.log("zoom in");
    peaksInstance.zoom.zoomIn();
  }

  const zoomOut = e => {
    e.preventDefault();
    console.log("zoom out");
    peaksInstance.zoom.zoomOut();
  }

  return (
    <div className="narrative__syncWaveform">
      <p>Narrative waveform; narrative__syncWaveform</p>
      <div id="waveform-container">
        <div id="zoomview-container"></div>
        <div id="overview-container"></div>
        <video id="audio" controls="controls" className="narrative__syncWaveformVideo">
          <source src={videoUrl} type="video/webm" />
          Your browser does not support the audio element.
        </video>
      </div>
    </div>
  )
}
