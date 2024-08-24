import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./MailHeader.css";

export default function MailHeader({ logo, avatar }) {
  return (
    <div className="mail__header">
      <div className="mail__headerLeft">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="" />
      </div>

      <div className="mail__headerMiddle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="mail__headerInputCaret" />
      </div>

      <div className="mail__headerRight">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar src={avatar} />
      </div>
    </div>
  )
}
