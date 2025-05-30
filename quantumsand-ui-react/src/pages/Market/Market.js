import React from 'react';
import MarketHeader from "./MarketHeader";
import MarketHome from "./MarketHome";
import "./Market.css";

const sampleProducts = {
  rows: [{
            id: 1,
            items: [{
                      id: 1,
                      title: "Beads",
                      image: "/products/beads.jpg",
                      currency: "dirham",
                      slv_price: 5,
                      gld_price: "0.38",
                      rating: 4.5
                    },
                    {
                      id: 2,
                      title: "Vase",
                      image: "/products/vase.jpg",
                      currency: "dirham",
                      slv_price: 5,
                      gld_price: "0.38",
                      rating: 4.8
                    }]
          },
          {
            id: 2,
            items: [{
                      id: 3,
                      title: "Coffee",
                      image: "/products/coffee.jpg",
                      currency: "dirham",
                      slv_price: 5,
                      gld_price: "0.38",
                      rating: 4.6
                    },
                    {
                      id: 4,
                      title: "Macbeth",
                      image: "/products/macbeth.jpg",
                      currency: "dirham",
                      slv_price: 5,
                      gld_price: "0.38",
                      rating: 4.9
                    },
                    {
                      id: 5,
                      title: "Pencils",
                      image: "/products/pencils.jpg",
                      currency: "dirham",
                      slv_price: 5,
                      gld_price: "0.38",
                      rating: 4.85
                    }]
          },
          {
            id: 3,
            items: [{
                      id: 6,
                      title: "Plant",
                      image: "/products/plant.jpg",
                      currency: "dirham",
                      slv_price: 5,
                      gld_price: "0.38",
                      rating: 4.77
                    }]
          }]}

export default function Market({ logo = "/icons/coracaozinho-para-o-luiz-otavio-white.svg", hero = "/heroes/lamps.jpg", products = sampleProducts, username = "Natalia", pushEvent }) {
  return (
    <div className="market">
      <MarketHeader pushEvent={pushEvent} logo={logo} username={username} />
      <MarketHome pushEvent={pushEvent} hero={hero} products={products} />
    </div>
  )
}
