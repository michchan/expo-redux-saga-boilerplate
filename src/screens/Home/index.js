import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

import { DETAILS_SCREEN } from '../../constants/routes';

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Header',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>this is a Home screen</Text>
        <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate(DETAILS_SCREEN)}
        />
      </View>
    );
  }
}

export default HomeScreen;
