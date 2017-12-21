import { take, call, put, race, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {} from '../actions';

import {} from '../api';

/**
 * Some Saga
 */
export const handleSomething = function* handleSomething({ assets, fonts }) {
    yield put({ type: 'Some start type' });

    try {
        
    } catch (error) {
        yield put({ type: 'Some error type', error });
    }
}