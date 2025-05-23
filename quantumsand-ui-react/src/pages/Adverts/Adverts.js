import React from 'react';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import "./Adverts.css";

export default function Adverts({ ads = [
  {id: 1, content: "Advertise here.", image: "/images//photo-1458847462994-d6e8043299f6.jpeg"},
  {id: 2, content: "Advertise here.", image: "/images/photo-1494412519320-aa613dfb7738.jpeg"},
  {id: 3, content: "Advertise here.", image: "/images/photo-1496450080853-5f78c43af9e9.jpeg"},
  {id: 4, content: "Advertise here.", image: "/images/photo-1496718412302-96e78da39b72.jpeg"}
] }) {

  // const styles = {
  //   fontFamily: "Noto Sans",
  //   textAlign: "center",
  //   width: "370px",
  //   height: "180px",
  //   paddingTop: "5px"
  // };
  
  const imgStyles = {
    width: "180px",
    height: "180px",
    objectFit: "cover"
  };
  
  const loadingImage =
    "data:image/gif;base64,\
    R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
  
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    controls: false,
    arrowKeys: true,
    loop: true,
    items: 1,
    gutter: 10,
    autoplay: true,
    speed: 500,
    responsive: {
      370: {
        items: 2
      }
    }
  };

const handleClick = (advert) => {
  console.log(advert);
};

return (
  <div className="adverts">
    {/* <p className="adverts__text">Advertise on QALB</p> */}
    <TinySlider settings={settings} >
    {ads.map((ad, index) => (
        <div key={index} style={{ position: "relative" }}  onClick={() => handleClick(ad)}>
          <img
            className={`tns-lazy-img`}
            src={loadingImage}
            data-src={ad.image}
            alt=""
            style={imgStyles}
          />
           <p className="advert__text">
            {ad.content}
          </p>
        </div>
      ))}
    </TinySlider>
  </div>
  )
}
