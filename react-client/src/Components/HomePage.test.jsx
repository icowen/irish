import HomePage from "./HomePage";
import React from "react";
import {shallow} from "enzyme";
import Card from './CardDeck/Card'

describe('Home Page', function () {
    const component = shallow(<HomePage/>);
    const cardOne = component.find('.card-one');

    it('should have the title "Irish Poker"', function () {
        expect(component.find('.site-title').text()).toEqual('Irish Poker');
    });

    it('should have 4 cards', function () {
        expect(component.find(Card).length).toEqual(4);
    });

    it('should pass in a card value', function () {
        expect(cardOne.props().value).toEqual(13);
    });

    it('should pass in a card suit', function () {
        expect(cardOne.props().suit).toEqual('diamonds');
    });

    it('should pass in a card value', function () {
        expect(cardOne.props().showing).toEqual(false);
    });

    it('should pass in a card value', function () {
        expect(cardOne.props().onClick).toBeTruthy();
    });
});