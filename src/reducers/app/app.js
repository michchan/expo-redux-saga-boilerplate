import {
    LOAD_APP_RESOURCES_SUCCESS,
} from '../../actions';
import { setItemToStore } from '../../lib/storage/index';
import { storageKeys } from '../../constants/keys';

const INITIAL_STATE = {
    isAppDirty: false, // whether the app is touched by any user login.
};

export const app = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_APP_RESOURCES_SUCCESS: {
            return { ...state, ...action.appState };
        }
        default:
            return state;
    }
};

export default app;