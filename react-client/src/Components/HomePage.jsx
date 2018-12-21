import React, { Component } from 'react';
import RoundOne from "./RoundOne/RoundOne";
import PlayersDropdown from "./PlayersDropdown";

export default class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            round: 0,
            numPlayers: 1,
            component: null

        };
        this.cardFlip = this.cardFlip.bind(this);
        this.selectPlayers = this.selectPlayers.bind(this);
    }

    cardFlip (){
        this.setState({round: this.state.round + 1});
    }

    selectPlayers(numPlayers) {
        this.setState({ numPlayers: numPlayers});
        this.setState({component: <RoundOne className={'one'}
                                            round={this.state.round}
                                            numPlayers={numPlayers}/>});
    }

    render() {
        let component = this.state.component ?
            this.state.component : <PlayersDropdown onClick={this.selectPlayers}/>;

        return (
            <div>
                <div className={'site-title'}>{`Irish Poker`}</div>
                <div className={'round'}>{`Round ${this.state.round}`}</div>
                <div className={'round'}>{`Number of Players: ${this.state.numPlayers}`}</div>
                {component}
            </div>
        )
    }
}