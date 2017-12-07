import {
    APP__LOAD_RESOURCES_STARTED,
    APP__LOAD_RESOURCES_SUCCESS,
    APP__LOAD_RESOURCES_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    appLoading: {
        loading: false,
        ready: false,
        error: '',
    },
};

export const ui = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case APP__LOAD_RESOURCES_STARTED:
            return { ...state, appLoading: { loading: true, ready: false, error: '' } };
        case APP__LOAD_RESOURCES_SUCCESS:
            return { ...state, appLoading: { loading: false, ready: true, error: '' } };
        case APP__LOAD_RESOURCES_ERROR:
            return { ...state, appLoading: { loading: false, ready: false, error: action.error.message } };
        default:
            return state;
    }
};

export default ui;
