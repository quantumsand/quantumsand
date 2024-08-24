import React from 'react';
import AVSidebarRow from './AVSidebarRow';
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import './AVSidebar.css';

export default function AVSidebar() {
  return(
    <div className="av__sidebar">
      <AVSidebarRow selected Icon={HomeIcon} title="Home" />
      <AVSidebarRow Icon={WhatshotIcon} title="Trending" />
      <AVSidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <AVSidebarRow Icon={VideoLibraryIcon} title="Library" />
      <AVSidebarRow Icon={HistoryIcon} title="History" />
      <AVSidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      <AVSidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <AVSidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
      <AVSidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
    </div>
  )
}
