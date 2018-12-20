import React from "react";
import {shallow} from "enzyme";
import CardHand from './CardHand'
import Card from "./Card";

describe('CardHand', function () {
    const component = shallow(<CardHand
        cards={[
                <Card suit={'H'} value={13} key={1}/>,
                <Card suit={'D'} value={1} key={2}/>,
                <Card suit={'C'} value={9} key={3}/>,
                <Card suit={'S'} value={10} key={4}/>
        ]}
    />);
    const cardOne = component.find('.cards').props().children[1];

    it('should display the correct number of cards', function () {
        expect(component.find('.cards').props().children.length).toEqual(4);
    });

    it('should pass in the correct params to each Card', function () {
        expect(cardOne.props.suit).toEqual('D');
        expect(cardOne.props.value).toEqual(1);
    });
});