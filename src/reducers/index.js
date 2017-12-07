import { combineReducers } from 'redux';

import { nav } from './nav';
import { ui } from './ui';
import { auth } from './auth';

export default combineReducers({
    nav,
    ui,
    auth,
});