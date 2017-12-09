import { NavigationActions } from 'react-navigation';

import {
    MAIN_ROUTE,
    SIGN_IN_ROUTE,
} from '../constants/routes';
import { AppNavigator } from '../containers/AppNavigator';

import { NAV__RESET_TO_MAIN, NAV__RESET_TO_SIGN_IN } from '../actions/types';

const INITIAL_STATE = AppNavigator.router.getStateForAction(NavigationActions.init());

const getResetAction = (routeName) => NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
        NavigationActions.navigate({ routeName }),
    ],  
});

export const nav = (state = INITIAL_STATE, action) => {
    let nextState;
    
    switch (action.type) {
        case NAV__RESET_TO_SIGN_IN:
        {
            const resetToSignInAction = getResetAction(SIGN_IN_ROUTE);
            nextState = AppNavigator.router.getStateForAction(resetToSignInAction, state);
            break;
        }
        case NAV__RESET_TO_MAIN:
        {
            const resetToMainAction = getResetAction(MAIN_ROUTE);
            nextState = AppNavigator.router.getStateForAction(resetToMainAction, state);
            break;
        }
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
};

export default nav;
