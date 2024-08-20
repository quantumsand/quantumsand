import React from 'react';
import "./MarketBasketSubtotal.css";

export default function MarketBasketSubtotal({ basket }) {
  return (
    <div className="market__basketSubtotal">
      <h2>Subtotal</h2>

      {basket.totalCurrencies.map((totalCurrency, index) => (
        <h3 key={totalCurrency.currency} className="market__orderTotalCurrency">
          {totalCurrency.total} {totalCurrency.currency}
          <img src={`/images/icons/${totalCurrency.currency}.svg`} alt={totalCurrency.currency} />
        </h3>
      ))}
      <small className="market__basketSubtotalGift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  )
}
