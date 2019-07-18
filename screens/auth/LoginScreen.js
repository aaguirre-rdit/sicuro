import React from 'react';
import { View,Text } from 'react-native';
import { Input, Button, Icon, SocialIcon,Divider } from "react-native-elements";
import Styles from '../../constants/Styles';
import Colors from '../../constants/Colors';
export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  onForgetPW = ()=> {
    alert('puto pringado')
  };
  render() {

    return (
      <View
        style={{
          ...Styles.mainView,
          justifyContent:'center',
          alignItems:'center',

        }}
      >
        <View
          style={{
            //...Styles.mainView,
            width:'80%',
            height:'70%',
            borderColor:Colors.tintColor,
            borderWidth:1,
            padding:20,
            justifyContent:'center',
            borderRadius:10,
          }}
        >
          <Text>
            Sign In
          </Text>
          <Input
            label={'Email'}
            placeholder={'Enter email'}
            type={'email'}
            leftIcon={
              {
                name:'email-outline',
                size:20,
                type:'material-community',
                color:'gray',
              }
            }
          />
          <Input
            label={'Password'}
            secureTextEntry
            placeholder={'Enter password'}
            type={'password'}
            leftIcon={{name:'lock', type:'antdesign',color:'gray',size:20}}
          />
          <Text onPress={this.onForgetPW}>
            Forgot your password?
          </Text>
        <View
          style={styles.buttonView}
        >
          <Button
            buttonStyle={styles.mainButton}
            backgroundColor={Colors.tintColor}
            onPress={() =>
              this.props.navigation.navigate('Main')
            }
            title="Sign In"
          />
        </View>
          <Divider style={{ backgroundColor: 'rgba(0,0,0,.3)' }} />
          <View style={{
            marginTop:20,
            alignItems:'center',
          }}>
            <Text>Or sign in with:</Text>
            <View style={{
              flexDirection:'row',
              justifyContent:'space-around',
              alignItems:'center'}}>
          <SocialIcon
          title='Sign In With Facebook'
          light
          type='facebook'
        />
          <SocialIcon
            light
            iconStyle={{color:'red'}}
            title='Sign In With Google'
            type='google'
          />
            </View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = {
  buttonView:{
    paddingHorizontal: 50,
    paddingVertical: 20
  },
  mainButton:{
    backgroundColor:Colors.tintColor,
    borderRadius:10,
  }
};
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
