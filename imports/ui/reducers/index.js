/**
 * Created by Wayuki on 20-Feb-17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    routing: routerReducer,
});

export default rootReducer;
