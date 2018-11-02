import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cardBack from './toptop.jpg';

export default class Card extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const {suit, value, showing} = this.props;
        let pic = showing ? require(`./CardFronts/${suit}${value}.png`) : cardBack;
        return <img className={'card'} src={pic} />;
    }
}

Card.propTypes = {
    showing: PropTypes.bool,
    suit: PropTypes.string,
    value: PropTypes.number
};
