import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import "./AudioPlayerBodyHeader.css";

export default function AudioPlayerBodyHeader({ name, avatar }) {
  return (
    <div className="audio__playerBodyHeader">
      <div className="audio__playerBodyHeaderLeft">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs or Podcasts"
          type="text"
        />
      </div>
      <div className="audio__playerBodyHeaderRight">
        <Avatar src={avatar} alt="" />
        <h4>{name}</h4>
      </div>
    </div>
  )
}

