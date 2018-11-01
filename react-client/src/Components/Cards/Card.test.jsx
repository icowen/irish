import React from "react";
import {shallow} from "enzyme";
import Card from './Card';

const card = shallow(<Card suit={'Clubs'}
                           value={13}
                           showing={false}
                           cardFlip={jest.fn()}/>);

describe('card that is face down', function () {
    it('should show a face down card', function () {
        expect(card.find('.facedown-card').length).toEqual(1);
    });
});

describe('card that is face up', function () {
    const cardShowing = shallow(<Card suit={'Clubs'}
                                      value={13}
                                      showing={true}
                                      cardFlip={jest.fn()}/>);

    it('should flip the card when clicked', function () {
        expect(cardShowing.find('.card-value').props().children).toEqual(13)
    });

    it('should display card suit', function () {
        expect(cardShowing.find('.card-suit').props().children).toEqual('Clubs')
    });
});