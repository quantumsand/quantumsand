import React, { useState } from 'react';
import Button from "@mui/material/Button";
import "./CollaborateChatInput.css";

export default function CollaborateChatInput({ channelName }) {
  const [input, setInput] = useState('');

  const sendMessage = e => {
    e.preventDefault();
    console.log(input);
    setInput('');
  }

  return (
    <div className="collaborate__chatInput">
      <form>
        <input value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
          />
        <Button type="submit" onClick={sendMessage}>SEND</Button>
      </form>
    </div>
  )
}
