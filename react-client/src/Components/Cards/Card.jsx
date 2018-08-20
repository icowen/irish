import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardShowing from './CardShowing';
import CardHidden from './CardHidden';

export default class Card extends Component {
    render() {
        const {suit, value, showing} = this.props;
        const showingCard = <CardShowing suit={suit} value={value}/>;
        const hiddenCard = <CardHidden />;
        const displayingCard = showing ? showingCard : hiddenCard;

        return (displayingCard);
    }
}

Card.defaultProps = {
    showing: false
};

Card.propTypes = {
    showing: PropTypes.bool,
    suit: PropTypes.string,
    value: PropTypes.number
};
