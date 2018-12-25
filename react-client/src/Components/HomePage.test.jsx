import HomePage from "./HomePage";
import React from "react";
import {shallow} from "enzyme";

describe('Home Page', function () {
    const component = shallow(<HomePage/>);

    it('should have the title "Irish Poker"', function () {
        expect(component.find('.site-title').text()).toEqual('Irish Poker');
    });

    it('should have a players dropdown', function () {
        expect(component.find('PlayersDropdown').length).toEqual(1);
        expect(component.find('RoundOne').length).toEqual(0);
    });

    it('should have a Round one once players dropdown is clicked', function () {
        component.instance().selectPlayers(9);
        expect(component.find('RoundOne').length).toEqual(1);
        expect(component.find('RoundOne').props().players.length).toEqual(9);
        expect(component.find('PlayersDropdown').length).toEqual(0);
    });

    it('should move to round two once round one is over', function () {
        let instance = component.instance();
        instance.selectPlayers(1);
        instance.cardFlip();
        instance.cardFlip();
        instance.cardFlip();
        instance.cardFlip();
        expect(component.find('RoundTwo').length).toEqual(1);

    });
});