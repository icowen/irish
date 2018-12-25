import React from "react";
import {shallow} from "enzyme";
import Card from './Card';

describe('Card', function () {
    const mockCallback = jest.fn();
    const component = shallow(<Card
                                onClick={mockCallback}
                                suit={'H'}
                                value={'6'}
                                faceUp={false}/>);

    it('should display the correct img (face up)', function () {
        //fileMocks.js and package.json moduleNameMapper
        expect(component.find('.card').props().src).toEqual('picture');
    });

    it('should call onClick function when clicked', function () {
        component.find('.card').simulate('click');
        expect(mockCallback.mock.calls.length).toEqual(1);
    });
});