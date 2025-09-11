import React from 'react';
import { Avatar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
// import SemiCheckIconNoReceipt from "./SemiCheckIcon-NoReceipt.svg";
// import SemiCheckIconReceipt from "./SemiCheckIcon-Receipt.svg";
import './ChatSidebarRoom.css';

export default function ChatSidebarRoom({ roomName, lastMessage, receiver, read, avatar }) {
  return (
    <div className="chat__sidebarRoom">
      <Avatar src={avatar} />
      <div className="chat__sidebarRoomInfo">
        <h2>{roomName}</h2>
        <p>
          {/* {receiver && <span className='chat__chatBodyRead'><CheckIcon style={{color: `${read ? '#53bdeb' : 'grey' }`  }} />
          <img src={read ? SemiCheckIconReceipt : SemiCheckIconNoReceipt} style={{marginLeft: "-12px", color: `${read ? '#53bdeb' : 'grey' }`  }}/></span>}
          {lastMessage} */}
        </p>
      </div>
    </div>
  )
}
