import React, { useState } from 'react';
import { Avatar, Button } from "@mui/material";
import './ChirpBox.css';

export default function ChirpBox({ avatar }) {
  const [chirpMessage, setChirpMessage] = useState("");

  const sendChirp = e => {
    e.preventDefault();
    console.log(chirpMessage);
    setChirpMessage("");
  }

  return (
    <div className="chirp__box">
      <form>
        <div className="chirp__boxInput">
          <Avatar src={avatar} />
          <input
            onChange={e => setChirpMessage(e.target.value)}
            value={chirpMessage} placeholder="What's happening?" type="text" />
        </div>
        <Button
          onClick={sendChirp}
          className="chirp__boxChirpButton">Chirp</Button>
      </form>
    </div>
  )
}
