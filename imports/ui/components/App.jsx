/**
 * Created by Wayuki on 20-Feb-17.
 */
import React, { PropTypes } from 'react';
import NavLink from './common/NavLink.jsx';

const App = ({ children }) => (
    <div className="container">
        <header>
            <span className="icn-logo"><i className="material-icons">code</i></span>
            <ul className="main-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </header>
        { children }
    </div>
);

App.propTypes = {
    children: PropTypes.element.isRequired,
};

export default App;
