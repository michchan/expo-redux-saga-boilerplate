import { combineReducers } from 'redux';

import {
    appLoading,
} from './ui';
import { 
    app,
    nav,
    auth,
} from './app';
import { 
} from './domain';


export default combineReducers({
    ui: combineReducers({
        appLoading,
    }),
    app,
    nav,
    auth,
});