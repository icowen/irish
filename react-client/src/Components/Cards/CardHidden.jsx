import React, { Component } from 'react';
import cardback from './poptart.png';
import PropTypes from 'prop-types';


export default class CardHidden extends Component {
    render() {
        return (
            <div className={'card back'} onClick={this.props.onClick}>
                <img className={'card-picture'} src={cardback} />
            </div>
        )
    }
}

CardHidden.propTypes = {
    onClick: PropTypes.func
};
