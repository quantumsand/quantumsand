import React, { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCallSharp";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import './AVHeader.css';

export default function AVHeader({ logo, username, avatar }) {
  const [inputSearch, setInputSearch] = useState('');

  function onInputSearch(searchTerm) {
    setInputSearch(searchTerm)
    console.log(searchTerm)
  };

  return (
    <div className="av__header">
      <div className="av__headerLeft">
        <MenuIcon />
        <img className="av__headerLogo" src={logo} alt="" />
      </div>

      <div className="av__headerInput">
        <input onChange={e => onInputSearch(e.target.value)}
          value={inputSearch} type="text" placeholder="Search" />
        <SearchIcon className="av__headerInputButton" />
      </div>

      <div className="av__headerIcons">
        <VideoCallIcon className="av__headerIcon" />
        <AppsIcon className="av__headerIcon" />
        <NotificationsIcon className="av__headerIcon" />
        <Avatar alt={username} src={avatar} />
      </div>
    </div>
  )
}
