import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
//import { ReactReader } from 'react-reader';
import { EpubViewer} from 'react-epub-viewer';

import "./EBook.css";

export default function EBook({ epub = "/ebooks/shakespeare.epub", initialLocation}) {
  const [size, setSize] = useState(400)
  const renditionRef = useRef();
  const [location, setLocation] = useState(initialLocation)
  const ref = useRef();
  const [stepper, setStepper] = useState(0);

  const chronomap = [
    "epubcfi(/6/74!/4[x2._Muwatta.Arabic-English.LS-30]/2/172/1:535)",
    "epubcfi(/6/74!/4[x2._Muwatta.Arabic-English.LS-30]/2/194/7:3)"
  ];

  // const chronomap = [
  //   "epubcfi(/6/4!/4/2/1:0)",
  //   "epubcfi(/6/4!/4/28/1:61)",
  //   "epubcfi(/6/4!/4/12/1:181)",
  //   "epubcfi(/6/4!/4/68/1:98)"
  // ];

  const pageChanged = epubcfi => {
    console.log(`t: ${JSON.stringify(epubcfi)}`);
  }

  const locationChanged = epubcifi => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
    console.log(`t: ${JSON.stringify(epubcifi)}`)
  }
  const changeSize = newSize => {
    setSize(newSize)
  }
  useEffect(() => {
    if (renditionRef.current) {
      renditionRef.current.themes.fontSize(`${size}%`)
    }
  }, [size])

  // useEffect(() => {
  //   const intervalId = setInterval(() => {

  //     if (stepper < chronomap.length - 1) {
  //       setStepper(stepper + 1);
  //     } else {
  //       setStepper(0);
  //     }

  //     console.log("chronomap[stepper]: " + JSON.stringify(chronomap[stepper]));

  //     setLocation(chronomap[stepper])
  //   }, 2500);

  //   return () => clearInterval(intervalId); //This is important
  // }), []

  return (
    <div className="ebook">
      <EpubViewer url={epub} ref={ref} location={location} pageChanged={pageChanged}
      rendtionChanged={(rendition) => {
        renditionRef.current = rendition
        renditionRef.current.themes.fontSize(`${size}%`);
       }}
       />
            
      {/* <ReactReader
        location={location}
        locationChanged={locationChanged}
        url={epub}
        getRendition={(rendition) => {
          renditionRef.current = rendition
          renditionRef.current.themes.fontSize(`${size}%`);
          const spine_get = rendition.book.spine.get.bind(rendition.book.spine);
          rendition.book.spine.get = function(target) {
              var t = spine_get(target);
              console.log(t)
              while ((t == null) && target.startsWith("../")) {
                  target = target.substring(3);
                  t = spine_get(target);
              }
              return t;
          }
        }}
      /> */}
      {/* <button onClick={() => changeSize(Math.max(80, size - 10))}>-</button>
      <span>Current size: {size}%</span>
      <button onClick={() => changeSize(Math.min(130, size + 10))}>+</button> */}
    </div>
  )
}
