import React from 'react';
import { View, Button } from 'react-native';
import MainHeader from '../../components/MainHeader';
export default class LoginScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  render() {

    return (
      <View>
        <Button
          onPress={() =>
            this.props.navigation.navigate('Main')
          }
          title="Go to Main"
        />
      </View>
    );
  }
}
//
// LoginScreen.navigationOptions = {
//   title: 'Settings',
//   drawerLabel: 'Settings',
//   drawerIcon: () => (
//     <Icon
//       type={'material-community'}
//       name={'settings-outline'}
//
//     />
//   ),
// };
