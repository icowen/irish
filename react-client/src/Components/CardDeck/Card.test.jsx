import React from "react";
import {shallow} from "enzyme";
import Card from './Card';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Card', function () {
    const component = shallow(<Card
                                onClick={jest.fn()}
                                suit={'H'}
                                value={'6'}
                                faceUp={true}/>);

    it('should display the correct img (face up)', function () {
        //fileMocks.js and package.json moduleNameMapper
        expect(component.find('.card').props().src).toEqual('picture');
    });
});

describe('Card starting face down', function () {
    const component = shallow(<Card
        onClick={jest.fn()}
        suit={'H'}
        value={'6'}/>);

    it('should display the correct img (face down)', function () {
        expect(component.find('img').props().src).toEqual('picture');
    });
});