/**
 * Created by Wayuki on 20-Feb-17.
 */
import React, { PropTypes, Component } from 'react';
import toastr from 'toastr';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as notificationActions from '../actions/appAction';

import NavLink from './common/NavLink.jsx';

@connect(
    ({ appPage }) => ({
        ...appPage,
    }),
    dispatch => ({
        actions: bindActionCreators(notificationActions, dispatch),
    }),
)
class App extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        notification: PropTypes.shape({
            hasNotification: PropTypes.bool.isRequired,
            type: PropTypes.string.isRequired,
            msg: PropTypes.string.isRequired,
        }).isRequired,
        actions: PropTypes.shape({
            resetNotification: PropTypes.func.isRequired,
        }).isRequired,
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.notification.hasNotification) {
            const { type, msg } = nextProps.notification;
            switch (type) {
                case 'success': {
                    toastr.success(msg);
                    break;
                }
                case 'error': {
                    toastr.error(msg);
                    break;
                }
                default: {
                    toastr.info(msg);
                    break;
                }
            }
            this.props.actions.resetNotification();
        }
    }

    render() {
        return (
            <div className="container">
                <header>
                    <span className="icn-logo"><i className="material-icons">code</i></span>
                    <ul className="main-nav">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/teachers">Teachers</NavLink></li>
                    </ul>
                </header>
                { this.props.children }
            </div>
        );
    }
}

export default App;
