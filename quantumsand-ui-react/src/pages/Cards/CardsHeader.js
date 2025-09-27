import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import './CardsHeader.css';

export default function MatchHeader({logo}) {
  return (
    <div className="cards__header">
      <IconButton>
        <PersonIcon className="cards__headerIcon" fontSize="large" />
      </IconButton>
      <img className="cards__headerLogo" src={logo} alt="" />
      <IconButton>
        <ForumIcon className="cards__headerIcon" fontSize="large" />
      </IconButton>
    </div>
  )
}
