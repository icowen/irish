import React, { Component } from 'react';
import RoundOne from "./RoundOne/RoundOne";

export default class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            round: 4,
            players: 1
        };
        this.cardFlip = this.cardFlip.bind(this);
    }

    cardFlip (){
        this.setState({round: this.state.round + 1});
    }

    render() {
        return (
            <div>
                <div className={'site-title'}>{`Irish Poker`}</div>
                <div className={'round'}>{`Round ${this.state.round}`}</div>
                <RoundOne className={'one'}/>
            </div>
        )
    }
}