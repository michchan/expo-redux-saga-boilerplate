import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { SCREEN_1 } from '../../constants/routes';

export class Screen2 extends Component {
  static navigationOptions = {
    title: 'Screen2',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>this is Screen 2</Text>
        <Button
            title="Go to Screen1"
            onPress={() => this.props.navigation.navigate(SCREEN_1)}
        />
      </View>
    );
  }
}

export default Screen2;
