import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardShowing from './CardShowing';
import CardHidden from './CardHidden';

export default class Card extends Component {
    render() {
        const {suit, value, showing, onClick} = this.props;
        const showingCard = <CardShowing suit={suit} value={value}/>;
        const hiddenCard = <CardHidden onClick={onClick}/>;
        const displayingCard = showing ? showingCard : hiddenCard;

        return (displayingCard);
    }
}

Card.defaultProps = {
    round: 0
};

Card.propTypes = {
    onClick: PropTypes.func,
    showing: PropTypes.bool,
    suit: PropTypes.string,
    value: PropTypes.number
};
