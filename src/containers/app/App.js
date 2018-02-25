import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { addNavigationHelpers } from 'react-navigation';

// Here to import root component, reducer, saga
import AppNavigator from '../navigators/AppNavigator';
import reducers from '../../reducers';
import rootSaga from '../../sagas';

// confiure store
const sagaMiddleware = createSagaMiddleware();

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
export const addListener = createReduxBoundAddListener("root");

const middleware = [
    navigationMiddleware,
    sagaMiddleware,
    logger,
];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

// Other configs
console.disableYellowBox = true;

// App: root component
export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
                    <AppNavigator />
                </View>
            </Provider>
        );
    }
}
const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});

export default AppWithNavigationState;
