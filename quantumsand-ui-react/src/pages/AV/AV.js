import React from 'react';
import AVHeader from './AVHeader';
import AVSidebar from './AVSidebar';
import AVRecommendedVideos from './AVRecommendedVideos';
import './AV.css';

export default function AV({ logo, username, avatar, videos = [
  {
    id: 1,
    title: "Introduction to Muamalat",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/lamps.jpg"
  },
  {
    id: 2,
    title: "Introduction to Artificial Intelligence",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/artificial-intelligence.jpg"
  },
  {
    id: 3,
    title: "Introduction to Quantum Mechanics",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/quantum-mechanics.jpg"
  },
  {
    id: 4,
    title: "Introduction to Coding",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/coding.jpg"
  },
  {
    id: 5,
    title: "Introduction to Mathematics",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/mathematics.jpg"
  },
  {
    id: 6,
    title: "Introduction to 2.5D Art",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/2.5d-art.jpg"
  },
  {
    id: 7,
    title: "Introduction to Arabic",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/arabic.jpg"
  },
  {
    id: 8,
    title: "Introduction to Mandarin Chinese",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/chinese.jpg"
  },
  {
    id: 9,
    title: "Introduction to Japanese",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/japanese.jpg"
  },
  {
    id: 10,
    title: "Introduction to Geospatial Mapping",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/geospatial-mapping.jpg"
  },
  {
    id: 11,
    title: "Introduction to Semiconductors",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/semiconductors.jpg"
  },
  {
    id: 12,
    title: "Introduction to Judo",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/judo.jpg"
  },
  {
    id: 13,
    title: "Introduction to Cybersecurity",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/cybersecurity.jpg"
  },
  {
    id: 14,
    title: "Introduction to Shakespeare",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/shakespeare.jpg"
  },
  {
    id: 15,
    title: "Introduction to Microfarming",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/microfarming.jpg"
  },
  {
    id: 16,
    title: "Introduction to Swimming",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/swimming.jpg"
  },
  {
    id: 17,
    title: "Introduction to Nuclear Fusion",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/nuclear-fusion.jpg"
  },
  {
    id: 18,
    title: "Introduction to Conservation",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/conservation.jpg"
  },
  {
    id: 19,
    title: "Introduction to 3D Art",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/3d-art.jpg"
  },
  {
    id: 20,
    title: "Introduction to Biophysics",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/biophysics.jpg"
  },
  {
    id: 21,
    title: "Introduction to Biochemistry",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/biochemistry.jpg"
  },
  {
    id: 22,
    title: "Introduction to Technology",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/technology.jpg"
  },
  {
    id: 23,
    title: "Introduction to Space",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/space.jpg"
  },
  {
    id: 24,
    title: "Introduction to Music Theory",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/music-theory.jpg"
  },
  {
    id: 25,
    title: "Introduction to Gold and Silver",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/gold-and-silver.jpg"
  },
  {
    id: 26,
    title: "Introduction to QALB Story",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/introduction-to-QALB-Story.png"
  },
  {
    id: 27,
    title: "QALB Talks – Artificial Intelligence – 1",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Talks",
    image: "/thumbs/artificial-intelligence.jpg"
  },
  {
    id: 28,
    title: "QALB Talks – Artificial Intelligence – 2",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Talks",
    image: "/thumbs/artificial-intelligence.jpg"
  },
  {
    id: 29,
    title: "Apology to the Ummah, Darqawi and everyone",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "Yusuf Potter",
    image: "/thumbs/apology-yusuf-potter.jpg"
  },
  {
    id: 30,
    title: "Introduction to Islam",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Talks",
    image: "/thumbs/islam.jpg"
  },
  {
    id: 31,
    title: "Introduction to Videogame Development",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Talks",
    image: "/thumbs/videogame-development.jpg"
  },
  {
    id: 32,
    title: "The Muslim Princess | The Muslim Prince: Your Awakening",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Videogame",
    image: "/interactive/TMP_black.svg"
  },
  {
    id: 33,
    title: "The Sufi Princess | The Sufi Prince: Your Awakening",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Videogame",
    image: "/interactive/TSP_black.svg"
  },
  {
    id: 34,
    title: "Friendly Dragon Galaxy",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Videogame",
    image: "/interactive/FDG_colours.svg"
  },
  {
    id: 35,
    title: "Introduction to Geospatial SQL for Machine Learning",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Talks",
    image: "/thumbs/geospatial-sql.jpg"
  },
  {
    id: 36,
    title: "Introduction to Free Software",
    views: "2.3M",
    timestamp: "3 days ago",
    channelImage: "/icons/coracaozinho-para-o-luiz-otavio.svg",
    channel: "QALB Story",
    image: "/thumbs/free-software.jpg"
  }
] }) {
  return (
    <div className="av">

      <AVHeader logo={logo}
        username={username}
        avatar={avatar} />

      <div className="av__page">
        <AVSidebar />
        <AVRecommendedVideos videos={videos} />
      </div>
    </div>
  )
}
