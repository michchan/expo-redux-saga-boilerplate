const pfx = 'app/nav/';

/* ========= Actions ========= */

export const RESET_TO_MAIN_ROUTE = pfx + 'RESET_TO_MAIN_ROUTE';
export const RESET_TO_SIGN_IN_ROUTE = pfx + 'RESET_TO_SIGN_IN_ROUTE';
export const CLEAR_ALL_BLOCKED_EFFECTS = pfx + 'CLEAR_ALL_BLOCKED_EFFECTS';

/* ========= Action Creators ========= */

/**
 * Reset the route to Main route.
 * Typical use case: user login.
 */
export const resetToMainRoute = () => ({
    type: RESET_TO_MAIN_ROUTE,
})

/**
 * Reset the route to Sign In route
 * Typical use case: user logout.
 */
export const resetToSignInRoute = () => ({
    type: RESET_TO_SIGN_IN_ROUTE,
})

export default {
    RESET_TO_MAIN_ROUTE,
    RESET_TO_SIGN_IN_ROUTE,

    resetToMainRoute,
    resetToSignInRoute,
}