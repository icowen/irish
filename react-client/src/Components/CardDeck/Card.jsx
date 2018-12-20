import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cardBack from '../../Images/CardBacks/green_back.png';

export default class Card extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isAvailable: false,
            faceUp: this.props.faceUp
        };
        this.cardFlip = this.cardFlip.bind(this);
    }

    cardFlip (){
        this.setState({faceUp: !this.state.faceUp});
    }

    render() {
        const {suit, value} = this.props;
        let src = `${require(`../../Images/CardFronts/${value}${suit}.png`)}`;
        if(!this.state.faceUp) {
            src = cardBack;
        }

        return ( <img className={'card back'} src={src} onClick={this.cardFlip}/>)
    }
}

Card.defaultProps = {
    faceUp: false
};

Card.propTypes = {
    faceUp: PropTypes.bool,
    onClick: PropTypes.func,
    suit: PropTypes.string,
    value: PropTypes.string
};

