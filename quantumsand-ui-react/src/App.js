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
          <Route path="ebook" element={<EBook />} />
          <Route path="slides" element={<PresentationSlides />} />
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
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
