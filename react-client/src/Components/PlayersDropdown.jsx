import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class PlayersDropdown extends Component {
    constructor() {
        super();
    }

    selectPlayers () {
        this.props.onClick;
    }

    showOptions() {
        document.getElementById("myDropdown").style.display("block");
    }

    render() {
        return (
            <div>
                <div className={"num-players"}>{"# of Players"}</div>
                <div className="dropdown">
                    <select id="myDropdown" className="dropdown-content">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                    </select>
                    <button className="dropbtn">Play</button>
                </div>
            </div>)
    }
}

PlayersDropdown.PropTypes = {
    onClick: PropTypes.func
};