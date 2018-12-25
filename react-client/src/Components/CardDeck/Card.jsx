import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cardBack from '../../Images/CardBacks/green_back.png';

export default class Card extends Component {
    constructor (props) {
        super(props);
        this.state = {
            src: cardBack
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        if(this.props.faceUp) {
            this.flipCard();
        }
    }

    flipCard() {
        const {value, suit} = this.props;
        this.setState({src: `${require(`../../Images/CardFronts/${value}${suit}.png`)}`});
    }

    onClick (){
            this.flipCard();
            this.props.onClick();
    }

    render() {
        return ( <img className={'card'}
                      src={this.state.src}
                      onClick={this.onClick}/>)
    }
}

Card.propTypes = {
    faceUp: PropTypes.bool,
    onClick: PropTypes.func,
    suit: PropTypes.string,
    value: PropTypes.string
};

