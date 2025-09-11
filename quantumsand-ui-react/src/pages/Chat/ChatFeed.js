import React, { useState, useEffect } from 'react';
import { Avatar, Icon, IconButton } from "@mui/material";

import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFile from "@mui/icons-material/AttachFile";
import MoreVert from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import ChatBody from './ChatBody';

import './ChatFeed.css';

export default function ChatFeed({ chats, wallpaper, channelName, lastSeen, avatar }) {

  const [input, setInput] = useState('');

  const handleInputBlur = event => {
    console.log('Input lost focus');
  };

  const handleInputFocus = event => {
    console.log('Input gained focus');
  };

  const updateInput = e => {
    setInput(e.target.value);
  }

  const sendMessage = e => {
    e.preventDefault();
    console.log(input);
    setInput('');
  }

  return (
    <div className="chat__feed">
      <div className="chat__feedHeader">
        <Avatar src={avatar} />
        <div className="chat__feedHeaderInfo">
          <h3>{channelName}</h3>
          <p>Last seen at {lastSeen}</p>
        </div>

        <div className="chat__feedHeaderRight">
          <IconButton>
            <CallOutlinedIcon />
          </IconButton>
          <IconButton>
            <VideoCallOutlinedIcon />
          </IconButton>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <ChatBody chats={chats} wallpaper={wallpaper} />
      <div className="chat__feedFooter">
        <InsertEmoticonIcon />
        <form>
          <input value={input} placeholder="Type a message..." type="text" onChange={updateInput.bind(this)}
                 onBlur={handleInputBlur} onFocus={handleInputFocus} />
          <button onClick={sendMessage.bind(this)} type="submit">Send a message</button>
        </form>
        <IconButton>
          <KeyboardVoiceOutlinedIcon />
        </IconButton>
        <IconButton>
          <VideocamOutlinedIcon />
        </IconButton>
      </div>
    </div>
  )
}
