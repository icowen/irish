import React from "react";
import {shallow} from "enzyme";
import CardHidden from './CardHidden';

const card = shallow(<CardHidden />);

describe('card', function () {
    it('should say hidden', function () {
        expect(card.text()).toEqual('Hidden!');
    });
});