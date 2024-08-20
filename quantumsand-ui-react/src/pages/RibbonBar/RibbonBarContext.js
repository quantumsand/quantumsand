import React, { ref, useState, Component } from "react";
import { Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton } from "react-bootstrap-ribbon";
import ReactPlayer from 'react-player';
import { Tabs, Tab } from "react-bootstrap";
import AppsIcon from '@mui/icons-material/Apps';

import SearchIcon from '@mui/icons-material/Search';

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
                {/* 
                    `breakpoint` prop is optional and defines when to switch between mobile and desktop view. 
                    Possible values: "sm", "md", "lg", "xl", default: "md"
                    `height` is also optional. Default is "8rem".
                */}
                <Tabs className="ribbon__barTabs" defaultActiveKey={1} transition={false}>
                  <Tab className="ribbon__barTab" eventKey={0} title={<SearchIcon style={{fontSize: "1.8em"}} />}>
                    <Ribbon breakpoint="lg" height="6.5rem">
                        <p>RibbonBarContext</p>
                        {/* more Ribbon groups */}
                    </Ribbon>
                  </Tab>
                  <Tab className="ribbon__barTab" eventKey={1} title={<AppsIcon style={{fontSize: "1.8em"}} />}>
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
                </Tabs>
        </div>
    </div>
  )
};

export default RibbonBarContext;
