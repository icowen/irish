import React from "react";
import {shallow} from "enzyme";
import Card from './Card';
import CardShowing from './CardShowing';
import CardHidden from './CardHidden';

const card = shallow(<Card suit={'Clubs'}
                           value={13}/>);

describe('card that is not flipped over yet', function () {
    it('should not render a CardShowing', function () {
        expect(card.find(CardShowing).length).toEqual(0)
    });

    it('should render a CardHidden', function () {
        expect(card.find(CardHidden).length).toEqual(1)
    });
});

describe('card that is flipped over', function () {
    const cardShowing = shallow(<Card suit={'Clubs'}
                               value={13}
                                showing={true}/>);

    it('should not render a CardHidden', function () {
        expect(cardShowing.find(CardHidden).length).toEqual(0)
    });

    it('should render a CardShowing', function () {
        expect(cardShowing.find(CardShowing).props()).toEqual({'suit': 'Clubs', 'value': 13})
    });
});