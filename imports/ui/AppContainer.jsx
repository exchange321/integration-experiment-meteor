/**
 * Created by Wayuki on 20-Feb-17.
 */
import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import AppRouter from './AppRouter.jsx';

const store = configureStore();

const AppContainer = () => (
    <Provider store={store}>
        <AppRouter store={store} />
    </Provider>
);

export default AppContainer;
