import React, { Component } from 'react';
import Card from "./Cards/Card";

class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            round: 0
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
                <div className={'cards'}>
                    <Card className={'card-one'} suit={'diamonds'}
                          value={13} showing={this.state.round >= 1}
                          onClick={this.cardFlip}/>
                    <Card className={'card-two'} suit={'hearts'}
                          value={12} showing={this.state.round >= 2}
                          onClick={this.cardFlip}/>
                    <Card className={'card-three'} suit={'clubs'}
                          value={1} showing={this.state.round >= 3}
                          onClick={this.cardFlip}/>
                    <Card className={'card-four'} suit={'spades'}
                          value={5} showing={this.state.round >= 4}
                          onClick={this.cardFlip}/>
                </div>
        </div>
        )
    }
}
export default HomePage;