import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardHand from "../CardDeck/CardHand";
import Deck from "../CardDeck/Deck";
import Player from "../Player";

export default class RoundOne extends Component {
    constructor (props) {
        super(props);
        this.state = {
            availableCards: new Deck().initDeck(),
            round: this.props.round,
            players: [],
            numPlayers: this.props.numPlayers,
            turn: 0
        };
        this.deal = this.deal.bind(this);
    }

    deal () {
        for(let player in Array(this.props.numPlayers).keys()) {
            let p = this.state.players;
            this.setState({players: [...p, new Player({cards: this.state.availableCards.getCards(4),
                                                       turn: this.state.turn,
                                                       numPlayers: this.state.numPlayers,
                                                       id: player})]
            });
        }
    }

    render() {
        this.deal();
        console.log(this.state.availableCards.length);
        return (
            <div>
                {this.state.players.map(player => (
                    player
                ))}
            </div>
        )
    }
}

RoundOne.propTypes = {
    numPlayers: PropTypes.number,
    round: PropTypes.number
};