import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
class NavBar extends Component {
    render() {
        return (<BrowserRouter>
            <header>
                <ul id="headerButtons">
                    <li className="navButton"><Link to="">Home</Link></li>
                </ul>
            </header>
            </BrowserRouter>
        )
    }
}
export default NavBar;