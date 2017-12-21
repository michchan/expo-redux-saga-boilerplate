import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    addNavigationHelpers,
    NavigationActions,
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import * as Routes from '../../constants/routes';

import {
} from '../main';
import { 
    HomeScreen
} from '../../screens'

export const MainTabNavigator = TabNavigator({
    [Routes.HOME_SCREEN]: { screen: HomeScreen },
}, {});

export default MainTabNavigator;