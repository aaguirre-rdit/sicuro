import React from 'react';
import {View, Picker, Text, TextInput} from 'react-native';
import {Button, Switch} from 'react-native-paper';
import  baseTeal  from '../constants/Colors';
import { Divider } from 'react-native-elements';
import ModalSelector from 'react-native-modal-selector';

const languages = [
  { key: 'EN', label: 'English' },
  { key: 'KR', label: 'Korean' },
  { key: 'ES', label: 'Spanish' },
];

export default class ScanSettingsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scanGluten:false,
            scanDairy:false,
            scanEggs:false,
            scanNuts:true,
            selectedLanguage:'English',
            loadingScan:false,
        }
    }

    render(){
        return(
            <View style={styles.container}>
              <View>
                <Text style={styles.title}>Scan options</Text>
              <View style={styles.selector}>
                <View style={styles.option}>
                  <Text style={styles.optionText}>Gluten</Text>
                  <Switch
                    trackColor={{true:baseTeal}}
                    onValueChange={()=>{this.setState({
                      scanGluten: !this.state.scanGluten
                    })}}
                    value={this.state.scanGluten}/>
                </View>
                <View style={styles.option}>
                  <Text style={styles.optionText}>Dairy</Text>
                  <Switch
                    trackColor={{true:baseTeal}}
                    onValueChange={()=>{this.setState({
                      scanDairy: !this.state.scanDairy
                    })}}
                    value={this.state.scanDairy}/>
                </View>
                <View style={styles.option}>
                  <Text style={styles.optionText}>Eggs</Text>
                  <Switch
                    trackColor={{true:baseTeal}}
                    onValueChange={()=>{this.setState({
                      scanEggs: !this.state.scanEggs
                    })}}
                    value={this.state.scanEggs}/>
                </View>
                <View style={styles.option}>
                  <Text style={styles.optionText}>Nuts</Text>
                  <Switch
                    trackColor={{true:baseTeal}}
                    onValueChange={()=>{this.setState({
                      scanNuts: !this.state.scanNuts
                    })}}
                    value={this.state.scanNuts}/>
                </View>
              </View>
              </View>
              <Divider/>
              <View style={styles.section}>
                <Text style={styles.title}>Select a language</Text>

                <ModalSelector
                  style={styles.languagePickerButton}
                  data={languages}
                  initValue={this.state.selectedLanguage}
                  accessible={true}
                  //optionTextStyle	={styles.pickerOptionText}
                  onChange={(option)=>{ this.setState({selectedLanguage:option.label})}}>
                </ModalSelector>

              </View>
              <View style={styles.section}>
                <Button
                  style={styles.submitButton}
                  icon="select-all"
                  mode="contained"
                  loading={this.state.loadingScan}
                  onPress={() => {
                    this.setState({
                      loadingScan:true
                    })
                  }}>
                  Start scan
                </Button>
              </View>
            </View>
        )
    }
}

styles = {
    container: {
        display:'flex',
        flex: 1,
        backgroundColor: '#fff',
    },
    section : {
        display:'flex',
        alignItems: 'center'
    },
    labels: {
        textAlign: 'center',
        margin: 'auto',
    },
    title: {
      fontSize: 26,
      textAlign:'center',
      padding:10,
    },
    option: {
      display:'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
      padding:15,
      alignItems: 'stretch',
    },
    optionText: {
      fontSize: 20,
      margin:'auto',
      flex:2,
    },
    optionSwitch: {
      flex:1
    },
    languagePickerButton: {
      borderColor: 'limegreen',
      borderRadius:25,
      width:'60%',
      padding:40,
      margin:'auto',
    },
    submitButton: {
      width:300,
      alignContent: 'center',
      margin:'auto',
      padding:15,
    }
};
