import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import * as Routes from '../../constants/routes';

import {
} from '../main';

import {
    DetailsScreen,
    HomeScreen,
    Screen1,
    Screen2,
} from '../../screens';

const HomeStack = StackNavigator({
  [Routes.HOME_SCREEN]: {screen: HomeScreen},
  [Routes.DETAILS_SCREEN]: {screen: DetailsScreen}
},{ headerMode: `${Platform.OS === 'ios' ? 'float' : 'screen'}` });

const SettingsStack = StackNavigator({
  [Routes.SCREEN_1]: {screen: Screen1},
  [Routes.SCREEN_2]: {screen: Screen2}
},{ headerMode: `${Platform.OS === 'ios' ? 'float' : 'screen'}` });

export const MainTabNavigator = TabNavigator({
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
}, {});

export default MainTabNavigator;
