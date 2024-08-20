import React, {useState} from 'react';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./MarketHeader.css";

export default function MarketHeader({ logo, username, pushEvent }) {
  const [input, setInput] = useState('');

  const search = e => {
    e.preventDefault();
    console.log(input);
    pushEvent('market-search-input', input);
  }

  return (
    <div className="market__header">
      <img
        className="market__headerLogo"
        src={logo}
        alt=""
      />

      <div className="market__headerSearch">
        <input className="market__headerSearchInput" type="text" value={input} onChange={e => setInput(e.target.value)} />
        <SearchIcon className="market__headerSearchIcon" onClick={search} />
      </div>

      <div className="market__headerNav">
        <div className="market__headerOption">
          <span className="market__headerOptionLineOne">
            Hello {username}
          </span>
          <span className="market__headerOptionLineTwo">
            Sign Out
          </span>
        </div>
        <div className="market__headerOption">
          <span className="market__headerOptionLineOne">
            Returns
          </span>
          <span className="market__headerOptionLineTwo">
            & Orders
          </span>
        </div>
        <div className="market__headerOption">
          <span className="market__headerOptionLineOne">
            Your
          </span>
          <span className="market__headerOptionLineTwo">
            Account
          </span>
        </div>

        <div className="market__headerOptionBasket">
          <ShoppingBasketIcon />
          <span className="market__headerOptionLineTwo market__headerBasketCount">
            0
          </span>
        </div>
      </div>
    </div>
  )
}
