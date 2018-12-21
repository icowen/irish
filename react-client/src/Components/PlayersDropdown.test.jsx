import React from "react";
import {shallow} from "enzyme";
import PlayersDropdown from "./PlayersDropdown";

describe('PlayersDropdown', function () {
    const component = shallow(<PlayersDropdown
        onClick={jest.fn()}
    />);

    it('should pass in the correct number of cards', function () {
        expect(component.find('select').props().value).toEqual(0);
        component.find('select').simulate('change', {target: { value : 9}});
        expect(component.find('select').props().value).toEqual(9);
    });
});