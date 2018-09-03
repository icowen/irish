import RoundOne from "./RoundOne";
import React from "react";
import {shallow} from "enzyme";
import Card from "../Cards/Card";

describe('Round One', function () {
    const mockClick = jest.fn();
    const component = shallow(<RoundOne onClick={mockClick}
                                        round={2}/>);
    const cardOne = component.find('.card-one');

    it('should have 4 cards', function () {
        expect(component.find(Card).length).toEqual(4);
    });

    it('should pass in the correct click function to each card', function () {
        expect(cardOne.props().onClick).toEqual(mockClick);
    });
    it('should pass in if the card is showing', function () {
        expect(cardOne.props().showing).toEqual(true);
    });

    it('should pass in if the card is showing', function () {
        expect(component.find('.card-two').props().showing).toEqual(true);
    });

    it('should pass in if the card is showing', function () {
        expect(component.find('.card-three').props().showing).toEqual(false);
    });

    it('should pass in if the card is showing', function () {
        expect(component.find('.card-four').props().showing).toEqual(false);
    });
});