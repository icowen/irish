import React, { Component } from 'react';
import Card from "../Cards/Card";
import PropTypes from 'prop-types';
import {getCards} from "../CardDeck";

export default class RoundOne extends Component {
    constructor(props) {
        super(props);
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
                {getCards(4)}
            </div>
        )
    }
}

RoundOne.propTypes = {
    onClick: PropTypes.func,
    round: PropTypes.number
};