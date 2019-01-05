import React from 'react';
import {  Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';

export default class ImagePickerScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: null,
        }
        this._sendToScan = this._sendToScan.bind(this);
    }

    render() {
        let { image } = this.state;
        let scanButton = image ?  <Button buttonStyle={styles.buttonStyle} title="Next" onPress={this._sendToScan}/> : undefined;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#fff'}}>
                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage}
                    buttonStyle={styles.buttonStyle}
                />
                {image &&
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                {scanButton}
            </View>
        );
    }
    _sendToScan = async ()=>{
        if (this.state.image){
            this.props.onphotoselect(this.state.image)
        }
    };
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
}
styles= {
    buttonStyle:{
        backgroundColor: 'limegreen',
        borderRadius:40,
        marginVertical: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60
    }
}
