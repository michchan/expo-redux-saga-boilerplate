import {
    LOAD_APP_RESOURCES_SUCCESS,
    LOAD_APP_RESOURCES_ERROR,
} from '../../actions';

const INITIAL_STATE = {
    loggedIn: false,
    authToken: '',
};

export const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_APP_RESOURCES_SUCCESS:
            return { ...state, authToken: action.authToken? action.authToken : '' };
        default:
            return state;
    }
};

export default auth;