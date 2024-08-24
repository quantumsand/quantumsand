import React from 'react';
import ImagesPost from "./ImagesPost";
import "./Images.css";

export default function Images({ logo = "/icons/coracaozinho-para-o-luiz-otavio.svg", posts = [
  {
    id: 1,
    username: "natalia",
    avatar: "/locale/russian.jpg",
    imageUrl: "/wallpaper/snow.jpg",
    caption: "Snow",
    likes: 90,
    shares: 20,
    comments: [
                {
                  id: 1,
                  username: "abdallah",
                  text: "This is awesome!"
                }
              ]
  },
  {
    id: 2,
    username: "natalia",
    avatar: "/locale/russian.jpg",
    imageUrl: "/wallpaper/rain.jpg",
    caption: "Rain",
    likes: 90,
    shares: 20,
    comments: [
                {
                  id: 1,
                  username: "abdallah",
                  text: "This is awesome!"
                }
              ]
  },
  {
    id: 3,
    username: "natalia",
    avatar: "/locale/russian.jpg",
    imageUrl: "/wallpaper/snow.jpg",
    caption: "Snow",
    likes: 90,
    shares: 20,
    comments: [
                {
                  id: 1,
                  username: "abdallah",
                  text: "This is awesome!"
                }
              ]
  }
] }) {
  return (
    <div className="images">
      <div className="images__header">
        <img
          className="images__headerImage"
          src={logo}
          alt=""
        />
      </div>

      <div className="images__posts">
        {
          posts.map(post => (
            <ImagesPost key={post.id}
                  username={post.username}
                  avatar={post.avatar}
                  imageUrl={post.imageUrl}
                  caption={post.caption}
                  likes={post.likes}
                  shares={post.shares}
                  comments={post.comments}
            />
          ))
        }
      </div>
    </div>
  )
}
