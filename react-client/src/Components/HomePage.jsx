import React, { Component } from 'react';
import Card from "./Cards/Card";
import CardDeck from "./CardDeck";

export default class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            round: 0
        };
        this.cardFlip = this.cardFlip.bind(this);
    }

    cardFlip (){
        console.log('CLICK');
        this.setState({round: this.state.round + 1});
    }

    render() {
        return (
            <div>
                <div className={'site-title'}>{`Irish Poker`}</div>
                <div className={'round'}>{`Round ${this.state.round}`}</div>
                <div className={'cards'}>
                    <Card className={'card-one'} suit={'d'}
                          value={13} showing={this.state.round >= 1}
                          onClick={this.cardFlip}/>
                    <Card className={'card-two'} suit={'h'}
                          value={12} showing={this.state.round >= 2}
                          onClick={this.cardFlip}/>
                    <Card className={'card-three'} suit={'c'}
                          value={1} showing={this.state.round >= 3}
                          onClick={this.cardFlip}/>
                    <Card className={'card-four'} suit={'s'}
                          value={5} showing={this.state.round >= 4}
                          onClick={this.cardFlip}/>
                </div>
        </div>
        )
    }
}