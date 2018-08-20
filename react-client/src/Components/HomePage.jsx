import React, { Component } from 'react';
import Card from "./Cards/Card";

class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            round: 1
        }
    }


    render() {

        return (
            <div>
                <div className={'site-title'}>{`Irish Poker`}</div>
                <div className={'round'}>{`Round ${this.state.round}`}</div>
                <div className={'cards'}>
                    <Card className={'card-one'} suit={'diamonds'} value={13} showing={true}/>
                    <Card className={'card-two'} suit={'hearts'} value={12} showing={true}/>
                    <Card className={'card-three'} suit={'clubs'} value={1} showing={false}/>
                    <Card className={'card-four'} suit={'spades'} value={5} showing={false}/>
                </div>
        </div>
        )
    }
}
export default HomePage;