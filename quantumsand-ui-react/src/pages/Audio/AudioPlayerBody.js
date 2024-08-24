import React from 'react';
import AudioPlayerBodyHeader from "./AudioPlayerBodyHeader"
import AudioPlayerTrackRow from './AudioPlayerTrackRow';
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./AudioPlayerBody.css";

export default function AudioPlayerBody({ name, avatar, currentPlaylist }) {
  return (
    <div className="audio__playerBodyBody">
      <AudioPlayerBodyHeader name={name} avatar={avatar} />

      <div className="audio__playerBodyInfo">
        <img src={currentPlaylist.image} alt="" />
        <div className="audio__playerBodyInfoText">
          <strong>PLAYLIST</strong>
          <h2>{currentPlaylist.name}</h2>
          <p>{currentPlaylist.description}</p>
        </div>
      </div>

      <div className="audio__playerBodySongs">
        <div className="audio__playerBodyIcons">
          <PlayCircleFilledIcon className="audio__playerBodyShuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {currentPlaylist.tracks.map((track, index) => (
          <div key={track.id}>
            <AudioPlayerTrackRow trackImage={track.image}
              trackName={track.trackName}
              artistName={track.artistName} />
          </div>
        ))}
      </div>
    </div>
  )
}

