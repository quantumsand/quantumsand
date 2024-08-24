import React from 'react';
import ChirpBox from "./ChirpBox";
import ChirpPost from "./ChirpPost";
import "./ChirpFeed.css";

export default function ChirpFeed({ posts, avatar }) {
  return (
    <div className="chirp__feed">
      <div className="chirp__feedHeader">
        <h2>Home</h2>
        <ChirpBox avatar={avatar} />
      </div>

      {posts.map((post, index) => (
        <ChirpPost key={post.id}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image} />
      ))}
    </div>
  )
}
