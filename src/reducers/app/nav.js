import { NavigationActions } from 'react-navigation';

import {
    MAIN_ROUTE,
    AUTH_ROUTE,
} from '../../constants/routes';
import { RootNavigator } from '../../containers/navigators';

import { RESET_TO_MAIN_ROUTE, RESET_TO_SIGN_IN_ROUTE } from '../../actions';

const INITIAL_STATE = RootNavigator.router.getStateForAction(NavigationActions.init());

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
        case RESET_TO_SIGN_IN_ROUTE:
        {
            const resetToSignInAction = getResetAction(AUTH_ROUTE);
            nextState = RootNavigator.router.getStateForAction(resetToSignInAction, state);
            break;
        }
        case RESET_TO_MAIN_ROUTE:
        {
            const resetToMainAction = getResetAction(MAIN_ROUTE);
            nextState = RootNavigator.router.getStateForAction(resetToMainAction, state);
            break;
        }
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
};

export default nav;
