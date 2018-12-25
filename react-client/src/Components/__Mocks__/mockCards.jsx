import Card from "../CardDeck/Card";
import React from "react";


export function getHand () {
    return [
        <Card suit={'H'} value={'13'} key={1}/>,
        <Card suit={'D'} value={'1'} key={2}/>,
        <Card suit={'C'} value={'9'} key={3}/>,
        <Card suit={'S'} value={'10'} key={4}/>
    ];
}

export function getRoundTwoBoard() {
    return [
        <Card suit={'H'} value={'13'} key={1}/>,
        <Card suit={'D'} value={'1'} key={2}/>,
        <Card suit={'C'} value={'9'} key={3}/>,
        <Card suit={'S'} value={'10'} key={4}/>,
        <Card suit={'S'} value={'2'} key={5}/>,
        <Card suit={'S'} value={'3'} key={6}/>,
        <Card suit={'S'} value={'4'} key={7}/>,
        <Card suit={'S'} value={'5'} key={8}/>
    ];
}

export default {getHand, getRoundTwoBoard};