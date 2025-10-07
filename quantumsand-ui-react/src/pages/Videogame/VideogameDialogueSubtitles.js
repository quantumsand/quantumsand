import React, { useState, useEffect, useRef } from 'react';

import "./VideogameDialogueSubtitles.css";

/*
   Based upon CC BY-SA 4.0:
   https://stackoverflow.com/a/74648594
*/

const SlowText = ({ speed, text }) => {
  //const { speed, text } = props
  const [placeholder, setPlaceholder] = useState(text[0])

  const index = useRef(0)

  useEffect(() => {
    function tick() {
      index.current++
      setPlaceholder(prev => prev + text[index.current])
    }
    if (index.current < text.length - 1) {
      let addChar = setInterval(tick, speed)
      return () => clearInterval(addChar)
    }
  }, [placeholder, speed, text])
  return <span>{placeholder}</span>
}

export default function VideogameDialogueSubtitles({ subtitles = "Oh... Navi... Thou hast returned. Link... Welcome. Listen carefully to what I, the Great Deku Tree, am about to tell thee... Thy slumber these past moons have been restless, and full of nightmares..." }) {

  return (
    <div className="videogame__dialogueSubtitles-overlay">
      <div className="videogame__dialogueSubtitles">
        <SlowText speed={50} text={subtitles} />
      </div>
    </div>
  )
}
