import React, { Component } from 'react';
import Card from "./Cards/Card";

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className={'site-title'}>{'Irish Poker'}</div>
                <Card suit={'Clubs'} value={'King'} />
                <Card suit={'Spades'} value={'2'} />
                <Card suit={'Hearts'} value={'10'} />
                <Card suit={'Diamonds'} value={'Ace'} />
            </div>
        )
    }
}
export default HomePage;