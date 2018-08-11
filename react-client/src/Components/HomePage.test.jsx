import HomePage from "./HomePage";
import React from "react";
import {shallow} from "enzyme";
import Card from './Cards/Card'

describe('Home Page', function () {
    const component = shallow(<HomePage/>);

    it('should have the title "Irish Poker"', function () {
        expect(component.find('.site-title').text()).toEqual('Irish Poker');
    });

    it('should have 4 cards', function () {
        expect(component.find(Card).length).toEqual(4);
    });
});