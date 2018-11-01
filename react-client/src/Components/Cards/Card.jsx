import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cardBack from './poptart.png';

export default class Card extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const {suit, value} = this.props;
        return (<div className={'faceup-card'}>
                    <div className={'card-suit'}>{suit}</div>
                    <div className={'card-value'}>{value}</div>
                </div>);
    }
}

Card.propTypes = {
    suit: PropTypes.string,
    value: PropTypes.number
};
