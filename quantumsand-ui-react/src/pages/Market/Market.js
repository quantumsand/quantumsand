import React from 'react';
import MarketHeader from "./MarketHeader";
import MarketHome from "./MarketHome";
import "./Market.css";

export default function Market({ logo, hero, products, username, pushEvent, crypto = false }) {
  return (
    <div className="market">
      <MarketHeader pushEvent={pushEvent} logo={logo} username={username} />
      <MarketHome pushEvent={pushEvent} hero={hero} products={products} crypto={crypto} />
    </div>
  )
}
