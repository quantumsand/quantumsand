import React from 'react';
import { IconButton } from "@mui/material";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import "./AVFilters.css";

export default function AVFilters() {
  return (
    <div className="av__filters">
      <div className="av__filtersButtons">
        <IconButton>
          <TuneOutlinedIcon />
        </IconButton>
        <IconButton>
          <SlideshowIcon/>
        </IconButton>
        <IconButton>
          <VideogameAssetIcon />
        </IconButton>
        <IconButton>
          <ThreeDRotationIcon />
        </IconButton>
        <IconButton>
          <MovieCreationIcon />
        </IconButton>
        <IconButton>
          <FeedbackIcon />
        </IconButton>
        <IconButton>
          <SelectAllIcon />
        </IconButton>
      </div>
    </div>
  )
}
