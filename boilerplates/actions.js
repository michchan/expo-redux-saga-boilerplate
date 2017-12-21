const pfx = 'somepfx/prefix/';

/* ========= Actions ========= */

export const SOME_ACTION = pfx + 'SOME_ACTION';

/* ========= Action Creators ========= */

export const someAction = (arg) => ({
    type: SOME_ACTION,
    payload: arg
});

export default {
    SOME_ACTION,

    someAction,
};