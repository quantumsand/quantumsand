import React from 'react';
import ChatSidebar from './ChatSidebar';
import ChatFeed from './ChatFeed';
import './Chat.css';

export default function Chat({rooms = [
  {
    id: 1,
    roomName: "Natalia",
    lastMessage: "Yusuf sent a voice note",
    avatar: "/locale/russian.jpg",
    receiver: true,
    read: false
  },
  {
    id: 2,
    roomName: "Safiyyah",
    lastMessage: "Please get some coffee",
    avatar: "/locale/french.jpg",
    receiver: false,
    read: true
  },
  {
    id: 3,
    roomName: "Akio",
    lastMessage: "Are you coming to the dojo today?",
    avatar: "/locale/japanese.jpg",
    receiver: false,
    read: true
  }], chats = {
  avatar: "/locale/russian.jpg",
  channelName: "Natalia",
  lastSeen: "3:52pm",
  wallpaper: "/wallpaper/snow.jpg",
  messages: [{
    id: 1,
    receiver: false,
    name: "Natalia",
    format: "text",
    content: "ٱلسَّلَامُ عَلَيْكُمْ",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 2,
    receiver: true,
    name: "Yusuf",
    format: "text",
    content: "وَعَلَيْكُمُ ٱلسَّلَامُ",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 3,
    receiver: false,
    name: "Natalia",
    format: "text",
    content: "How are you? 😍",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 4,
    receiver: true,
    name: "Yusuf",
    format: "text",
    content: "I am fine thanks 😍, and you?",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 5,
    receiver: false,
    name: "Natalia",
    format: "text",
    content: "ٱلسَّلَامُ عَلَيْكُمْ",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 6,
    receiver: true,
    name: "Yusuf",
    format: "text",
    content: "وَعَلَيْكُمُ ٱلسَّلَامُ",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 7,
    receiver: false,
    name: "Natalia",
    format: "text",
    content: "How are you?",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 8,
    receiver: true,
    name: "Yusuf",
    format: "text",
    content: "I am fine thanks, and you?",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 9,
    receiver: false,
    name: "Natalia",
    format: "text",
    content: "ٱلسَّلَامُ عَلَيْكُمْ",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 10,
    receiver: true,
    name: "Yusuf",
    format: "text",
    content: "وَعَلَيْكُمُ ٱلسَّلَامُ",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 11,
    receiver: false,
    name: "Natalia",
    format: "text",
    content: "How are you?",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 12,
    receiver: true,
    name: "Yusuf",
    format: "text",
    content: "I am fine thanks, and you?",
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 13,
    receiver: true,
    name: "Yusuf",
    format: "video",
    content: {
      src: "/images/videos/Introduction-to-QALB-Story-audio.webm",
      srcJson: "/images/videos/Introduction-to-QALB-Story-audio_20pps_8bit.json",
      srcLength: 63
    },
    timestamp: "3:52pm",
    read: true
  },
  {
    id: 14,
    receiver: true,
    name: "Yusuf",
    format: "audio",
    content: {
      src: "/images/videos/Introduction-to-QALB-Story-audio.opus",
      srcJson: "/images/videos/Introduction-to-QALB-Story-audio_20pps_8bit.json",
      srcLength: 63
    },
    timestamp: "3:55pm",
    read: false
  }]}, avatar = "/locale/english.jpg"}) {
  return (
    <div className="chat">
      <ChatSidebar rooms={rooms} avatar={avatar} />
      <ChatFeed chats={chats.messages}
                channelName={chats.channelName}
                wallpaper={chats.wallpaper}
                avatar={chats.avatar}
                lastSeen={chats.lastSeen} />
    </div>
  )
}
