import React from "react";
import Deck from "./Deck";

describe('Deck', function () {
    const component = new Deck();

    it('should start with 52 cards', function () {
        component.initDeck();
        expect(component.availableCards.length).toEqual(52);
        expect(component.dealtCards.length).toEqual(0);
    });

    it('should shuffle the deck', function () {
        component.shuffleCards();
        const d = new Deck();
        d.initDeck();
        expect(component.availableCards).not.toEqual(d.availableCards);
    });

    it('should return cards when asked', function () {
        let cards = component.getCards(5);
        expect(cards.length).toEqual(5);
        expect(component.availableCards.length).toEqual(47);
        expect(component.dealtCards.length).toEqual(5);
    });
});