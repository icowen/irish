import React from "react";
import {shallow} from "enzyme";
import Card from './Card';

const card = shallow(<Card suit={'Clubs'}
                           value={'King'}/>);

describe('card', function () {
    it('should have a suit', function () {
        expect(card.find('.card-suit').text()).toEqual('Clubs')
    });

    it('should have a value', function () {
    });
    expect(card.find('.card-value').text()).toEqual('King')
});