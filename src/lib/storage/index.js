import { SecureStore } from 'expo';
import { AsyncStorage } from 'react-native';

/**
 * 
 * @param {String} key 
 * @param {String} value
 * @param {Object} [options] 
 * @returns {Promise} A promise that will reject if value cannot be stored on the device.
 */
export const setItemToSecureStore = async (key, value, options={}) => SecureStore.setItemAsync(key, value, options);

/**
 * 
 * @param {String} key 
 * @param {Object} [options] 
 * @returns {Promise} A promise that resolves to the previously stored value, or null if there is no entry for the given key. The promise will reject if an error occurred while retrieving the value.
 */
export const getItemFromSecureStore = async (key, options={}) => SecureStore.getItemAsync(key, options);

/**
 * 
 * @param {String} key 
 * @param {Object} [options] 
 * @returns {Promise} A promise that will reject if the value couldn’t be deleted.
 */
export const deleteItemFromSecureStore = async (key, options={}) => SecureStore.deleteItemAsync(key, options);

/**
 * 
 * @param {String} key 
 * @param {String} value 
 * @param {Function} [errorCallback] 
 * @returns {Promise}
 */
export const setItemToStore = async (key, value, errorCallback) => AsyncStorage.setItem(key, value, errorCallback);

/**
 * 
 * @param {String} key 
 * @param {Function} [callback] - (error: ?Error, result: ?string) => void
 * @returns {Promise}
 */
export const getItemFromStore = async (key, callback) => AsyncStorage.getItem(key, callback);

/**
 * 
 * @param {String} key 
 * @param {Function} [errorCallback] 
 * @returns {Promise}
 */
export const deleteItemFromStore = async (key, errorCallback) => AsyncStorage.removeItem(key, errorCallback);