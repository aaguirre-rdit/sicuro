import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';
import { Constants, Location, Permissions,MapView } from 'expo';

export default class App extends React.Component {

    static navigationOptions = {
        title : 'Links',
        header:null,
        footer:null
    }
    constructor(props){
      super(props);
      this.state = {
          mapRegion: null,
        location: {
              coords:{
                  latitude: 43.3204598,
                  longitude: -1.9856693,
              },

        },
      }
      this._getLocationAsync = this._getLocationAsync.bind(true);
    }
    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };3
    componentWillMount(){
      this._getLocationAsync()
    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({}).then((location)=>{
            this.setState({
                location: location,
                mapRegion: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0221
                }
            });
        });

    };
    render() {
        return (
            <View style={styles.container}>
            <MapView
                style={styles.mapContainer}
                initialRegion={{
                    latitude: this.state.location.coords.latitude | 0,
                    longitude: this.state.location.coords.longitude | 0,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0221,
                }}
                region={this.state.mapRegion}
                onRegionChangeComplete={this._handleMapRegionChange}
            >
            </MapView>
                <SearchBar
                    lightTheme
                    round
                    searchIcon={{ size: 24 }}
                    containerStyle={{backgroundColor:'transparent',marginTop:30,borderColor:'white',}}
                    inputContainerStyle={{backgroundColor:'#fff',width:50, fontSize:50}}
                    placeholder='Type Here...' />
                    <ScrollView horizontal>
                      <View style={styles.scrollMain}>
                        <Text>Hola</Text>
                      </View>
                    </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    display:'flex',
  },
    searchBar : {
      zIndex: 10,
    },
    mapContainer: {
        position: 'absolute',
        top: '15%',
        left: 0,
        right: 0,
        bottom: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    scrollMain: {
      position:'absolute',
      zIndex:10,
      backgroundColor:'rebeccapurple',
      bottom:0,
      height:'20%',
      display:'flex',
      flexDirection:'row',
      color:'pink'
    },
});
