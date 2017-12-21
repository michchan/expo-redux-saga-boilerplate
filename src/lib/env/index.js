import { Constants } from 'expo';

export const env = Constants.manifest.extra;
export const keys = require('../../env/keys');
export const values = require('../../env/values');
export const envKeys = keys;
export const envValues = values;

export const IS_DEV = env[keys.env] === values.env.dev;
export const IS_STAG = env[keys.env] === values.env.stag;
export const IS_PROD = env[keys.env] === values.env.prod;
