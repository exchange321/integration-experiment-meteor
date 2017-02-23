/**
 * Created by Wayuki on 20-Feb-17.
 */
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App.jsx';
import HomePage from './components/home/HomePage.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import TeacherPage from './components/teachers/TeacherPage.jsx';

const AppRouter = ({ store }) => {
    const history = syncHistoryWithStore(browserHistory, store);
    return (
        <Router history={history}>
            <Route component={App}>
                <Route path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/teachers" component={TeacherPage} />
            </Route>
        </Router>
    );
};

export default AppRouter;
