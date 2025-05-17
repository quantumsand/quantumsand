import * as React from 'react';
import {useEffect} from 'react';
import { FillingBottle, FlippingSquare, Hypnosis } from "react-cssfx-loading";
import { SearchAddon } from 'xterm-addon-search';
import { FitAddon } from 'xterm-addon-fit';
import { Terminal } from 'xterm';
import "xterm/css/xterm.css";

import "./Loading.css";

export default function Loading({ message, progress, backgroundImageUrl, backgroundSize, showDinar }) {

  const term = new Terminal({
    cursorBlink: true,
    scrollback: 10000,
    tabStopWidth: 10
  });
  // const searchAddon = new SearchAddon();
  const fitAddon = new FitAddon();

  useEffect(() => {
            // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
            term.loadAddon(fitAddon);
            term.open(document.getElementById('xterm-container'));
            fitAddon.fit();
            term.focus();
            // term.loadAddon(searchAddon);
            term.write('Importing the latest central backup db\r\n')
            term.write('Syncing db\r\n');
             }, []);

  return (
    <div 
      className="loading"
      style={{backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
              backgroundPositionX: 'center',
              backgroundPositionY: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${backgroundSize}vh` }}>
      <div className="loading__statusLeft">
        <div className="loading__statusVisualisation">
          <Hypnosis color="#0d6efd" width="100px" height="100px" duration="3s" />
        </div>
        <div className="loading__statusVisualisation">
          <FlippingSquare color="#05fa69" width="100px" height="100px" duration="3s" />
        </div>
        <div className="loading__statusVisualisation">
          <FillingBottle color="#fc2f70" width="100px" height="100px" duration="3s" />
        </div>
        <div className="loading__statusInfo">
          <p>{message}</p>
          <h4>{progress}%</h4>
        </div>
        {showDinar && <div className="loading__statusVisualisation">
          <img src="/icons/dinar.svg" alt="" className="loading__dinar" style={{background: "black", borderRadius: "999%"}} />
        </div>}
      </div>
      <div className="loading__statusRight">
        <p>Debug messages...</p>
        <div id="xterm-container" className="terminal"></div>
      </div>
    </div>
  )
}
