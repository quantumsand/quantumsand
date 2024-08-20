import React from 'react';
import "./MarketOrderTotal.css"

export default function MarketOrderTotal({ totalCurrencies }) {
  return (
    <div className="market__orderTotal">
      <h3 className="market__orderTotalTitle">Total:</h3>
      {totalCurrencies.map((totalCurrency, index) => (
        <h3 key={totalCurrency.currency} className="market__orderTotalCurrency">
          {totalCurrency.total} {totalCurrency.currency}
          <img src={`/images/icons/${totalCurrency.currency}.svg`} alt={totalCurrency.currency} />
        </h3>
      ))}
    </div>
  )
}
