import React, { Component } from 'react';
import Card from "../Cards/Card";
import PropTypes from 'prop-types';
import CardDeck from "../CardDeck";

export default class RoundOne extends Component {
    constructor(props) {
        super(props);
    }

    getCards() {
        const cards = [];
        for (let i = 0; i < 5; i++) {
            cards.push({suit: this.chooseSuit(), value: this.chooseValue()});
        }
        return cards;
    }

    chooseSuit() {
        const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
        return suits[Math.round(Math.random() * 3)];
    }

    chooseValue() {
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        return values[Math.round(Math.random() * 12)];
    }

    render() {
        const {onClick, round} = this.props;
        const cardList = this.getCards();
        let round1 = round >= 1;
        let round2 = round >= 2;
        let round3 = round >= 3;
        let round4 = round >= 4;
        return (
            <div className={'cards'}>
                <Card className={'card-one'}
                    card={cardList[0]}
                    showing={round1}
                    onClick={onClick}/>
                <Card className={'card-two'}
                    card={cardList[1]}
                    showing={round2}
                    onClick={onClick}/>
                <Card className={'card-three'}
                    card={cardList[2]}
                    showing={round3}
                    onClick={onClick}/>
                <Card className={'card-four'}
                      card={cardList[3]}
                      showing={round4}
                      onClick={onClick}/>
                <CardDeck numberOfCards={4}/>
            </div>
        )
    }
}

RoundOne.propTypes = {
    onClick: PropTypes.func,
    round: PropTypes.number
};