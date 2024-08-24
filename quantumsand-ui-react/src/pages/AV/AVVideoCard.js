import React from 'react';
import Avatar from "@mui/material/Avatar";
import './AVVideoCard.css';

export default function AVVideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="av__videoCard">
      <img className="av__videoCardThumbnail" src={image} alt="" />
      <div className="av__videoCardInfo">
        <Avatar className="av__videoCardAvatar" alt={channel} src={channelImage} variant="square" />

        <div className="av__videoCardText">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views · {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}
