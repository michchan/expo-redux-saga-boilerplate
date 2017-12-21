import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';

import { AppLoadingError } from '../../components';

import { assetImages } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import { loadAppResources, resetToMainRoute, resetToSignInRoute } from '../../actions';

const IMAGES_TO_LOAD = _.toArray(assetImages);

const FONTS_TO_LOAD = {
    ...Ionicons.font,
    ...fonts
}

class _AppLoadingScreen extends Component  {
    static propTypes = {
        // functions
        loadResources: PropTypes.func.isRequired,
        resetRoute: PropTypes.func.isRequired,      
        // booleans
        loading: PropTypes.bool.isRequired,
        isAppReady: PropTypes.bool.isRequired,
        hasAuthToken: PropTypes.bool.isRequired,
    }

    componentWillMount() {
        this.props.loadResources();
    }

    componentWillReceiveProps(nextProps) {
        this._handleNewProps({ ...nextProps });
    }

    render() {
        const { loadingError, loading, loadResources, } = this.props;

        if( loadingError && ! loading ) {
            return (
                <AppLoadingError 
                    onReload={loadResources}
                    disabled={loading}
                    message={loadingError}
                />
            );
        }

        return (<AppLoading/>);
    }

    _handleNewProps = props => {
        if( props.isAppReady ) {
            this._handleFinishLoading(props);
        } else if( props.loadingError ) {
            this._handleLoadingError(props.loadingError);
        }
    }

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn('Loading ERROR: ', error);
    };

    _handleFinishLoading = (props) => {
        console.log('All Pre-loading complete!');
        props.resetRoute(props.hasAuthToken, props.isAppDirty);
    };
}

const mapStateToProps = (state, ownProps) => ({
    loading: state.ui.appLoading.loading,
    isAppReady: state.ui.appLoading.ready,
    loadingError: state.ui.appLoading.error,
    hasAuthToken: !!state.auth.authToken, // replaced with some states
    isAppDirty: state.app.isAppDirty,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadResources: () => dispatch(loadAppResources(IMAGES_TO_LOAD, FONTS_TO_LOAD)),
    /**
     * Reset route to auth route or main route when all resources is ready.
     * At this point, the flag whether an auth token is stored in the app should be determined.
     */
    resetRoute: (hasAuthToken, isAppDirty) => {
        console.log('resetRoute');
        dispatch(hasAuthToken? resetToMainRoute(): resetToSignInRoute());
    }
});

export const AppLoadingScreen = connect(mapStateToProps, mapDispatchToProps)(_AppLoadingScreen);

export default AppLoadingScreen;