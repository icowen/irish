import React, { Component } from "react";
import CardHand from "./CardDeck/CardHand";
import PropTypes from 'prop-types';

export default class Player extends Component{
    constructor() {
        super();
    }

    render() {
        return(
            <div className={'player'}>
                <div>{`Player ${this.props.id}`}</div>
                <CardHand cards={this.props.cards}/>
            </div>
        );
    }
}

Player.propTypes = {
    cards: PropTypes.array,
    id: PropTypes.number
};