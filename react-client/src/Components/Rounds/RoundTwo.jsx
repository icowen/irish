import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RoundTwo extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return(
            <div className={'two'}>
                <div className={'table-cards'}>
                    <div className={'cards'}>
                        {this.props.boardCards.slice(0,4).map(card =>
                                card)
                        }
                    </div>
                    <div className={'cards'}>
                        {this.props.boardCards.slice(4,8).map(card =>
                                card)
                        }
                    </div>
                </div>
                <div className={'players'}>
                    {this.props.players.map(player => (
                        player))
                    }
                    </div>
            </div>
        )
    }
}

RoundTwo.propTypes = {
    players: PropTypes.array,
    boardCards: PropTypes.array
};