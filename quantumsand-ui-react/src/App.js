import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AVControls from "./pages/AVControls/AVControls";
import Barcode from "./pages/Barcode/Barcode";
import Subtitles from "./pages/Subtitles/Subtitles";
import Adverts from "./pages/Adverts/Adverts";
import EBook from "./pages/EBook/EBook";
import Video from "./pages/Video/Video";
import PresentationSlides from "./pages/PresentationSlides/PresentationSlides";
import Wallpaper from "./pages/Wallpaper/Wallpaper";
import RibbonBar from "./pages/RibbonBar/RibbonBar";
import RibbonBarContext from "./pages/RibbonBar/RibbonBarContext";
import SampleRibbonBar from "./pages/SampleRibbonBar";
import logo from './logo.svg';
import './App.css';
import Market from "./pages/Market/Market";
import Collaborate from "./pages/Collaborate/Collaborate";
import Mail from "./pages/Mail/Mail";
import Services from "./pages/Services/Services";
import Images from "./pages/Images/Images";
import Chirp from "./pages/Chirp/Chirp";
import AudioPlayer from "./pages/Audio/AudioPlayer";
import AV from "./pages/AV/AV";

import NarratorOverlay from "./pages/NarratorOverlay/NarratorOverlay";
import Grains from "./pages/Grains/Grains";

const mathsSlides = [
    {
      id: 1,
      content: "Advertise here.",
      image: "/images/qalb-boy-experimental.svg",
      backgroundColor: "#fff"
    },
    {
      id: 2,
      backgroundColor:  "#2a2c37",
      content: "maths",
      mathematics: [{
        id: 1,
        tex: String.raw`$$z\left ( x, y, t \right )= \frac{2}{L}\sum_{m=1}^{\infty }\sum_{n=1}^{\infty }A_{mn}\sin \left (\frac{m \pi x}{L}\right ) \sin \left (\frac{n \pi y}{L}\right )\cos \left (c \omega t \right )$$` 
      },{
        id: 2,
        tex: String.raw`$$\omega = \frac{\pi}{L}\sqrt{\left ( mx \right )^{2} + \left( ny \right )^{2}}$$`
      },
      {
        id: 3,
        tex: String.raw`$$A_{mn} = \frac{2}{L}\int_{0}^{L}\int_{0}^{L}f\left ( x, y \right )\sin\frac{m \pi x}{L}\sin\frac{n \pi y}{L}\, dx dy$$`
      }
    ]
  },
  {
    id: 3, image: "/images/quantumsand-experimental-hourglass.svg", backgroundColor: "#fff"
  }]


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout debug={false} />}>
          <Route index element={<Home />} />
          {/* <Route path="sampleribbon" element={<SampleRibbonBar />} /> */}
          <Route path="ribbon" element={<RibbonBarContext />} />
          <Route path="context" element={<RibbonBarContext />} />
          <Route path="avcontrols" element={<AVControls />} />
          <Route path="barcode" element={<Barcode />} />
          <Route path="subtitles" element={<Subtitles />} />
          <Route path="adverts" element={<Adverts />} />
          <Route path="grains" element={<Grains />} />
          <Route path="ebook" element={<EBook />} />
          <Route path="slides" element={<PresentationSlides stepper={true} />} />
          <Route path="wallpaper" element={<Wallpaper />} />
          <Route path="market" element={<Market />} />
          <Route path="mail" element={<Mail />} />
          <Route path="services" element={<Services />} />
          <Route path="images" element={<Images />} />
          <Route path="collaborate" element={<Collaborate />} />
          <Route path="audio" element={<AudioPlayer/>} />       
          <Route path="chirp" element={<Chirp />} />
          <Route path="video-narrative" element={<Video />} />
          <Route path="av" element={<AV />} />
          <Route path="slides-secondary" element={<Video url="/video/play-drawing-alpha.webm" />} />
          <Route path="slides-thirdly" element={<PresentationSlides stepper={true} slides={mathsSlides} />} />
          <Route path="narrator" element={<NarratorOverlay />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
