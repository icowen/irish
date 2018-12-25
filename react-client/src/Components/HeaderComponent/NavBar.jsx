import React, { Component } from 'react';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
class NavBar extends Component {
    render() {
        return (<BrowserRouter>
            <header>
                <ul id="headerButtons">
                    <div className={'site-title'}>{`Irish Poker`}</div>
                </ul>
            </header>
            </BrowserRouter>
        )
    }
}
export default NavBar;