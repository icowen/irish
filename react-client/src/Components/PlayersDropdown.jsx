import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class PlayersDropdown extends Component {
    constructor() {
        super();
        this.state = {value: 0};
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onClick() {
        this.props.onClick(document.getElementById('myDropdown').value);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <div className={"num-players"}>{"# of Players"}</div>
                <div className="dropdown">
                    <select autoFocus id="myDropdown" className="dropdown-content"
                            value={this.state.value}
                            onChange={this.handleChange}>
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
                    <button type={'submit'} onClick={this.onClick} className="dropbtn">Play</button>
                </div>
            </div>)
    }
}

PlayersDropdown.propTypes = {
    onClick: PropTypes.func
};