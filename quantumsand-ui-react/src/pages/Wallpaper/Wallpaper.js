import React, {useState, setState, useRef} from 'react';
import ReactPlayer from 'react-player';

import './Wallpaper.css';

export default function Wallpaper({ url = "/video/wallpaper_v3.webm", displayLicense = true }) {

  const [playerInstance, setPlayerInstance] = useState([]);

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

  return (
  <div className="wallpaper">
    <div className='wallpaper__playerWrapper'>
      <ReactPlayer
        ref={ref}
        className='react-player'
        url={url}
        playing={true}
        loop={true}
        onPlay={handlePlay}
        onProgress={handleProgress}
        onDuration={handleDuration}
        width='100%'
        height='100%'
      />
      {displayLicense && <div className="wallpaper__playerLicense">
        <img src="/logo/cc-by-sa-4.0-vertical_white.svg" />
        </div>}
    </div>
  </div>
  )
}
