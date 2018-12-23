import React from "react";
import {shallow} from "enzyme";
import Card from './Card';

describe('Active Card', function () {
    const component = shallow(<Card
                                onClick={jest.fn()}
                                suit={'H'}
                                value={'6'}
                                faceUp={false}
                                isActive={true}/>);

    it('should display the correct img (face up)', function () {
        //fileMocks.js and package.json moduleNameMapper
        expect(component.find('.card').props().src).toEqual('picture');
    });
});

describe('Non-Active Card', function () {
    const mockCallback = jest.fn();
    const component = shallow(<Card
        onClick={mockCallback}
        suit={'H'}
        value={'6'}
        faceUp={false}
        isActive={false}/>);

    it('should not call onclick', function () {
        component.find('.card').simulate('click');
        expect(mockCallback.mock.calls.length).toEqual(0);
    });
});