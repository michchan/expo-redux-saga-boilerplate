import {
    APP__LOAD_RESOURCES,
} from './types';

/**
 * Load Static resources e.g. images and fonts into the cached.
 * Prefetch remote resources (e.g. languages, app version info etc.).
 * Get stored auth token from local storageKeys (if any).
 * @param {Array} assets - A list of required assets, eg. [ require('./images/some.png') ]
 * @param {Object} fonts - A list of required fonts, eg. [ 'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf') ]
 */
export const loadAppResources = (assets=[], fonts={}) => ({
    type: APP__LOAD_RESOURCES,
    assets,
    fonts
});

