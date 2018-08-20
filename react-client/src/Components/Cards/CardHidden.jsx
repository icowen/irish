import React, { Component } from 'react';
import cardback from './poptart.png';

export default class CardHidden extends Component {
    render() {
        return (
            <img className={'card back'} src={cardback} />
        )
    }
}
