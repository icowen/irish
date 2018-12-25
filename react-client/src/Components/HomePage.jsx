import React, { Component } from 'react';
import RoundOne from "./Rounds/RoundOne";
import PlayersDropdown from "./PlayersDropdown";
import Deck from "./CardDeck/Deck";
import Player from "./Player";
import RoundTwo from "./Rounds/RoundTwo";

export default class HomePage extends Component {
    constructor (props) {
        super(props);
        this.cardFlip = this.cardFlip.bind(this);
        this.selectPlayers = this.selectPlayers.bind(this);
        this.state = {
            round: 0,
            numPlayers: 1,
            component: <PlayersDropdown onClick={this.selectPlayers}/>,
            deck: new Deck(this.cardFlip),
            players: [],
            section: 0
        };
    }

    cardFlip (){
        const newRound = this.state.round + 1;
        if(newRound >= this.state.numPlayers*4 && this.state.section === 1) {
            this.setState({ round: 0,
                            section: 2,
                            component: <RoundTwo players={this.state.players}
                                                 boardCards={this.state.deck.getCards(8)}/>})
        } else (this.setState({round: newRound}))
    }

    selectPlayers(numPlayers) {
        let p = [];
        for(let i = 0; i < numPlayers; i++) {
            let hand = this.state.deck.getCards(4);
            p.push(<Player cards={hand} id={i+1}/>);
        }
        this.setState({numPlayers: numPlayers,
                       players: p,
                       section: 1,
                       component: <RoundOne className={'one'}
                                            players={p}/>});
    }

    render() {
        return (
            <div className={'component'}>{this.state.component}</div>
        )
    }
}