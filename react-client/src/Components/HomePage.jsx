import React, { Component } from 'react';
import RoundOne from "./RoundOne/RoundOne";
import PlayersDropdown from "./PlayersDropdown";
import Deck from "./CardDeck/Deck";
import Player from "./Player";

export default class HomePage extends Component {
    constructor (props) {
        super(props);
        this.cardFlip = this.cardFlip.bind(this);
        this.selectPlayers = this.selectPlayers.bind(this);
        this.state = {
            round: 0,
            numPlayers: 1,
            component: <PlayersDropdown onClick={this.selectPlayers}/>,
            deck: new Deck(this.cardFlip)
        };
    }

    cardFlip (){
        const newRound = this.state.round + 1;
        if(newRound >= this.state.numPlayers*4) {
            this.setState({round: 0, component: <RoundTwo />})
        } else (this.setState({round: newRound}))
    }

    selectPlayers(numPlayers) {
        let p = [];
        for(let i = 0; i < numPlayers; i++) {
            let hand = this.state.deck.getCards(4);
            p.push(<Player cards={hand}/>);
        }
        this.setState({numPlayers: numPlayers,
                       players: p,
                       component: <RoundOne className={'one'}
                                            players={p}/>});
    }

    render() {
        return (
            <div>
                <div className={'site-title'}>{`Irish Poker`}</div>
                <div className={'round'}>{`Round ${this.state.round}`}</div>
                <div className={'round'}>{`Number of Players: ${this.state.numPlayers}`}</div>
                {this.state.component}
            </div>
        )
    }
}