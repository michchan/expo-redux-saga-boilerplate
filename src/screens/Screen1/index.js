import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { SCREEN_2 } from '../../constants/routes';

export class Screen1 extends Component {
  static navigationOptions = {
    title: 'Screen1',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>this is Screen 1</Text>
        <Button
            title="Go to Screen2"
            onPress={() => this.props.navigation.navigate(SCREEN_2)}
        />
      </View>
    );
  }
}

export default Screen1;
