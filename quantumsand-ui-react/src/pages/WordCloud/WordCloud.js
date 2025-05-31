import { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import "./WordCloud.css";

const words = [
  {
    text: '3D',
    value: 64,
  },
  {
    text: 'art',
    value: 11,
  },
  {
    text: 'bevy',
    value: 30,
  },
  {
    text: 'Godot',
    value: 30,
  },
  {
    text: 'lighthouse',
    value: 30,
  },
  {
    text: 'Blender',
    value: 30,
  },
  {
    text: 'sea',
    value: 64,
  },
  {
    text: 'ocean',
    value: 11,
  },
  {
    text: 'rocks',
    value: 16,
  },
  {
    text: 'houses',
    value: 64,
  },
  {
    text: 'nature',
    value: 64,
  },
  {
    text: 'beauty',
    value: 11,
  },
  {
    text: 'stormy',
    value: 16,
  },
  {
    text: 'earth',
    value: 64,
  },
]

const callbacks = {
  getWordColor: word => word.value > 50 ? "white" : "white",
  onWordClick: console.log,
  onWordMouseOver: console.log,
  //getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  getWordTooltip: word => `${word.text}`,
}

export default function WordCloud() {

  const [rotationAngleMax, setRotationAngleMax] = useState(160);

  useEffect(() => {
    const intervalId = setInterval(() => {

    setRotationAngleMax(Math.floor(Math.random() * 200))

    }, 4000);

    return () => clearInterval(intervalId); //This is important
  })

  return (
    <div className="wordcloud">
      <ReactWordcloud callbacks={callbacks} words={words} minSize={[1280, 720]} size={[1280, 720]} options={{
        fontFamily: "Noto Sans",
        fontSizes: [70, 120],
        colors: ["white"],
        rotationAngles: [5, rotationAngleMax],
        rotations: 4,
        deterministic: false,
        randomSeed: 4,
        transitionDuration: 500
      }
    }/>
  </div>
  )
}
