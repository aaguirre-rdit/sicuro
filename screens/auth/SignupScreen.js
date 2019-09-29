import React from 'react';
import { View,Text } from 'react-native';
import { Input, Button, Icon, SocialIcon,Divider } from "react-native-elements";
import Styles from '../../constants/Styles';
import Colors from '../../constants/Colors';
import loginFb from '../../utils/facebookLogin';
import loginGoogle from '../../utils/googleLogin';
import saveToken from '../../utils/saveToken';
import Config from '../../config';
import axios from 'axios';
const {API_URL} = Config;

export default class SignupScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loginSuccess:false,
      loginError:true,
      errorMessage:'',
      data:{
        email:'',
        username:'',
        password1:'',
        password2:''
      }
    }
  }
  updateSignUpData = (key,value) => {
    const {data} = this.state;
    value = value.trim();
    if (value.length && typeof value == 'string'){
      data[key] = value;
      this.setState({
        ...this.state,
        data
      })
    }


  };


  signUpFacebook = () => {
    loginFb()
      .then(res=>{
        const { user, token } = res;
        console.log({token})
        // TODO send token and info to sicuro server
      });
  };
  signUpGoogle = () => {
    // TODO implement Google signup
    loginGoogle().then(result => {
      console.log('tgg',result);
      // TODO send token and info to sicuro server
    })
  };
  signUpStd = async () => {
    // TODO implement standard login

    const result = await axios.post(`${API_URL}/api/rest-auth/registration/`,this.state.data)
    //this.props.navigation.navigate('Main')
    const fetchRes = await fetch(`${API_URL}/api/rest-auth/registration/`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(this.state.data), // body data type must match "Content-Type" header
    }).then(res=>res.json());
    console.log({result,fetchRes})
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
            autoCompleteType={'username'}
            label={'Username'}
            placeholder={'Enter username'}
            onChangeText={(username)=>this.updateSignUpData('username',username)}
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
            onChangeText={(email)=>this.updateSignUpData('email',email)}
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
            onChangeText={(password1)=>this.updateSignUpData('password1',password1)}
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
            onChangeText={(password2)=>this.updateSignUpData('password2',password2)}
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
              onPress={this.signUpStd}
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

                light
                type='facebook'
                onPress={this.signUpFacebook}
              />
              <SocialIcon
                light
                iconStyle={{color:'red'}}

                type='google'
                onPress={this.signUpGoogle}
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
