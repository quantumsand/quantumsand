import React from 'react';
import MarketBasketBody from "./MarketBasketBody";
import MarketHeader from "./MarketHeader";

export default function MarketBasket({ basket, username, logo }) {
  return (
    <div className="market">
      <MarketHeader logo={logo} username={username} />
      <MarketBasketBody basket={basket} username={username} />
    </div>
  )
}
