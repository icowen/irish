import React, { Component } from "react";
import CardHand from "./CardDeck/CardHand";
import PropTypes from 'prop-types';

export default class Player extends Component{
    constructor() {
        super();
        this.state = {
            turn: false
        }
    }

    render() {
        return(
            <div>
                <CardHand cards={this.props.cards}/>
            </div>
        );
    }
}

Player.propTypes = {
    cards: PropTypes.array,
    id: PropTypes.number,
    numPlayers: PropTypes.number,
    turn: PropTypes.number
};