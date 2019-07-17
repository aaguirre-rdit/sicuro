import React from 'react';
import { View, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import MainHeader from '../../components/MainHeader';
export default class SettingsScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  render() {

    return (
      <View>
        <MainHeader drawer={true} title={'Settings'} navigation={this.props.navigation}/>
        <Button
          onPress={() =>
            this.props.navigation.openDrawer()
          }
          title="Go to Maps"
        />
      </View>
      );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
  drawerLabel: 'Settings',
  drawerIcon: () => (
    <Icon
      type={'material-community'}
      name={'settings-outline'}

    />
  ),
};
