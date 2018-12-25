import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardHand extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className={'cards'}>
                {this.props.cards.map(card =>(card))};
            </div>
        )
    }
}

CardHand.propTypes = {
    cards: PropTypes.array
};

