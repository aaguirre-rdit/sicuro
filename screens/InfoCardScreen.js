import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Header } from 'react-native-elements';
export default class InfoCardScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    render (){
        return (
            <View>
            <Text>Hello</Text>
            </View>
        )
    }
}
