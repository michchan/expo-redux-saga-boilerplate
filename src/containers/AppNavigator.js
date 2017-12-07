import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Platform, BackHandler } from 'react-native';
import {
    addNavigationHelpers,
    NavigationActions,
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import * as Routes from '../constants/routes';

import { 
    HomeScreen, 
    SignInScreen,
} from '../screens'

import AppLoadingScreen from './AppLoadingScreen';

/* Routes */
const MainTabNavigator = StackNavigator({
    [Routes.HOME_ROUTE]: { screen: HomeScreen },
}, {
    headerMode: 'none',
});

export const AppNavigator = StackNavigator({
    [Routes.APP_LOADING]: { screen: AppLoadingScreen },
    [Routes.SIGN_IN_ROUTE]: { screen: SignInScreen },
    [Routes.MAIN_ROUTE]: { screen: MainTabNavigator },
}, {
    headerMode: 'none',
});

/* Root Navigator */
class Navigation extends React.Component {
    static propTypes = {
        nav: PropTypes.object.isRequired,
    }

    componentWillMount() {
        if (Platform.OS !== 'android') {
            return;
        }

        BackHandler.addEventListener('hardwareBackPress', () => {
            const { dispatch, nav } = this.props;

            // This assumes that we always want to clsoe the app when you are at the first screen
            // of the top most navigator or at the first screen of the first level of nested navigators
            if (nav.index === 0) {
                if (!nav.routes[0].index) {
                    return false;
                } else if (nav.routes[0].index === 0) {
                    return false;
                }
            }

            dispatch(NavigationActions.back());

            return true;
        });
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress');
        }
    }

    render() {
        const { dispatch, nav, hasSession } = this.props;

        return (
            <AppNavigator
                navigation={addNavigationHelpers({ dispatch, state: nav })}
            />
        ); 
    }
}

const mapStateToProps = (state, ownProps) => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(Navigation);
