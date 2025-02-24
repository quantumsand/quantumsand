import React from 'react';
import ChirpSidebar from "./ChirpSidebar";
import ChirpFeed from "./ChirpFeed";
import "./Chirp.css";

export default function Chirp({ logo = "/icons/coracaozinho-para-o-luiz-otavio.svg", posts = [
  {
      id: "1",
      displayName: "Natalia",
      username: "natalia",
      verified: true,
      text: "Snow",
      avatar: "/locale/russian.jpg",
      image: "/wallpaper/snow.jpg"
  },
  {
    id: "2",
    displayName: "Abdallah",
    username: "abdallah",
    verified: true,
    text: "Rain",
    avatar: "/locale/arabic.jpg",
    image: "/wallpaper/rain.jpg"
  }
], avatar = "/locale/english.jpg" }){
  return (
    <div className="chirp">
      <ChirpSidebar logo={logo} />
      <ChirpFeed posts={posts} avatar={avatar} />
    </div>
  )
}
