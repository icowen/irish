import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.suit = this.props.suit;
        this.value = this.props.value;
    }
    render() {
        return (
            <div>
                <div className={'card-suit'}>{this.suit}</div>
                <div className={'card-value'}>{this.value}</div>
            </div>
        )
    }
}
