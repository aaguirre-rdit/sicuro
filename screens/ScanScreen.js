import React from 'react';
import { ScrollView, StyleSheet, View,Text } from 'react-native';
import scantip from '../assets/images/scantip.png';
import Animation from '../components/Animation';
import { Icon, Button } from 'react-native-elements';
import MainStyles from '../constants/Styles';
import { LinearGradient } from "expo/build/Svg.web";
import Colors from "../constants/Colors";

export default class ScanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUri:undefined,
      getSettings:false,
      submit:false,
      result:undefined
    }
  }
  selectPhoto = () => {
    // TODO manage getting picture from camera roll
    alert('select')

  };
  onSubmit = () => {
    // TODO send picture and params to API to scan, then render result
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: '100%',
          flex: 1,
          paddingHorizontal: 20
        }}>
          <Icon
            type={'antdesign'}
            name={'bulb1'}
            color={MainStyles.vectorIconMain.background}
            iconStyle={MainStyles.vectorIconMain}
          >
          </Icon>
          <Text
            style={{fontSize: 20, fontWeight: 200, flex: 1, paddingLeft: 10}}
          >
            Tip
          </Text>
        </View>
        <View style={{...styles.container, height: 250, alignItems: 'center'}}>

          <Animation source={scantip} style={{width: 220, height: 220, flex: 1, margin: 'auto'}}/>
        </View>
        <Text
          style={{fontSize: 14, fontWeight: 100, flex: 1, paddingHorizontal: 15, lineHeight: 25, textAlign: 'center'}}
        >
          Please ensure the picture you scan is as straight and clear as possible
        </Text>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Button
            type={'outline'}
            buttonStyle={MainStyles.MainBtnStyle.container}

            icon={{
              name: "image",
              size: 30,
              color: Colors.white,
              type: 'evilicon'
            }}
            titleStyle={MainStyles.MainBtnStyle.title}
            title="Select photo"
            onPress={this.selectPhoto}
          />
        </View>
      </ScrollView>
    );
  }
}

ScanScreen.navigationOptions = {
  title: 'Label Scanner',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
