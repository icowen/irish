import React from "react";
import {shallow} from "enzyme";
import CardHidden from './CardHidden';

const card = shallow(<CardHidden onClick={() => {return 12}}/>);

describe('card', function () {
    it('should have an image', function () {
        expect(card.find('.card .back').length).toEqual(1);
    });

    it('should pass in the correct onClick function', function () {
        expect(card.find('div').props().onClick()).toEqual(12);
    });
});