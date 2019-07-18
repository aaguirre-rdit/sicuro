import React from 'react';
import { View,Text } from 'react-native';
import { Input, Button, Icon, SocialIcon,Divider } from "react-native-elements";
import Styles from '../../constants/Styles';
import Colors from '../../constants/Colors';
export default class SignupScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loginSuccess:false,
      loginError:true,
      errorMessage:''
    }
  }


  signUpFacebook = () => {
    // TODO implement Fb signup
  };
  signUpGoogle = () => {
    // TODO implement Google signup
  };
  signUpStd = () => {
    // TODO implement standard login
    this.props.navigation.navigate('Main')
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
            Sign Up
          </Text>
          <Input
            autoCompleteType={'email'}
            label={'Name'}
            placeholder={'Enter name'}
            leftIcon={
              {
                name:'user',
                size:20,
                type:'antdesign',
                color:'gray',
              }
            }
          />
          <Input
            label={'Email'}
            placeholder={'Enter email'}
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
            leftIcon={
              {
                name:'lock',
                type:'antdesign',
                color:'gray',
                size:20}}
          />
          <Input
            label={'Confirm password'}
            secureTextEntry
            placeholder={'Re-enter password'}
            leftIcon={
              {
                name:'lock',
                type:'antdesign',
                color:'gray',
                size:20}}
          />
          <View
            style={styles.buttonView}
          >
            <Button
              buttonStyle={styles.mainButton}
              backgroundColor={Colors.tintColor}
              onPress={this.loginStd}
              title="Sign Up"
            />
          </View>
          <Divider style={{ backgroundColor: 'rgba(0,0,0,.3)' }} />
          <View style={{
            marginTop:20,
            alignItems:'center',
          }}>
            <Text>Or sign up with:</Text>
            <View style={{
              flexDirection:'row',
              justifyContent:'space-around',
              alignItems:'center'}}>
              <SocialIcon
                title='Sign In With Facebook'
                light
                type='facebook'
                onPress={this.loginFacebook}
              />
              <SocialIcon
                light
                iconStyle={{color:'red'}}
                title='Sign In With Google'
                type='google'
                onPress={this.loginGoogle}
              />
            </View>
            <Text>
              Already have an account?
              <Text
                onPress={()=>this.props.navigation.navigate('logIn')}
              >
                Sign In
              </Text>
            </Text>
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
