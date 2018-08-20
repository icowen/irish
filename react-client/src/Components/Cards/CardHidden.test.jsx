import React from "react";
import {shallow} from "enzyme";
import CardHidden from './CardHidden';

const card = shallow(<CardHidden />);

describe('card', function () {
    it('should say have an image', function () {
        expect(card.find('.card-back').length).toEqual(1);
    });
});