import React from 'react';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import CollaborateSidebarOption from './CollaborateSidebarOption';
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AppsIcon from "@mui/icons-material/Apps";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import "./CollaborateSidebar.css";
import { Avatar, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function CollaborateSidebar({ channels, username, workspace }) {

  const StyledBadge = styled(Badge)(({ theme, visible = false }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: `${visible ? '#44b700' : 'black'}`,
      color: `${visible ? '#44b700' : 'black'}`,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""'
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <div className="collaborate__sidebar">
      <div className="collaborate__sidebarChannels">
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            className="collaborate__sidebarChannelsActive"
            visible="true"
          >
          <Avatar src={"/images/wallpaper/snow.jpg"} variant="rounded" />
        </StyledBadge>
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            className="collaborate__sidebarChannelsInactive"
          >
          <Avatar src={"/images/wallpaper/snow.jpg"} variant="rounded" />
        </StyledBadge>
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            className="collaborate__sidebarChannelsInactive"
          >
          <Avatar src={"/images/wallpaper/snow.jpg"} variant="rounded" />
        </StyledBadge>
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            className="collaborate__sidebarChannelsInactive"
          >
          <Avatar src={"/images/wallpaper/snow.jpg"} variant="rounded" />
        </StyledBadge>
      </div>
      <div className="collaborate__sidebarMenu">
        <div className="collaborate__sidebarMenuHeader">
          <div className="collaborate__sidebarMenuInfo">
            <h2>{workspace}</h2>
            <h3>
              <FiberManualRecordIcon />
              {username}
            </h3>
          </div>
          <CreateIcon />
        </div>
        <CollaborateSidebarOption Icon={InsertCommentIcon} title="Threads" />
        <CollaborateSidebarOption Icon={InboxIcon} title="Mentions & reactions" />
        <CollaborateSidebarOption Icon={DraftsIcon} title="Saved items" />
        <CollaborateSidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
        <CollaborateSidebarOption Icon={PeopleAltIcon} title="People & user groups" />
        <CollaborateSidebarOption Icon={AppsIcon} title="Apps" />
        <CollaborateSidebarOption Icon={FileCopyIcon} title="File browser" />
        <CollaborateSidebarOption Icon={ExpandLessIcon} title="Show less" />
        <hr />
        <CollaborateSidebarOption Icon={ExpandMoreIcon} title="Channels" />
        <hr />
        <CollaborateSidebarOption addChannelOption Icon={AddIcon} title="New channel" />

        {channels.map((channel, index) => (
          <div key={channel.id}>
            <CollaborateSidebarOption title={channel.name} />
          </div>
        ))}
      </div>
    </div>
  )
}
