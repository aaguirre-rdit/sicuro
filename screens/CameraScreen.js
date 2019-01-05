import { Camera, Permissions, Constants, FileSystem, MediaLibrary } from 'expo';
import React from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
export default class CameraScreen extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        autoFocus: 'on',
        whiteBalance: 'auto',
        ratio: '4:3',
        newPhoto:false,
        hasCameraRollPermission: null,
    };


    handleMountError = ({ message }) => console.error(message);
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        const { crStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraPermission: status === 'granted', hasCameraRollPermissions: crStatus === 'granted' });
        FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
            console.log(e, 'Directory exists');
        });
    }
    onPictureSaved = async photo => {
        const asset = await MediaLibrary.createAssetAsync(photo.uri);

        /*await FileSystem.moveAsync({
            from: photo.uri,
            to: `${FileSystem.documentDirectory}photos/sicuro${Date.now()}.jpg`,
        }).catch((error) => {
            alert(error)
        });*/
        this.setState({ newPhoto: true });
        this.props.onphototaken()

    };
    takePicture = () => {

        if (this.camera) {
            this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
        }
    };


    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => {
                        this.camera = ref;
                    }}>
                        <View
                            style={styles.bottomBar}>
                            <TouchableOpacity
                                style={{
                                    flex: 1/3,
                                    alignSelf: 'center',
                                }}
                                onPress={this.props.onback}>
                                <Icon
                                    name='chevron-left'
                                    type='font-awesome'
                                    color='#fff'

                                    size={20}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flex: 0.4,
                                    alignSelf: 'center',
                                }}
                                onPress={this.takePicture}>
                                <Icon
                                    name='camera-iris'
                                    type='material-community'
                                    color='#fff'
                                    size={40}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flex: 1/3,
                                    alignSelf: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Icon
                                    name='ios-sync'
                                    type='ionicon'
                                    color='#fff'
                                    size={20}
                                />
                            </TouchableOpacity>

                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

const styles = {
    bottomBar: {
        paddingBottom: Platform.OS === 'ios' ? 25 : 5,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        flex: 0.12,
        flexDirection: 'row',
        position:'absolute',
        zIndex: 1,
        alignItems: 'flex-end',
        bottom:0
    }
}
