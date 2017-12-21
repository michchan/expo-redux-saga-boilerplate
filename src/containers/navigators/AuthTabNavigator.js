import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    addNavigationHelpers,
    NavigationActions,
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import { store } from '../app/App';

import * as Routes from '../../constants/routes';

import { 
    SignInScreen,
} from '../../screens'
import { } from '../auth';

export const AuthTabNavigator = TabNavigator({
    [Routes.SIGN_IN_SCREEN]: { screen: SignInScreen },
}, {
    headerMode: 'none',
    animationEnabled: true,
    swipeEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
        style: { display: 'none' }
    }
});

export default AuthTabNavigator;