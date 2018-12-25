import React from "react";
import {shallow} from "enzyme";
import mockCards from '../__Mocks__/mockCards';
import RoundTwo from "./RoundTwo";
import Player from "../Player";

describe('Round Two', function () {
    const hand = mockCards.getHand();
    const board = mockCards.getRoundTwoBoard();
    const component = shallow(<RoundTwo players={[<Player id={1} cards={hand}/>]}
                                        boardCards={board}/>);

    it('should display two rows of 4 cards', function () {
        expect(component.find('.cards').length).toEqual(2);
        expect(component.find('.cards').first().props().children.length).toEqual(4);
    });

    it('should have 1 player', function () {
        expect(component.find('.players').length).toEqual(1);
    });

    it('should have faceUp cards for the player', function () {
        expect(component.find('.players').props().children[0].props.faceUpCards).toEqual(true);

    });
});