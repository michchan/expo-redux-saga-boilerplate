import { take, call, put, race, all, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
    LOAD_APP_RESOURCES_STARTED,
    LOAD_APP_RESOURCES_SUCCESS,
    LOAD_APP_RESOURCES_ERROR,
} from '../actions';

import { storageKeys } from '../constants/keys';
import { loadResourcesAsync } from '../lib/caching';
import { getItemFromSecureStore, getItemFromStore, setItemToStore } from '../lib/storage';

/**
 * App Loading Saga
 */
export const handleAppLoading = function* handleAppLoading({ assets, fonts }) {
    yield put({ type: LOAD_APP_RESOURCES_STARTED });

    try {
        const { res, timeout } = yield race({
            res: all({
                static: call(loadResourcesAsync, assets, fonts),
                appState: call(getItemFromStore, storageKeys.appState),
                authToken: call(getItemFromSecureStore, storageKeys.authToken),
            }),
            timeout: call(delay, 7000),
        });
        
        if(res) {
            yield put({ 
                type: LOAD_APP_RESOURCES_SUCCESS, 
                authToken: res.authToken,
                appState: JSON.parse(res.appState),
            });
        } else {
            // if timeout, throw an error to catch block
            throw new Error('Time out');
        }        
    } catch (error) {
        yield put({ type: LOAD_APP_RESOURCES_ERROR, error });
    }
}