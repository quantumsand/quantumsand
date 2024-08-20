import React from 'react';
import MarketBasketProduct from "./MarketBasketProduct";
import MarketOrderTotal from "./MarketOrderTotal";
import "./MarketOrderBody.css";

export default function MarketOrderBody({ order }) {
  return (
    <div className="market__order">
      <h2>Order</h2>
      <p></p>
      <p className="market__orderId">
        <small>{order.id}</small>
      </p>

      {order.items.map((orderItem, index) => (
        <MarketBasketProduct key={orderItem.id}
          title={orderItem.title}
          price={orderItem.price}
          quantity={orderItem.quantity}
          image={orderItem.image}
          rating={orderItem.rating}
          currency={orderItem.currency}
          hideButton
        />
      ))}

      <MarketOrderTotal totalCurrencies={order.totalCurrencies} />
    </div>
  )
}
