import React, { ref, useState, Component } from "react";
import { Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton } from "react-bootstrap-ribbon";
import ReactPlayer from 'react-player';
import { Tabs, Tab } from "react-bootstrap";
import AppsIcon from '@mui/icons-material/Apps';
import LanguageIcon from '@mui/icons-material/Language';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import DescriptionIcon from '@mui/icons-material/Description';
import PublicIcon from '@mui/icons-material/Public';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessibleIcon from '@mui/icons-material/Accessible';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import LockIcon from '@mui/icons-material/Lock';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SettingsIcon from '@mui/icons-material/Settings';
import CopyrightIcon from '@mui/icons-material/Copyright';
import CodeIcon from '@mui/icons-material/Code';
import RadioIcon from '@mui/icons-material/Radio';
import RadarIcon from '@mui/icons-material/Radar';
import InfoIcon from '@mui/icons-material/Info';
import SignalWifi1BarIcon from '@mui/icons-material/SignalWifi1Bar';
import Battery50Icon from '@mui/icons-material/Battery50';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SearchIcon from '@mui/icons-material/Search';

import RibbonApps from "./RibbonApps";

// In this example Bootsrap is installed via NPM. Here it gets imported from the "./node_modules" folder:
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";
import "./RibbonBarContext.css"

const RibbonBarContext = ({backgroundVideoUrl = "/video/context_animated_alpha.webm", 
                          title = "Introduction to Mathematics", 
                          initialTime = "00:12"}) => {

  const [time, setTime] = useState(initialTime);
  const [playerInstance, setPlayerInstance] = useState([]);

  ref = player => {
    setPlayerInstance(player)
  }

  const handlePlay = () => {
    console.log('onPlay')
    playerInstance.setState({ playing: true })
  }

  const handleProgress = state => {
    console.log('onProgress', state)
  }

  const handleDuration = (duration) => {
    console.log('onDuration', duration)
  }

  const switchMode = mode => {
    console.log(mode);
}

  return (
    <div className="ribbon__bar">
        <div className="ribbon">

      <Tabs className="ribbon__barTabs" defaultActiveKey={1} transition={false}>
        <Tab className="ribbon__barTab" eventKey={0} title={<SearchIcon style={{fontSize: "1.8em"}} />}>
          {/* <RibbonSearch logo={logo} pushEvent={pushEvent} /> */}
        </Tab>
                  <Tab className="ribbon__barTab" eventKey={1} title={<PlayArrowIcon style={{fontSize: "1.8em"}} />}>
        <div className="ribbon__barContextVideo">
        <div className='ribbon__barContextVideoWrapper'>
        <ReactPlayer
            ref={ref}
            className='react-player'
            url={backgroundVideoUrl}
            playing={true}
            loop={true}
            onPlay={handlePlay}
            onProgress={handleProgress}
            onDuration={handleDuration}
            width='100%'
            height='120px'
          />
          <div className="ribbon__barContextVideoOverlay">
            <div className="ribbon__barContext">
                {/* // style={{backgroundImage: (!backgroundVideoUrl && backgroundImageUrl) ? `url(${backgroundImageUrl})` : 'none',
                // animation: 'contextbar__colorcycle 20s infinite',
                // backgroundRepeat: 'no-repeat',
                // backgroundSize: '100vw'}} > */}

              <h2 className="ribbon__barContextTitle">{title}</h2>
              {/* <img className="ribbon__barLicense" src="/images/logo/cc-by-sa-4.0-horizontal_black.svg" /> */}
              {/* <ContextCarousel slides={SLIDES} options={OPTIONS} /> */}
              {/* <h4 className="ribbon__barContextTime">{time}</h4> */}
            </div>
          </div>
        </div>
      </div>
        </Tab>
        <Tab className="ribbon__barTab" eventKey={2} title={<AppsIcon style={{fontSize: "1.8em"}} />}>
          <RibbonApps username={"username"} avatar={"/locale/english.jpg"}  />
        </Tab>
        <Tab className="ribbon__barTab" eventKey={3} title={<DescriptionIcon style={{fontSize: "1.8em"}} />}>
          <p>Productivity</p>
        </Tab>
        <Tab className="ribbon__barTab" eventKey={4} title={<VideogameAssetIcon style={{fontSize: "1.8em"}} />}>
          <p>Play</p>
        </Tab>
        <Tab eventKey={5} title={<FitnessCenterIcon style={{fontSize: "1.8em"}} />}>
          <p>Fitness</p>
        </Tab>
        <Tab eventKey={6} title={<CalendarTodayIcon style={{fontSize: "1.8em"}} />}>
          <p>Calendar</p>
        </Tab>
        {/* <Tab className="ribbon__barTab" eventKey={6} title={<LocalHospitalIcon style={{fontSize: "1.8em"}} />}>
          <RibbonMedical pushEvent={pushEvent} /> */}
        <Tab eventKey={7} title={<LocalLibraryIcon style={{fontSize: "1.8em"}} />}>
          {/* <RibbonEncyclopediaCarousel pushEvent={pushEvent} subjects={subjects} /> */}
        </Tab>
        <Tab eventKey={8} title={<PublicIcon style={{fontSize: "1.8em"}} />}>
          <p>Globe</p>
        </Tab>
        <Tab eventKey={9} title={<img src="/icons/dinar.svg" alt="" style={{background: "black", width: "1.8em", borderRadius: "999px"}} />}>
          {/* <RibbonMint pushEvent={pushEvent} /> */}
        </Tab>
        <Tab eventKey={10} title={<PsychologyIcon style={{fontSize: "1.8em"}} />}>
          <p>Ratiocination</p>
        </Tab>
        <Tab eventKey={11} title={<LanguageIcon style={{fontSize: "1.8em"}} />}>
          {/* <Locale pushEvent={pushEvent} locales={locales} languagelocaleHeight={120} /> */}
        </Tab>
        <Tab eventKey={12} title={<AccessibleIcon style={{fontSize: "1.8em"}} />}>
          <p>Accessibility</p>
        </Tab>
        <Tab eventKey={13} title={<LockIcon style={{fontSize: "1.8em"}} />}>
          <p>Lock</p>
        </Tab>
        <Tab eventKey={14} title={<ShutterSpeedIcon style={{fontSize: "1.8em"}} />}>
          <p>Watcher</p>
        </Tab>
        <Tab eventKey={15} title={<img src="/images/quantumsand-experimental-hourglass.svg" style={{width: "1.6em"}} />}>
          <p>Quantum Sand</p>
        </Tab>
        <Tab eventKey={16} title={<CodeIcon style={{fontSize: "1.8em"}} />}>
          <p>Code</p>
        </Tab>
        <Tab eventKey={17} title={<RadarIcon style={{fontSize: "1.8em"}} />}>
          <p>Geospatial sensing</p>
        </Tab>
        <Tab eventKey={18} title={<RadioIcon style={{fontSize: "1.8em"}} />}>
          <p>Radio</p>
        </Tab>
        <Tab eventKey={19} title={<FingerprintIcon style={{fontSize: "1.8em"}} />}>
          <p>Biometric database</p>
        </Tab>
        <Tab eventKey={20} title={<SettingsIcon style={{fontSize: "1.8em"}} />}>
          <p>Settings</p>
        </Tab>
        <Tab eventKey={21} title={<CopyrightIcon style={{fontSize: "1.8em"}} />}>
          <p>Copyright</p>
        </Tab>
        <Tab eventKey={22} title={<InfoIcon style={{fontSize: "1.8em"}} />}>
          <p>Information</p>
        </Tab>
        <Tab eventKey={23} title={<SignalWifi1BarIcon style={{fontSize: "1.8em"}} />}>
          <p>Wifi</p>
        </Tab>
        <Tab eventKey={24} title={<Battery50Icon style={{fontSize: "1.8em"}} />}>
          <p>Battery</p>
        </Tab>
      </Tabs>
</div>
</div>

  )
};

export default RibbonBarContext;
