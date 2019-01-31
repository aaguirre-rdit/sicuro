import React from 'react';
import {View, TextInput} from 'react-native';
import { Button, Text } from 'react-native-elements';

export default class TranslationScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            originLang : 'EN',
            targetLang : 'ES'
        }
    }
    render (){
        return(
            <View>
                <Text h2>Translation Screen</Text>
            </View>
        )
    }
}
