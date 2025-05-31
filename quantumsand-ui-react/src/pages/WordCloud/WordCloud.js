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
  getWordColor: word => word.value > 50 ? "black" : "black",
  onWordClick: console.log,
  onWordMouseOver: console.log,
  //getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  getWordTooltip: word => `${word.text}`,
}

export default function WordCloud() {
  return (
    <div className="wordcloud">
      <ReactWordcloud callbacks={callbacks} words={words} minSize={[1280, 720]} size={[1280, 720]} options={{
        fontFamily: "Noto Sans",
        fontSizes: [50, 90],
        colors: ["black"],
        rotationAngles: [5, 160],
        rotations: 4,
        deterministic: false,
        randomSeed: 4,
        transitionDuration: 500
      }
    }/>
  </div>
  )
}
