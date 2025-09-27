import React from 'react';

import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";
import './CardsButtons.css';

export default function MatchButtons() {
  return (
    <div className="cards__buttons">
      <IconButton className="cards__buttonsRepeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="cards__buttonsLeft">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="cards__buttonsStar">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="cards__buttonsRight">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="cards__buttonsLighning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  )
}
