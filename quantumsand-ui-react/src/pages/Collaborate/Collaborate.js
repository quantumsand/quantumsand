import React from 'react';
import CollaborateHeader from './CollaborateHeader';
import CollaborateSidebar from './CollaborateSidebar';
import CollaborateChat from './CollaborateChat';
import "./Collaborate.css";

export default function Collaborate({ username, avatar, workspace, channels = 
  [
      {
        id: 1,
        name: "general"
      },
      {
        id: 2,
        name: "outreach"
      },
      {
        id: 3,
        name: "development"
      }
    ], channelName, messages = [{
      id: 1,
      content: "Please check my dirham/dinar wallet implementation 😍",
      timestamp: "11:45",
      user: "Yusuf",
      userId: 2,
      userImage: "/wallpaper/rain.jpg"
    },
    {
      id: 2,
      content: "Did you make a pull request 😍?",
      timestamp: "11:46",
      user: "Natalia",
      userId: 1,
      userImage: "/wallpaper/snow.jpg"
    },
    {
      id: 3,
      content: "No, it is in the main branch 😍",
      timestamp: "11:50",
      user: "Yusuf",
      userId: 2,
      userImage: "/wallpaper/rain.jpg"
    },
    {
      id: 4,
      content: "Also, did you know that dinar/dirham became legal tender in the UK? 😍",
      timestamp: "11:53",
      user: "Natalia",
      userId: 1,
      userImage: "/wallpaper/snow.jpg"
    },
    {
      id: 5,
      content: "No way, this is awesome! Subhanallah. Finally!",
      timestamp: "11:55",
      user: "Yusuf",
      userId: 2,
      userImage: "/wallpaper/rain.jpg"
    },
    {
      id: 6,
      content: "Yes exactly, I heard about it recently! 😍",
      timestamp: "11:56",
      user: "Natalia",
      userId: 1,
      userImage: "/wallpaper/snow.jpg"
    },
    {
      id: 7,
      content: "I will get the dinar/dirham wallet finished asap! 😍",
      timestamp: "11:57",
      user: "Yusuf",
      userId: 2,
      userImage: "/wallpaper/rain.jpg"
    },
    {
      id: 8,
      content: "Please check my dirham/dinar wallet implementation",
      timestamp: "11:45",
      user: "Yusuf",
      userId: 2,
      userImage: "/wallpaper/rain.jpg"
    },
    {
      id: 9,
      content: "Did you make a pull request? 😍",
      timestamp: "11:46",
      user: "Natalia",
      userId: 1,
      userImage: "/wallpaper/snow.jpg"
    },
    {
      id: 10,
      content: "No, it is in the main branch 😍",
      timestamp: "11:50",
      user: "Yusuf",
      userId: 2,
      userImage: "/wallpaper/rain.jpg"
    },
    {
      id: 11,
      content: "Also, did you know that dinar/dirham became legal tender in the UK? 😍",
      timestamp: "11:53",
      user: "Natalia",
      userId: 1,
      userImage: "/wallpaper/snow.jpg"
    },
    {
      id: 12,
      content: "No way, this is awesome! Subhanallah. Finally! 😍",
      timestamp: "11:55",
      user: "Yusuf",
      userId: 2,
      userImage: "/wallpaper/rain.jpg"
    },
    {
      id: 13,
      content: "Yes exactly, I heard about it recently!",
      timestamp: "11:56",
      user: "Natalia",
      userId: 1,
      userImage: "/wallpaper/snow.jpg"
    },
    {
      id: 14,
      content: "I will get the dinar/dirham wallet finished asap! 😍",
      timestamp: "11:57",
      user: "Yusuf",
      userId: 2,
      userImage: "/wallpaper/rain.jpg"
    }] }) {
  return (
    <div className="collaborate">
      <CollaborateHeader avatar={avatar} workspace={workspace} />

      <div className="collaborate__body">
        <CollaborateSidebar username={username} workspace={workspace} channelName={channelName} channels={channels} />
        <CollaborateChat channelName={channelName} messages={messages} />
      </div>
    </div>
  )
}
