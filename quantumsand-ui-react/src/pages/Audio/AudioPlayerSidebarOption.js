import React from 'react';
import "./AudioPlayerSidebarOption.css";

export default function AudioPlayerSidebarOption({ title, Icon }) {
  return (
    <div className="audio__playerSidebarOption">
      {Icon && <Icon className="audio__playerSidebarOptionIcon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}
