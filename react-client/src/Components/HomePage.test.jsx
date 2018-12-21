import HomePage from "./HomePage";
import React from "react";
import {shallow} from "enzyme";

describe('Home Page', function () {
    const component = shallow(<HomePage/>);

    it('should have the title "Irish Poker"', function () {
        expect(component.find('.site-title').text()).toEqual('Irish Poker');
    });

    it('should have round one', function () {
        expect(component.find('.one').length).toEqual(1);
    });

    it('should pass in the correct props to round one', function () {
        let roundOne = component.find('.one');
        expect(roundOne.props().round).toEqual(0);
        expect(roundOne.props().numPlayers).toEqual(1);
    });

    it('should have a players dropdown', function () {
        expect(component.find('PlayersDropdown').length).toEqual(1);
    });
});