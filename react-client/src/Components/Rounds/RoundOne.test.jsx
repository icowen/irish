import React from "react";
import {shallow} from "enzyme";
import Player from "../Player";
import RoundOne from "./RoundOne";
import mockCards from "../__Mocks__/mockCards"

describe('Round One', function () {
    const hand = mockCards.getHand();
    const component = shallow(<RoundOne players={[<Player id={1} cards={hand}/>,
                                                    <Player id={1} cards={hand}/>]}/>);

    it('should have the correct amount of players', function () {
        expect(component.length).toEqual(2);
    });
});