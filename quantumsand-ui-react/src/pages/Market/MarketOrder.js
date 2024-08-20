import React from 'react';
import MarketHeader from './MarketHeader';
import MarketOrderBody from './MarketOrderBody';
import "./MarketOrder.css";

export default function MarketOrder({ logo, username, orders }) {
  return (
    <div>
      <MarketHeader logo={logo} username={username} />
      <div className="market__orders">
        <h1>Your orders</h1>


        {orders.map((order, index) => (
          <div key={order.id} className="market__orderBody">
            <MarketOrderBody order={order} />
          </div>
        ))}
      </div>
    </div>
  )
}
