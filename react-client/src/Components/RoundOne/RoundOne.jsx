import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardHand from "../CardDeck/CardHand";
import Deck from "../CardDeck/Deck";

export default class RoundOne extends Component {
    constructor (props) {
        super(props);
        this.state = {
            availableCards: new Deck(),
            round: 0,
            turn: 0
        };
    }

    render() {
        this.state.availableCards.initDeck();
        return (
            <div>
                <CardHand cards={this.state.availableCards.getCards(4)}/>
            </div>
        )
    }
}

RoundOne.propTypes = {

};