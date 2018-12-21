import React from "react";
import {shallow} from "enzyme";
import Player from "./Player";
import Card from "./CardDeck/Card";

describe('Player', function () {
    let cards = [
        <Card suit={'H'} value={'K'} key={1}/>,
        <Card suit={'D'} value={'A'} key={2}/>,
        <Card suit={'C'} value={'9'} key={3}/>,
        <Card suit={'S'} value={'10'} key={4}/>
    ];
    const component = shallow(<Player
        cards={cards}
        id={2}
        numPlayers={4}
        turn={0}
    />);

    it('should pass in the correct number of cards', function () {
        expect(component.find('CardHand').props().cards).toEqual(cards);
    });
});