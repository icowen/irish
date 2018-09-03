import React from "react";
import CardDeck from "./CardDeck";

describe('Card deck', function () {
    const component = <CardDeck />;

    it('should start out with 52 cards', function () {
        expect(component.props().length).toEqual(52);
    });
});