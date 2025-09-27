import React from "react";
import Masonry from 'react-masonry-css';

import "./Pins.css";

export default function Pins({ pins = [
      {
        id: 1,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      },
      {
        id: 2,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      },
      {
        id: 3,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      },
      {
        id: 4,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      },
      {
        id: 5,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      },
      {
        id: 6,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      },
      {
        id: 7,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      },
      {
        id: 8,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      },
      {
        id: 9,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      },
      {
        id: 10,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      },
      {
        id: 11,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      },
      {
        id: 12,
        title: "Title",
        image: "/wallpaper/snow.jpg",
        content: "Lorem ipsum",
        tags: [
          {
            id: 1,
            content: "test"
          },
          {
            id: 2,
            content: "music"
          }
        ]
      }
    ] }) {

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2
  };

  return (
    <div className="pins">
      <Masonry
          breakpointCols={breakpointColumnsObj}
          className="pins__masonryGrid"
          columnClassName="pins__masonryGridColumn"
          columnAttrs={{ className: 'should be overridden', 'data-test': '', style: { '--test': 'test' }}}
        >
          {pins.map((pin, index) => (
          <div key={pin.id}>
            <strong>Item #{pin.title}</strong>
            <div><img src={pin.image} style={{width:'100%'}} /></div>
            <div>{pin.content}</div>
          </div>
          ))}
        </Masonry>
    </div>
  )
}
