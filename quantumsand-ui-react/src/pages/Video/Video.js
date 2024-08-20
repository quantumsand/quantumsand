import React, {useState, useEffect, useRef} from 'react';
import ReactPlayer from 'react-player';

import './Video.css';

export default function Video({ url = "/video/sample-narrative-dynamic.webm", displayLicense = true }) {

  const [playerInstance, setPlayerInstance] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("#d1d1d1");

  const ref = useRef();

  const handlePlay = () => {
    console.log('onPlay')
   // playerInstance.setState({ playing: true }) // TODO fix this.
  }

  const handleProgress = state => {
    console.log('onProgress', state)
  }

  const handleDuration = (duration) => {
    console.log('onDuration', duration)
  }

  /*
    https://medium.com/@robin.nong/randomly-generate-pastel-colours-with-javascript-part-1-7fb3ea9bbb4f
  */
  function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    const randomColor = `hsl(${hue}, 70%, 80%)`;
    return randomColor;
  }

  useEffect(() => {
    var randomColor = getRandomPastelColor();
    setBackgroundColor(randomColor);
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      var randomColor = getRandomPastelColor();
      setBackgroundColor(randomColor);  
    }, 3000);

    return () => clearInterval(intervalId); //This is important
  }, []);

  return (
  <div className="video" style={{backgroundColor: backgroundColor}}>
    <div className='video__playerWrapper'>
      <ReactPlayer
        ref={ref}
        className='react-player'
        url={url}
        playing={true}
        loop={true}
        onPlay={handlePlay}
        onProgress={handleProgress}
        onDuration={handleDuration}
        volume={0.8}
        width='100%'
        height='100%'
      />
      {displayLicense && <div className="video__playerLicense">
        <img src="/images/cc-by-sa-4.0-vertical_white.svg" />
        </div>}
    </div>
  </div>
  )
}
