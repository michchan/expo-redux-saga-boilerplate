import { take, call, put, race, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
    APP__LOAD_RESOURCES_STARTED,
    APP__LOAD_RESOURCES_SUCCESS,
    APP__LOAD_RESOURCES_ERROR,
} from '../actions/types';

import { storageKeys } from '../constants/keys';
import { loadResourcesAsync } from '../lib/caching';
import { getItemFromSecureStore } from '../lib/storage';

/**
 * App Loading Saga
 */
export const handleAppLoading = function* handleAppLoading({ assets, fonts }) {
    yield put({ type: APP__LOAD_RESOURCES_STARTED });

    try {
        const { loaded, timeout } = yield race({
            loaded: all({
                static: call(loadResourcesAsync, assets, fonts),
                authToken: call(getItemFromSecureStore, storageKeys.authToken),
            }),
            timeout: call(delay, 7000),
        });
        
        if(loaded) {
            yield put({ type: APP__LOAD_RESOURCES_SUCCESS, authToken: loaded.authToken });
        } else {
            // if timeout, throw an error to catch block
            throw new Error('Time out');
        }        
    } catch (error) {
        yield put({ type: APP__LOAD_RESOURCES_ERROR, error });
    }
}