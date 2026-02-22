import * as React from 'react';

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import { IconButton } from '@mui/material';

import "./NarrativeSyncButtons.css";

export default function NarrativeSyncButtons({ }) {

  return (
    <div className="narrative__syncButtons">
      <p>Narrative buttons; narrative__syncButtons</p>
        <IconButton /* onClick={zoomOut.bind(this)} */ >
          <ZoomOutIcon />
        </IconButton>
        <IconButton /* onClick={zoomIn.bind(this)} */ >
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
  )
}
