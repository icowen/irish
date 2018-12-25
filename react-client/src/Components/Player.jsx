import React, { Component } from "react";
import CardHand from "./CardDeck/CardHand";
import PropTypes from 'prop-types';

export default class Player extends Component{
    constructor() {
        super();
    }

    flipCards() {
        return this.props.cards.map(card =>
            React.cloneElement(card, {faceUp: true}));
    }

    render() {
        let cards = this.props.faceUpCards ?
            this.flipCards() : this.props.cards;
        return(
            <div className={'player'}>
                <div>{`Player ${this.props.id}`}</div>
                <CardHand cards={cards}/>
            </div>
        );
    }
}

Player.propTypes = {
    cards: PropTypes.array,
    faceUpCards: PropTypes.bool,
    id: PropTypes.number
};