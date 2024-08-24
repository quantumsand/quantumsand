import React from 'react';
import AudioPlayerSidebarOption from './AudioPlayerSidebarOption';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import "./AudioPlayerSidebar.css";

export default function AudioPlayerSidebar({ logo, playlists }) {
  return (
    <div className="audio__playerSidebar">
      <div className="audio__playerSidebarInfo">

        <img className="audio__playerSidebarLogo"
          src={logo}
          alt="" />

        <AudioPlayerSidebarOption Icon={HomeIcon} title="Home" />
        <AudioPlayerSidebarOption Icon={SearchIcon} title="Search" />
        <AudioPlayerSidebarOption Icon={LibraryMusicIcon} title="Your Library" />

        <br />
        <strong className="audio__playerSidebarTitle">PLAYLISTS</strong>
        <hr />

      </div>

      <div className="audio__playerSidebarPlaylists">

        {playlists.map((playlist, index) => (
        <div key={playlist.id}>
          <AudioPlayerSidebarOption title={playlist.title} />
        </div>
        ))}

      </div>
    </div>
  )
}
