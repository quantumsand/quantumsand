import React from 'react';
import ChirpSidebarOption from "./ChirpSidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import ChirpWidgets from "./ChirpWidgets";
import './ChirpSidebar.css';

export default function ChirpSidebar({ logo }) {
  return (
    <div className="chirp__sidebar">
      <img className="chirp__sidebarChirpIcon" src={logo} alt="" />
      <ChirpWidgets />
      <ChirpSidebarOption active Icon={HomeIcon} text="Home" />
      <ChirpSidebarOption Icon={SearchIcon} text="Explore" />
      <ChirpSidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <ChirpSidebarOption Icon={MailOutlineIcon} text="Messages" />
      <ChirpSidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <ChirpSidebarOption Icon={ListAltIcon} text="Lists" />
      <ChirpSidebarOption Icon={PermIdentityIcon} text="Profile" />
      <ChirpSidebarOption Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="chirp__sidebarChirp" fullWidth>
        Chirp
      </Button>
    </div>
  )
}
