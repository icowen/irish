import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cardBack from './poptart.png';

export default class Card extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const {suit, value, showing, cardFlip} = this.props;
        let card = showing ?
            (<div className={'faceup-card'}>
                <div className={'card-suit'}>{suit}</div>
                <div className={'card-value'}>{value}</div>
            </div>
            ) :
            (<div className={'facedown-card'} onClick={cardFlip}>
                <img className={'card-picture'} src={cardBack} />
            </div>);

        return (card);
    }
}

Card.propTypes = {
    cardFlip: PropTypes.func,
    showing: PropTypes.bool,
    suit: PropTypes.string,
    value: PropTypes.number
};
