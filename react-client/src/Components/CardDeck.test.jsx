import React from "react";
import CardDeck from "./CardDeck";
import renderer from 'react-test-renderer';

describe('Card deck', function () {
    const component = renderer.create(<CardDeck />);

    it('should start out with 52 cards', function () {
        expect(component.getInstance().state.availableCards.length).toEqual(52);
    });
});