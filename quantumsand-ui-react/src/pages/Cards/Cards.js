import React from 'react';
import CardsHeader from './CardsHeader';
import CardsButtons from './CardsButtons';
import TinderCard from 'react-tinder-card';
import './Cards.css';

export default function Cards({ cards = [
      {
        id: 1,
        url: "/cards/snow_cropped.jpg",
        name: "?"
      },
      {
        id: 2,
        url: "/cards/snow_cropped.jpg",
        name: "?"
      },
      {
        id: 3,
        url: "/cards/snow_cropped.jpg",
        name: "?"
      },
      {
        id: 4,
        url: "/cards/snow_cropped.jpg",
        name: "?"
      },
      {
        id: 5,
        url: "/cards/snow_cropped.jpg",
        name: "?"
      },
      {
        id: 6,
        url: "/cards/snow_cropped.jpg",
        name: "?"
      }
    ], logo = "/icons/coracaozinho-para-o-luiz-otavio.svg" }) {

  function matchd(direction, card) {
    console.log('removing: ' + card.name + ', direction: ' + direction);
  }

  function outOfFrame(card) {
    console.log(card.name + ' left the screen!')
  }

  return (
    <div className="cards">
      <CardsHeader logo={logo} />

      <div className="cards__cardContainer">
        {cards.map(card => (
          <TinderCard
            className="cards__card"
            key={card.id}
            preventmatch={['up', 'down']}
            onmatch={(dir) => matchd(dir, card)}
            onCardLeftScreen={() => outOfFrame(card)}
          >
            <div
              style={{ backgroundImage: `url(${card.url})` }}
              className="cards__card">
              <h3>{card.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>

      <CardsButtons />
    </div>
  )
}
