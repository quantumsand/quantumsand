import React, {useRef, useEffect} from 'react';
import CheckIcon from "@mui/icons-material/Check";
// import SemiCheckIconNoReceipt from "./SemiCheckIcon-NoReceipt.svg";
// import SemiCheckIconReceipt from "./SemiCheckIcon-Receipt.svg";
// import VoiceNotePlayer from '../VoiceNote/VoiceNotePlayer';
// import VideoNotePlayer from '../VideoNote/VideoNotePlayer';
import Emoji from "react-emoji-render";
import './ChatBody.css';

export default function ChatBody({ chats, wallpaper }) {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  function MyEmojiRenderer({ children, ...rest }) {
    const options = {
      baseUrl: "/emoji/twemoji/",
      size: "",
      protocol: "",
      ext: "svg",
    };

    return <Emoji options={options} {...rest} />;
  }

  useEffect(() => {
    scrollToBottom()
  }, [chats]);

  return (
    <div className="chat__chatBody" style={{ backgroundImage: `url(${wallpaper})`}}>
      {chats.map((chat, index) => (
        <div key={chat.id} className={`chat__chatMessage ${chat.receiver && 'chat__chatReceiver'}`}>
          <span className="chat__chatName">{chat.name}</span>
          {chat.format == "text" && <MyEmojiRenderer text={chat.content} />}
          {/* {chat.format == "audio" && 
          <VoiceNotePlayer 
            id={chat.id}
            src={chat.content.src}
            srcJson={chat.content.srcJson}
            srcLength={chat.content.srcLength}
          />}
          {chat.format == "video" && 
          <VideoNotePlayer 
            id={chat.id}
            src={chat.content.src}
            srcJson={chat.content.srcJson}
            srcLength={chat.content.srcLength}
          /> */}
          <br />
          {/* {chat.receiver && <span className='chat__chatBodyRead'><CheckIcon style={{color: `${chat.read ? '#53bdeb' : 'grey' }`  }} />
          <img src={chat.read ? SemiCheckIconReceipt : SemiCheckIconNoReceipt} style={{marginLeft: "-12px", color: `${chat.read ? '#53bdeb' : 'grey' }`  }}/></span>}
          <span className="chat__chatTimestamp">{chat.timestamp}</span> */}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}
