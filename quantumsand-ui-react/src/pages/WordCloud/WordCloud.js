import { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import "./WordCloud.css";

const words = [
  {
    text: 'exponential',
    value: 64,
  },
  {
    text: 'graph',
    value: 11,
  },
  {
    text: 'mathematics',
    value: 30,
  },
  {
    text: 'maths',
    value: 30,
  },
  {
    text: 'geometry',
    value: 30,
  },
  {
    text: 'trigonometry',
    value: 30,
  },
  {
    text: 'calculus',
    value: 64,
  },
  {
    text: 'integration',
    value: 11,
  },
  {
    text: 'differentiation',
    value: 16,
  },
  {
    text: 'cosine',
    value: 64,
  },
  {
    text: 'sine',
    value: 64,
  },
  {
    text: 'tangent',
    value: 11,
  },
  {
    text: 'algebra',
    value: 16,
  },
  {
    text: 'gradient',
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
      <div className="wordcloud__react">
        <ReactWordcloud callbacks={callbacks} words={words} minSize={[900, 340]} size={[900, 340]} options={{
          fontFamily: "Noto Sans",
          fontSizes: [40, 90],
          colors: ["white"],
          rotationAngles: [5, rotationAngleMax],
          rotations: 4,
          deterministic: false,
          randomSeed: 4,
          transitionDuration: 500
        }
      }/>
      </div>
    </div>
  )
}
