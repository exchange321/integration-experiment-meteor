/* eslint-disable no-undef */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import AppContainer from '../imports/ui/AppContainer.jsx';

window.Tether = require('tether');
require('bootstrap');

Meteor.startup(() => {
    render((
        <AppContainer />
    ), document.querySelector('#app'));
});
