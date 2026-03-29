import * as React from 'react';

import { useEffect, useState } from 'react';
import Peaks from 'peaks.js';

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import { IconButton } from '@mui/material';

import "./NarrativeSync.css";

export default function NarrativeSync({ videoUrl = "/video/sample-narrative-dynamic.webm",
                                        srcJson = "/video/sample-narrative-dynamic.json", markdown }) {

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
    <div className="narrative__sync">
      <p>TODO: NarrativeSync components:</p>
      <p>Waveform; narrative__syncWaveform</p>
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
      <p>Narrative video; narrative__syncVideo / Narrative text; narrative__syncText</p>
      <p>Narrative spreadsheet; narrative__syncSpreadsheet / Narrative buttons; narrative__syncButtons</p>
      <div className="narrative__syncButtons">
        <p>Narrative buttons; narrative__syncButtons</p>
          <IconButton onClick={zoomOut.bind(this)}>
            <ZoomOutIcon />
          </IconButton>
          <IconButton onClick={zoomIn.bind(this)}>
            <ZoomInIcon />
          </IconButton>
          <IconButton /* onClick={addSegment.bind(this)} */ >
            <TimelapseIcon />
          </IconButton>
          <IconButton /* onClick={addPoint.bind(this)} */>
            <ControlPointIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <DeleteForeverIcon />
          </IconButton>
      </div>
    </div>
  )
}
