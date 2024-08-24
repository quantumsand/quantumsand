import React from 'react';
import "./AudioPlayerTrackRow.css";

export default function AudioPlayerTrackRow({ trackImage, trackName, artistName }) {
  return (
    <div className="audio__playerTrackRow">
      <img className="audio__playerTrackImage" src={trackImage} alt="" />
      <div className="audio__playerTrackRowInfo">
        <h1>{trackName}</h1>
        <p>{artistName}</p>
      </div>
    </div>
  )
}
