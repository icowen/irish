import React, {Component} from 'react';
import Card from "./Cards/Card";

export default class CardDeck extends Component {
    constructor () {
        super();
        this.state = {
            availableCards: this.initializeDeck()
        };
        this.getCards = this.getCards.bind(this);
    }

    initializeDeck () {
        const suits = ['S', 'C', 'H', 'D'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const cardDeck = [];
        for (let suit in suits) {
            for (let value in values) {
                cardDeck.push(<Card key={suit + value} value={Number(value)} suit={suit} />);
            }
        }
        this.shuffleDeck(cardDeck);
        return cardDeck;
    }

    shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * i);

            let temp = deck[i];
            deck[i] = deck[randomIndex];
            deck[randomIndex] = temp;
        }
    }

    getCards (numberOfCards) {
        const index = [];
        const returnCards = [];
        for(let i = 0; i < numberOfCards; i++) {
            let selected = Math.round(Math.random() * 52);
            console.log(selected);
            index.push(selected);
            returnCards.push(<div>this.state.availableCards[selected]</div>);
            this.setState({availableCards: this.state.availableCards.splice(selected, 1)});
        }
        return returnCards;
    }

    render() { return( this.state.availableCards ) }
}
