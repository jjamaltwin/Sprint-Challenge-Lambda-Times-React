import React, { Component } from 'react';
import Card from './Card';
import propTypes from 'prop-types';


const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => {

        return (
          <Card key={card.headline} card={card} />
        );
      })
        }
    </div>
  )
}


Cards.propTypes = {
  card: propTypes.arrayOf(propTypes.object)
}

export default Cards;