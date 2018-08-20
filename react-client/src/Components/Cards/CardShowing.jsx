import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardShowing extends Component {
    render() {
        const {suit, value} = this.props;

        return (
            <div>
                <div className={'card-suit'}>{suit}</div>
                <div className={'card-value'}>{value}</div>
            </div>
        )
    }
}

CardShowing.propTypes = {
    suit: PropTypes.string,
    value: PropTypes.number
};
