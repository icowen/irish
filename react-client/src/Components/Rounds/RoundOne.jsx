import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RoundOne extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (this.props.players.map(player => (player)))
    }
}

RoundOne.propTypes = {
    players: PropTypes.array
};