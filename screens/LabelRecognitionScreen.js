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
import CameraScreen from './CameraScreen';
import ImagePickerScreen from './ImagePickerScreen';
import { Header, Button } from 'react-native-elements';
import ScanSettingsScreen from './ScanSettingsScreen';
import * as RNTesseractOcr from 'react-native-tesseract-ocr';
export default class LabelRecognitionScreen extends React.Component {
    static navigationOptions = {
        title: 'Label Search',
    };
    constructor(props){
        super(props)
        this.state = {
            cameraRender : false,
            scanSettingsRender:false,
            selectedPhotoUri:null,
            photoCropperRender:false
        };
        this.onTakePictureClick = this.onTakePictureClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
        this.onScanSettingsRender = this.onScanSettingsRender.bind(this);
        this.onPhotoCropRender = this.onPhotoCropRender.bind(this);
        this.onPhotoSelect = this.onPhotoSelect.bind(this);
    }
    onTakePictureClick(){
        this.setState({
            cameraRender:true
        })
    }
    onScanSettingsRender(){
        this.setState({
            scanSettingsRender:true,
            cameraRender:false,
        })
    }
    onBackClick(){
        this.setState({
            cameraRender:false
        })
    }
    resetState(){
        this.setState({
            cameraRender : false,
                scanSettingsRender:false,
                selectedPhotoUri:null,
                photoCropperRender:false
        })
    }
    onPhotoCropRender(){
        this.setState({
            photoCropperRender:true,
            cameraRender:false,
            scanSettingsRender:false,
            imagePickerRender:false
        })
    }
    onPhotoSelect(photoUri){
        this.setState({
            selectedPhotoUri:photoUri,
            photoCropperRender:false,
            scanSettingsRender:true,
            imagePickerRender:false,
            cameraRender:false
        })
    }
    onStartScan(image, ingredient,language){
        console.log('hello')
    }
    render(){
        if (this.state.cameraRender){
            return <CameraScreen onback={this.onBackClick} onphototaken={this.onPhotoCropRender}/>
        }
        else {
            if (this.state.scanSettingsRender){
                return <ScanSettingsScreen/>
            } else if(this.state.photoCropperRender){
                return <ImagePickerScreen  onphotoselect={this.onPhotoSelect}/>
            }

            else {return (

                <View style={styles.container}>
                    <Text style={styles.titleTextStyle}>Scan a label</Text>
                    <View style={styles.buttonViewStyle}>
                        <Button
                            large
                            buttonStyle={styles.uploadButtonStyle}
                            icon={{name: 'photo-library', type:'material'}}
                            title='Upload from Gallery'
                            onPress={this.onPhotoCropRender}
                            />
                        <Button
                            large
                            buttonStyle={styles.shotButtonStyle}
                            title='Take a picture'
                            icon={{name: 'camera'}} onPress={this.onTakePictureClick}/>
                    </View>
                </View>
            )
        }}

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60
    },
    uploadButtonStyle:{
        backgroundColor: 'blue',
        borderRadius:40,
        marginBottom: 10
    },
    shotButtonStyle:{
        backgroundColor: 'red',
        borderRadius:40
    },
    buttonViewStyle:{
        marginTop:15
    },
    titleTextStyle:{
        fontSize:20,
        textAlign:'center',
        color:'#43544b'
    }
});
