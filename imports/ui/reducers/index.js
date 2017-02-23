/**
 * Created by Wayuki on 20-Feb-17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appPage from './appReducer';
import teacherPage from './teacherReducer';

const rootReducer = combineReducers({
    appPage,
    teacherPage,
    routing: routerReducer,
});

export default rootReducer;
