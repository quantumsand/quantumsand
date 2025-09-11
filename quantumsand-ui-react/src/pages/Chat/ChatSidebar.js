import React from 'react';
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ChatSidebarRoom from './ChatSidebarRoom';
import './ChatSidebar.css';

export default function ChatSidebar({ rooms, avatar }) {

  const handleInputBlur = event => {
    console.log('Input lost focus');
  };

  const handleInputFocus = event => {
    console.log('Input gained focus');
  };

  return (
    <div className="chat__sidebar">
      <div className="chat__sidebarHeader">
        <Avatar src={avatar} />

        <div className="chat__sidebarHeaderRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatOutlinedIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>

        </div>
      </div>

      <div className="chat__sidebarSearch">
        <div className="chat__sidebarSearchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text"
                 onBlur={handleInputBlur} onFocus={handleInputFocus} />
        </div>

      </div>

      <div className="chat__sidebarRooms">
        {rooms.map((room, index) => (
          <ChatSidebarRoom key={room.id} roomName={room.roomName} receiver={room.receiver} 
                           read={room.read} avatar={room.avatar} lastMessage={room.lastMessage} />
        ))}
      </div>
    </div>
  )
}
