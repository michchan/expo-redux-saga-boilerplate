import { fork, takeEvery, takeLatest, all } from 'redux-saga/effects';

import {
    APP__LOAD_RESOURCES,
} from '../actions/types';

import {
    handleAppLoading,
} from './app';

const root = function* root() {
    yield all([
        takeLatest(APP__LOAD_RESOURCES, handleAppLoading),
    ]);
}

export default root;