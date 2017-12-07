import {
    APP__LOAD_RESOURCES_SUCCESS,
    APP__LOAD_RESOURCES_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    loggedIn: false,
    authToken: '',
};

export const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case APP__LOAD_RESOURCES_SUCCESS:
            return { ...state, authToken: action.authToken? action.authToken : '' };
        default:
            return state;
    }
};

export default auth;