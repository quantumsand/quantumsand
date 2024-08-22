import React, {useRef, useEffect} from 'react';
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CollaborateMessage from './CollaborateMessage';
import CollaborateChatInput from './CollaborateChatInput';
import Emoji from "react-emoji-render";
import "./CollaborateChat.css";

export default function CollaborateChat({ channelName, messages }) {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  function MyEmojiRenderer({ children, ...rest }) {
    const options = {
      baseUrl: "/images/emoji/twemoji/",
      size: "",
      protocol: "",
      ext: "svg",
    };

    return <Emoji options={options} {...rest} />;
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <div className="collaborate__chat">
      <div className="collaborate__chatHeader">
        <div className="collaborate__chatHeaderLeft">
          <h4 className="collaborate__chatChannelName">
            <strong>#{channelName}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="collaborate__chatHeaderRight">
          <p>
            <InfoOutlinedIcon />
          </p>
        </div>
      </div>
      <div className="collaborate__chatMessages">

        {messages.map((message, index) => (
          <div key={message.id}>
            <CollaborateMessage message={<MyEmojiRenderer text={message.content} />}
              timestamp={message.timestamp}
              user={message.user}
              userId={message.userId}
              userImage={message.userImage} />
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <CollaborateChatInput channelName={channelName} />
    </div>
  )
}
