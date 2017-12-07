import { SecureStore } from 'expo';

/**
 * 
 * @param {String} key 
 * @param {String} value
 * @param {Object} [options] 
 * @returns {Promise} A promise that will reject if value cannot be stored on the device.
 */
export const setItemFromSecureStore = 
    async (key, value, options={}) => SecureStore.setItemAsync(key, value, options);

/**
 * 
 * @param {String} key 
 * @param {Object} [options] 
 * @returns {Promise} A promise that resolves to the previously stored value, or null if there is no entry for the given key. The promise will reject if an error occurred while retrieving the value.
 */
export const getItemFromSecureStore = 
    async (key, options={}) => SecureStore.getItemAsync(key, options);

/**
 * 
 * @param {String} key 
 * @param {Object} [options] 
 * @returns {Promise} A promise that will reject if the value couldn’t be deleted.
 */
export const deleteItemFromSecureStore = 
    async (key, options={}) => SecureStore.deleteItemAsync(key, options);