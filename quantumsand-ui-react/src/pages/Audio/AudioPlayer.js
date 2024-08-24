import React from 'react';
import AudioPlayerBody from "./AudioPlayerBody";
import AudioPlayerFooter from "./AudioPlayerFooter";
import AudioPlayerSidebar from "./AudioPlayerSidebar";
import "./AudioPlayer.css";

export default function AudioPlayer({ logo, playlists = [
  {
    id: 1,
    title: "Awesome",
  },
  {
    id: 2,
    title: "Bach, J.S.: Violin Partita No. 2",
  },
  {
    id: 3,
    title: "Gold podcast",
  },
  {
    id: 4,
    title: "Discover Monthly",
  },
  {
    id: 5,
    title: "Shakespeare",
  },
  {
    id: 6,
    title: "QALB Story",
  },
  {
    id: 7,
    title: "Awesome",
  },
  {
    id: 8,
    title: "Bach, J.S.: Violin Partita No. 2",
  },
  {
    id: 9,
    title: "Gold podcast",
  },
  {
    id: 10,
    title: "Discover Monthly",
  },
  {
    id: 11,
    title: "Shakespeare",
  },
  {
    id: 12,
    title: "QALB Story",
  }
], currentPlaylist = {
  name: "Discover Monthly",
  description: "Your monthly mixtape of fresh tracks. Enjoy new music and deep cuts picked for you. Updates every month.",
  image: "/covers/violin.jpg",
  tracks: [
      {
        id: 1,
        image: "/covers/violin.jpg",
        artistName: "Bach, J.S",
        trackName: "Violin Partita No. 2 in D Minor, BWV 1004"
      },
      {
        id: 2,
        image: "/covers/violin.jpg",
        artistName: "Bach, J.S",
        trackName: "Violin Concerto BWV 1042 in E Major"
      },
      {
        id: 3,
        image: "/covers/violin.jpg",
        artistName: "Bach, J.S",
        trackName: "Violin Partita No. 2 in D Minor, BWV 1004"
      },
      {
        id: 4,
        image: "/covers/violin.jpg",
        artistName: "Bach, J.S",
        trackName: "Violin Concerto BWV 1042 in E Major"
      },
      {
        id: 5,
        image: "/covers/violin.jpg",
        artistName: "Bach, J.S",
        trackName: "Violin Partita No. 2 in D Minor, BWV 1004"
      },
      {
        id: 6,
        image: "/covers/violin.jpg",
        artistName: "Bach, J.S",
        trackName: "Violin Concerto BWV 1042 in E Major"
      },
      {
        id: 7,
        image: "/covers/violin.jpg",
        artistName: "Bach, J.S",
        trackName: "Violin Partita No. 2 in D Minor, BWV 1004"
      },
      {
        id: 8,
        image: "/covers/violin.jpg",
        artistName: "Bach, J.S",
        trackName: "Violin Concerto BWV 1042 in E Major"
      }
  ]
}, artistName = "Bach, J.S", trackName = "Violin Partita No. 2 in D Minor, BWV 1004", 
                                      trackImage = "/covers/violin.jpg", username, avatar, content = {
                                        src: "/videos/Introduction-to-QALB-Story-audio.webm",
                                        srcJson: "/videos/Introduction-to-QALB-Story-audio_20pps_8bit.json",
                                        srcLength: 63
                                      } }) {
  return (
    <div className="audio__player">
      <div className="audio__playerBody">
        <AudioPlayerSidebar logo={logo} playlists={playlists} />
        <AudioPlayerBody username={username} avatar={avatar} currentPlaylist={currentPlaylist} />
      </div>

      <AudioPlayerFooter artistName={artistName} trackName={trackName} trackImage={trackImage}
                        src={content.src} srcArrayBuffer={content.srcArrayBuffer} 
                        srcJson={content.srcJson} srcLength={content.srcLength} />
    </div>
  )
}
