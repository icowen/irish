import React from "react";
import {shallow} from "enzyme";
import CardHand from './CardHand'
import mockCards from "../__Mocks__/mockCards";

describe('CardHand', function () {
    let cards = mockCards.getHand();
    const component = shallow(<CardHand cards={cards}/>);
    const cardOne = component.find('.cards').props().children[1];

    it('should display the correct number of cards', function () {
        expect(component.find('.cards').props().children.length).toEqual(4);
    });

    it('should pass in the correct params to each Card', function () {
        expect(cardOne.props.suit).toEqual('D');
        expect(cardOne.props.value).toEqual('1');
    });
});