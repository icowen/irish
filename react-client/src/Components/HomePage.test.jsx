import HomePage from "./HomePage";
import React from "react";
import {shallow} from "enzyme";

describe('Home Page', function () {
    const component = shallow(<HomePage/>);

    it('should have the title "Irish Poker"', function () {
        expect(component.find('.site-title').text()).toEqual('Irish Poker');
    });
});