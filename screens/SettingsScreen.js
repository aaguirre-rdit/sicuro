import React from 'react';
import { View, Button } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import { Icon } from 'react-native-elements';
export default class SettingsScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  render() {

    return (
      <View>
        <Button
          onPress={() =>
            this.props.navigation.openDrawer()
          }
          title="Go to Maps"
        />
      <ExpoConfigView/>
      </View>
      );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
  drawerLabel: 'Settings',
  drawerIcon: ({ tintColor }) => (
    <Icon
      type={'material-community'}
      name={'settings-outline'}

    />
  ),
};
