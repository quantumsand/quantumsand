import React from 'react';
import MarketBasketProduct from "./MarketBasketProduct";
import MarketBasketSubtotal from "./MarketBasketSubtotal";
import "./MarketBasketBody.css";

export default function MarketBasketBody({ basket, username }) {
  return (
    <div className="market__basket">
      <div className="market__basketLeft">
        <img className="market__basketAd" src="/images/heroes/lamps.jpg"
            alt="" />

        <div>
          <h3 className="market__basketHello">Hello, {username}</h3>
          <h2 className="market__basketTitle">
            Your shopping basket
          </h2>

          {basket.items.map((orderItem, index) => (
            <MarketBasketProduct key={orderItem.id}
              title={orderItem.title}
              price={orderItem.price}
              quantity={orderItem.quantity}
              image={orderItem.image}
              rating={orderItem.rating}
              currency={orderItem.currency}
            />
          ))}
        </div>
      </div>

      <div className="market__basketRight">
        <MarketBasketSubtotal basket={basket} />
      </div>
    </div>
  )
}
