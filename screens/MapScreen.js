import React from 'react';
import { ScrollView, StyleSheet,View,Text } from 'react-native';
import { Overlay } from "react-native-elements";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import  MapView from 'react-native-maps';


export default class MapScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading:true,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.12,
        longitudeDelta: 0.0821,
      }
    }
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    const region = {
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
      ...location.coords
    };

    this.setState({
      region:{
        ...region
      },
      loading:false
    });
  };

  onRegionChangeComplete= (region) =>{
    this.setState({ region });
  };
  componentWillMount(): void {
    this._getLocationAsync();
  }

  render() {
    if(this.state.errorMessage){
      alert(this.state.errorMessage)
    }
    return (
      <View style={styles.container}>
        {
          this.state.loading && (
            <Overlay
              isVisible
              overlayBackgroundColor={'rgba(255,255,255,0.75)'}
              width={200}
              borderRadius={10}
              height={100}
              overlayStyle={{
                padding:20,
                justifyContent:'center',
                alignItems:'center'
              }}
            >
              <Text>Waiting...</Text>
            </Overlay>
          )
        }
        <MapView
          style={{
            height:500,
            flex:1,
          }}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        />
      </View>
    );
  }
}

MapScreen.navigationOptions = {
  title: 'Restaurant Search',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    backgroundColor: '#fff',
  },
});
