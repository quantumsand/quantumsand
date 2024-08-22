import React from 'react';
import "./CollaborateMessage.css";

export default function CollaborateMessage({ message, timestamp, user, userId, userImage }) {
  return (
    <div className="collaborate__message">
      <img src={userImage} alt="" />
      <div className="collaborate__messageInfo">
        <h4>
          {user} <span className="collaborate__messageTimestamp">{timestamp}</span>
        </h4>
        <p>
          {message}
        </p>
      </div>
    </div>
  )
}
