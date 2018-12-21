import Card from "./Card";
import React from "react";

export default class Deck{
    constructor() {
        this.availableCards = [];
        this.dealtCards = [];
        this.initDeck();
    }

    initDeck() {
        let deck = [];
        const suits = ['H', 'D', 'S', 'C'];
        const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        for (let suit in suits) {
            for (let value in values) {
                deck.push(<Card suit={suits[suit]}
                                value={values[value]}
                                onClick={()=> {}}
                                key={suits[suit] + values[value]}/>)
            }
        }
        this.availableCards = deck;
        this.shuffleCards();
    };

    shuffleCards (){
        let i = this.availableCards.length, rand = 0, temp;
        while (i--) {
            rand = Math.floor(Math.random() * (i + 1));

            temp = this.availableCards[i];
            this.availableCards[i] = this.availableCards[rand];
            this.availableCards[rand] = temp;
        }
    }

    getCards (numberOfCards) {
        let cards = [];
        for (let i = 0; i < numberOfCards; i++) {
            let card = this.availableCards.pop();
            cards.push(card);
            this.dealtCards.push(card);
        }
        return cards;
    }
}