import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  } from 'react-native';
import {Picker} from 'react-native-picker-dropdown';
import scantip from '../assets/images/scantip.png';
import Animation from '../components/Animation';
import {Icon, Button, Image, Overlay} from 'react-native-elements';
import MainStyles from '../constants/Styles';
import _PickImage from '../components/ImagePicker';
import Colors from "../constants/Colors";
import Spinner from "../assets/images/animations/spinner.gif";
import Layout from '../constants/Layout';

export default class ScanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUri:undefined,
      getSettings:false,
      submit:false,
      result:undefined,
      language:'eng',
      allergen:undefined
    }
  }
  selectPhoto = async () => {
    const result = await _PickImage()
      .catch(err =>
        console.log(err)
      );
    if (!result.cancelled){
      this.setState({
        photoUri:result.uri,
        getSettings:true,
        submit:false,
        loading:false,
      })
    }

  };
  onSubmit = () => {
    this.setState({
      submit:true,
      loading:true
    });
    setTimeout(()=>{
      alert('change');
      this.setState({
        loading:false,
        result:{
          result:'unsafe'
        }
      })
    },2000)
    // TODO send picture and params to API to scan, then render result

  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {!this.state.getSettings ?
          <View style={{flex:this.state.getSettings ? 1 : 1.5}}>
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
                style={{fontSize: 20, fontWeight: "200", flex: 1, paddingLeft: 10}}
              >
                Tip
              </Text>
            </View>
            <View style={{flex:4,justifyContent:'center', alignItems: 'center'}}>

              <Animation source={scantip} style={{width: 220, height:220,}}/>
              <Text
                style={{flex:3,fontSize: 14, fontWeight: "100", paddingHorizontal: 15, lineHeight: 25, textAlign: 'center'}}
              >
                {'Please ensure the picture you scan is as straight\nand clear as possible'}
              </Text>
            </View>

          </View> :
          <View style={{flex:1,alignItems:'center',paddingTop:15}}>
            <Image
              source={{ uri: this.state.photoUri }}
              style={{ width: 150, height: 150 }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
        }

        <View style={{flex:1,alignItems: 'center'}}>
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
            title={this.state.getSettings ? 'Change photo' : 'Select photo'}
            onPress={this.selectPhoto}
          />
        </View>
        {this.state.getSettings ?

          <View style={{flex:2, alignItems: 'center', textAlign:'center'}}>
            <Text>Select a language:</Text>
            <Picker
              selectedValue={this.state.language}
              style={{height: 70, width: 200,alignSelf:'center'}}
              onValueChange={(lang, idx) =>
                this.setState({language: lang})
              }>
              <Picker.Item label={"English"} value={"eng"} />
              <Picker.Item label={"Spanish"} value={"spa"} />
              <Picker.Item label={'Korean'} value={'kor'}/>
              <Picker.Item label={'Japanese'} value={'jap'}/>
            </Picker>
            <Text>Select an allergen:</Text>
            <Picker
              selectedValue={this.state.allergen ? this.state.allergen : 'gluten'}
              style={{height: 70, width: 200, alignSelf:'center'}}
              onValueChange={(allergen, idx) =>
                this.setState({allergen: allergen})
              }>
              <Picker.Item label={"Gluten"} value={"gluten"} />
              <Picker.Item label={"Eggs"} value={"egg"} />
              <Picker.Item label={'Dairy'} value={'dairy'}/>
              <Picker.Item label={'Soy'} value={'soy'}/>
              <Picker.Item label={'Nuts'} value={'nut'}/>
              <Picker.Item label={'Seafood'} value={'seafood'}/>
            </Picker>
            <Button
              //type={'outlined'}
              buttonStyle={MainStyles.MainBtnStyle.container}
              titleStyle={MainStyles.MainBtnStyle.title}
              title={'Scan photo'}
              onPress={this.onSubmit}
            />
            {
              this.state.submit && (
                <Overlay
                  isVisible
                  borderRadius={10}
                  width='90%'
                  onBackdropPress={() => this.setState({ submit: false })}
                >
                  <View>
                    {this.state.loading ?
                      <View style={MainStyles.SpinnerContainer}>
                        <Animation source={Spinner} style={
                          MainStyles.SpinnerStyle
                        }/></View> :
                      <View>
                        {this.state.result ?
                          this.state.result.result == 'safe' ?
                            <View>
                            <Icon
                              name={'smileo'}
                              type={'antdesign'}
                              color={'green'}
                              size={50}
                            />
                            </View>:
                            this.state.result.result == 'unsafe' ?
                              <View>
                              <Icon
                                name={'frowno'}
                                type={'antdesign'}
                                color={'red'}
                                size={50}
                              />
                              </View>:
                              this.state.result.result == 'danger' ?
                                <Icon
                                  name={'smileo'}
                                  type={'antdesign'}
                                  color={'green'}
                                  size={50}
                                /> :
                                <Icon
                                  name={'exclamationcircleo'}
                                  type={'antdesign'}
                                  color={'orange'}
                                  size={50}
                                /> :
                          undefined
                        }
                      </View>
                    }
                  </View>
                </Overlay>
              )
            }
          </View>
        :
        undefined}

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
    justifyContent: 'center',
    alignItems:'center'
  },
});
