import React from "react";
import {shallow} from "enzyme";
import CardShowing from './CardShowing';

const card = shallow(<CardShowing suit={'Clubs'}
                           value={13}/>);

describe('card', function () {
    it('should have a suit', function () {
        expect(card.find('.card-suit').text()).toEqual('Clubs')
    });

    it('should have a value', function () {
        expect(Number(card.find('.card-value').text())).toEqual(13);
    });
});