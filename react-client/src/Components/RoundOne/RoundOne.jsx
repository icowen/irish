import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Deck from "../CardDeck/Deck";
import Player from "../Player";

export default class RoundOne extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deck: new Deck(),
            round: this.props.round
        };
        this.players = [];
        this.deal = this.deal.bind(this);
        this.deal();
    }

    deal () {
        let p = [];
        const n = this.props.numPlayers;
        for(let i = 0; i < n; i++) {
            let hand = this.state.deck.getCards(4);
            console.log('hand: ' + hand);
            p.push(<Player numPlayers={this.props.numPlayers}
                           cards={hand}
                           turn={this.state.turn}
                           id={i}/>);
        }
        this.players = p;
        console.log('players:' + this.players);
    }

    render() {
        return (
            <div>
                {this.players.map(player => (player))}
            </div>
        )
    }
}

RoundOne.propTypes = {
    numPlayers: PropTypes.number,
    round: PropTypes.number
};