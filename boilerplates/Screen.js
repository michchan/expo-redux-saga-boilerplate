import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import {} from '../../components';
import Layout from '../../constants/layout';
import { colors, fontSize, grid } from '../../constants/theme';

export const SomeScreen = props => (
    <View style={styles.container}>
        <Text>this is a SomeScreen</Text>
    </View>
);

SomeScreen.defaultProps = {};
SomeScreen.propTypes = {};

const _getStyleProps = () => ({});

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: 'transparent',
        alignItems : 'center',
        justifyContent : 'center',
    },
});


export default SomeScreen;