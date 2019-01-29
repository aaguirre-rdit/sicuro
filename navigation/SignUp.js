import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            SignUpSuccess: null
        }
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <LinearGradient
                colors={[ '#01913d','#84f4b2', '#01913d']}
                style={styles.container}>
            <View>


                <View style={styles.signupcontainer}>
                    <Text style={styles.signuptitle}>Sign up</Text>
                    <View style={styles.signupOptions}>
                        <Text style={styles.signupwith}>Sign up with:</Text>
                        <Button title={'Facebook'} backgroundColor={'#3b5998'}
                                buttonStyle={styles.signupButton} raised
                                icon = {
                                    <Icon
                                        name="arrow-right"
                                        size={15}
                                        color="white"
                                    />
                                }
                        />
                        <Button title={'Google'} backgroundColor={'red'}
                                buttonStyle={styles.signupButton} raised/>
                        <Text style={{padding:10}}>Have an account already?
                            <Text style={styles.link}
                                  onPress={()=>navigate('LogIn')}>Log In
                            </Text>.</Text>
                    </View>

                </View>

            </View>
            </LinearGradient>
        )
    }
}
const styles = {
    container:{
        flex: 1,
    },
    signupcontainer: {
        margin:50,
        marginTop:200,
        shadowColor: '#000',
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    signuptitle: {
        color:'white',
        fontSize:40,
        textAlign:'center',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    signupOptions:{
        marginTop:20,
        padding:20,
        backgroundColor:'white',
        borderRadius:15,
    },
    signupButton:{
        padding:10,
        borderRadius: 7,
        marginVertical: 5,
    },
    signupwith:{
        padding:10,
        fontSize:20,
    },
    link: {
        color:"#38913d",
    }
}
