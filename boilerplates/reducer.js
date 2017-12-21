import {} from '../../actions';

const INITIAL_STATE = {};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'Some imported type': {
            return { ...state, ...action.payload };
        }
        default:
            return state;
    }
};

export default reducer;