import {
    NAV__RESET_TO_MAIN,
    NAV__RESET_TO_SIGN_IN,
} from './types';

/**
 * Reset the route to Main route.
 * Typical use case: user login.
 */
export const resetToMainRoute = () => ({
    type: NAV__RESET_TO_MAIN,
})

/**
 * Reset the route to Sign In route
 * Typical use case: user logout.
 */
export const resetToSignInRoute = () => ({
    type: NAV__RESET_TO_SIGN_IN,
})