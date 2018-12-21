import React, { Component } from 'react';
import RoundOne from "./RoundOne/RoundOne";
import PlayersDropdown from "./PlayersDropdown";

export default class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            round: 0,
            players: 0
        };
        this.cardFlip = this.cardFlip.bind(this);
        this.selectPlayers = this.selectPlayers.bind(this);
    }

    cardFlip (){
        this.setState({round: this.state.round + 1});
    }

    selectPlayers(numPlayers) {
        this.setState({players: numPlayers});
    }

    render() {
        return (
            <div>
                <div className={'site-title'}>{`Irish Poker`}</div>
                <div className={'round'}>{`Round ${this.state.round}`}</div>
                <PlayersDropdown onClick={this.selectPlayers}/>
                <RoundOne className={'one'}/>
            </div>
        )
    }
}