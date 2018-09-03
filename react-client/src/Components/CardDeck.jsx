import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CardDeck extends Component {
    constructor () {
        super(props);
        this.state = {
            availableCards: this.initializeDeck,
            cardCount: 52
        };
    }
    initializeDeck () {
        const suits = ['S', 'C', 'H', 'D'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const cardDeck = [];
        for (suit in suits) {
            for (value in values) {
                cardDeck.push(suit + value);
            }
        }
        return cardDeck;
    }

    getCards (numberOfCards) {
        const index = [];
        const returnCards = [];
        for(let i = 0; i < numberOfCards; i++) {
            let selected = Math.round(Math.random() * this.state.cardCount);
            index.push(selected);
            returnCards.push(this.state.availableCards[card]);
            this.setState({availableCards: this.state.availableCards.splice(selected, 1)});
        }
        return returnCards;
    }

    render() { return ( this.getCards(this.props.numberOfCards) ) }
}

CardDeck.propTypes = {
    numberOfCards: PropTypes.number
};
