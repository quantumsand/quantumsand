import React from 'react';
import ServicesFooter from "./ServicesFooter";
import ServicesHeader from "./ServicesHeader";
import ServicesHome from "./ServicesHome";

import "./Services.css";

export default function Services ({ logo, avatar = "/wallpaper/rain.jpg", footerMessage, banner = {
  wallpaper: "/wallpaper/snow.jpg",
            title: "Get out and stretch your imagination",
            message: "Plan a different kind of getaway to uncover the hidden gems near you.",
            buttonMessage: "Explore nearby"
          }, services = {
            rows: [{
            id: 1,
            items: [{
                      id: 1,
                      image: "/wallpaper/forest.jpg",
                      currency: "dinar",
                      title: "Entire homes",
                      description: "Comfortable private places, with room for friends or family",
                      price: 2,
                      btc_price: "0.028",
                      period: "night",
                      rating: 4.5
                    },
                    {
                      id: 2,
                      image: "/wallpaper/forest.jpg",
                      currency: "dinar",
                      title: "Entire homes",
                      description: "Comfortable private places, with room for friends or family",
                      price: 2,
                      btc_price: "0.028",
                      period: "night",
                      rating: 4.1
                    }]
          },
          {
            id: 2,
            items: [{
                      id: 3,
                      image: "/wallpaper/snow.jpg",
                      currency: "dinar",
                      title: "Entire homes",
                      description: "Comfortable private places, with room for friends or family",
                      price: 2,
                      btc_price: "0.028",
                      period: "night",
                      rating: 4.3
                    },
                    {
                      id: 4,
                      image: "/wallpaper/snow.jpg",
                      currency: "dinar",
                      title: "Entire homes",
                      description: "Comfortable private places, with room for friends or family",
                      price: 2,
                      btc_price: "0.028",
                      period: "night",
                      rating: 4.7
                    },
                    {
                      id: 5,
                      image: "/wallpaper/snow.jpg",
                      currency: "dinar",
                      title: "Entire homes",
                      description: "Comfortable private places, with room for friends or family",
                      price: 2,
                      btc_price: "0.028",
                      period: "night",
                      rating: 4.9
                    }]
          },
          {
            id: 3,
            items: [{
                      id: 6,
                      image: "/wallpaper/beach.jpg",
                      currency: "dinar",
                      title: "Entire homes",
                      description: "Comfortable private places, with room for friends or family",
                      price: 2,
                      btc_price: "0.028",
                      period: "night",
                      rating: 4.6
                    }]
          }]
}
  
  
  , crypto = false }) {
  return (
    <div className="services">
      <ServicesHeader logo={logo} avatar={avatar} />
      <ServicesHome banner={banner} services={services} crypto={crypto} />
      <ServicesFooter logo={logo} footerMessage={footerMessage} />
    </div>
  )
}
