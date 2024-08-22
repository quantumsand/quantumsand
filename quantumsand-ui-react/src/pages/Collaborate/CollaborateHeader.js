import React from 'react';
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "./CollaborateHeader.css";

export default function CollaborateHeader({ avatar, workspace }) {
  return (
    <div className="collaborate__header">
      <div className="collaborate__headerLeft">
        <Avatar
          className="collaborate__headerAvatar"
          alt=""
          src={avatar}
        />
        <AccessTimeIcon />
      </div>

      <div className="collaborate__headerSearch">
        <SearchIcon />

        <input placeholder={`Search ${workspace}`} />
      </div>

      <div className="collaborate__headerRight">
        <HelpOutlineIcon />
      </div>
    </div>
  )
}
