import React, { Component, useState, useEffect } from 'react'
import Ticker from 'react-ticker'

import "./NarratorOverlay.css";

function rand(min, max) {
  var offset = min
  var range = (max - min) + 1
  var randomNumber = Math.floor(Math.random() * range) + offset
  return randomNumber
}

const quotes = [
  'Empty for now',
]

const images = ["/wallpaper/beach.jpg",
                "/wallpaper/forest.jpg",
                "/wallpaper/rain.jpg",
                "/wallpaper/snow.jpg",
                "/wallpaper/colours.jpg"]

const ImageFromApi = () => {
  const [color] = useState(getRandomPastelColor())
  const [image, setImage] = useState('')
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    getImageFromApi().then(image => {
      setImage(images[image])
      const img = new Image()
      img.onload = () => {
        setLoaded(true)
      }
      img.src = images[image]
    })
  }, [])

  return (
    <div
      style={{
        width: '10vw',
        height: '80px',
        objectFit: 'contain',
        background: color
      }}
    >
      <img
        src={image}
        className={loaded ? "loaded" : ""}
        style={{ height: '80px' }}
        alt=""
      />
    </div>
  )
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/*
  https://medium.com/@robin.nong/randomly-generate-pastel-colours-with-javascript-part-1-7fb3ea9bbb4f
*/

function getRandomPastelColor() {
  const hue = Math.floor(Math.random() * 360);
  const randomColor = `hsl(${hue}, 70%, 80%)`;
  return randomColor;
}

function apiCall() {
  const number = rand(0, 3)
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(number)
    }, 500)
  })
}

const getImageFromApi = async (index) => {
  const img = await apiCall()
  return img
}


export default function NarratorOverlay({ }) {
  return (
    <div className="narratorOverlay">
      {/* <Ticker
        offset="50%"
        move={true}
        onFinish={() => console.log("Finish!")}
      >
        {(index) => (
          <h1>{quotes[rand(0, quotes.length - 1)]}</h1>
        )}
      </Ticker> */}
      <Ticker
        offset="25%"
        speed={7}
        move={true}
        height={80}
      >
        {({ index }) => index === 0
          ? <h2 style={{ width: '25vw', padding: '10px' }}>Images feed</h2>
          : <ImageFromApi />
        }
      </Ticker>
      <Ticker
        offset="run-in"
        speed={10}
        move={true}
      >
        {({ index }) => index === 0
          ? <h1>Loading... </h1>
          : [<h1 key="name" style={{color: "#ddf3f5", backgroundColor: "#FFFF00", fontSize: "34px", fontFamily: "Noto Sans"}}>
                  <span key="japanese" style={{color: "#a6b1e1", fontFamily: "Noto Sans JP"}}>アンドリュー・ポッター</span> | 
                  <span key="english" style={{color: "#a6b1e1"}}>🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁥󠁮󠁧󠁿🇨🇦 Andrew Potter 🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁥󠁮󠁧󠁿🇨🇦 </span> | 
                  <span key="arabic" style={{color: "#a6b1e1", fontFamily: "Scheherazade"}}>يوسف بوتر</span> |
              </h1>]
        }
      </Ticker>
    </div>
  )
}
