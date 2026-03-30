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
import { Workbook } from '@fortune-sheet/react'
import "@fortune-sheet/react/dist/index.css"

import "./NarrativeSync.css";
import cell from "../Grains/cell";

export default function NarrativeSync({ videoUrl = "/video/sample-narrative-dynamic.webm",
                                        srcJson = "/video/sample-narrative-dynamic.json", markdown }) {

 const [peaksInstance, setPeaksInstance] = useState([]);
 const [spreadsheetData, setSpreadsheetData] = useState([cell]);

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
    if (peaksInstance && peaksInstance.views) {
      try {
        peaksInstance.views.getView('zoomview')?.fitToContainer();
        peaksInstance.views.getView('overview')?.fitToContainer();
      } catch (error) {
        console.warn('fitToContainer not available:', error);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [peaksInstance]);

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

  const addSegment = e => {
    console.log("Add segment");
    //setSegmentCounter(segmentCounter + 1);

    peaksInstance.segments.add({
      startTime: peaksInstance.player.getCurrentTime(),
      endTime: peaksInstance.player.getCurrentTime() + 2,
      labelText: "#", //+ segmentCounter + "; ", //+ textSelection,
      editable: true
    });

    //updateSnippets();
    //console.log("total number of segments: " + (segmentCounter + 1));
    console.log(peaksInstance.segments);
  }

 const addPoint = e => {
    console.log("Add point");
    //setPointCounter(pointCounter + 1);

    peaksInstance.points.add({
      time: peaksInstance.player.getCurrentTime(),
      labelText: 'Test point ', //+ pointCounter,
      editable: true
    });

    //console.log("total number of points: " + (pointCounter + 1));
    console.log(peaksInstance.points);
  }

  return (
    <div className="narrative__sync">
      <div className="narrative__syncButtons">
        <IconButton onClick={zoomOut.bind(this)}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={zoomIn.bind(this)}>
          <ZoomInIcon />
        </IconButton>
        <IconButton onClick={addSegment.bind(this)}>
          <TimelapseIcon />
        </IconButton>
        <IconButton onClick={addPoint.bind(this)}>
          <ControlPointIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <DeleteForeverIcon />
        </IconButton>
      </div>
      <div className="narrative__syncWaveform">
        <div id="waveform-container">
          <div id="zoomview-container"></div>
          <div id="overview-container"></div>
          <video id="audio" controls="controls" className="narrative__syncWaveformVideo">
            <source src={videoUrl} type="video/webm" />
            Your browser does not support the video element.
          </video>
        </div>
      </div>
      <p>Narrative text; narrative__syncText</p>
      <div className="narrative__syncSpreadsheet">
        <Workbook data={spreadsheetData} onOp={console.log} />
      </div>
    </div>
  )
}
