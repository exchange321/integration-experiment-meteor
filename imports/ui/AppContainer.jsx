/**
 * Created by Wayuki on 20-Feb-17.
 */
import React, { Component } from 'react';

class AppContainer extends Component {

    renderApp = () => (
        <div className="container">
            <h1 className="text-center">Hello World</h1>
        </div>
    );

    render() {
        return (
            this.renderApp()
        );
    }

}

export default AppContainer;
