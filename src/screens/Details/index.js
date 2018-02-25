import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { HOME_SCREEN } from '../../constants/routes';

export class DetailsScreen extends Component {
  static navigationOptions = {
      title: 'Details',
    };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>this is a Details screen</Text>
        <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate(HOME_SCREEN)}
        />
      </View>
    );
  }
}

export default DetailsScreen;
