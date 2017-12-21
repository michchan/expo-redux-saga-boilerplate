import { fork, takeEvery, takeLatest, all } from 'redux-saga/effects';

import {
    LOAD_APP_RESOURCES,
} from '../actions';

import {
    handleAppLoading,
} from './app_loading';

const root = function* root() {
    yield all([
        takeLatest(LOAD_APP_RESOURCES, handleAppLoading),
    ]);
}

export default root;