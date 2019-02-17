import React from 'react';
import { View, TextInput, StyleSheet, Picker} from 'react-native';
import { Button, Text, Header } from 'react-native-elements';
import ModalSelector from 'react-native-modal-selector';
import Colors from '../constants/Colors';
const languages = [
    { key: 'EN', label: 'English' },
    { key: 'KR', label: 'Korean' },
    { key: 'ES', label: 'Spanish' },
];
export default class TranslationScreen extends React.Component{
    static navigationOptions = {
        title : 'Translations'
    }
    constructor(props){
        super(props)
        this.state = {
            originLang : 'English',
            targetLang : 'Spanish',
        }
    }
    render (){
        return(
            <View style={styles.container}>
                <View style={styles.transbox}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent: 'space-around',
                        borderBottomColor:Colors.darkGreen,
                        borderBottomWidth: 2
                    }}>
                    <Text style={{marginTop: 14, fontSize:16}}>From:</Text>

                        <ModalSelector
                          data={languages}
                          initValue="Select something yummy!"
                          accessible={true}
                          optionTextStyle	={styles.pickerOptionText}
                          onChange={(option)=>{ this.setState({originLang:option.label})}}>

                            <TextInput
                              style={styles.pickerButton}
                              editable={false}
                              placeholder="Select something yummy!"
                              value={this.state.originLang} />

                        </ModalSelector>
                    {/*<Picker*/}
                        {/*mode={'dialog'}*/}
                        {/*selectedValue={this.state.originLang}*/}
                        {/*style={{ height: 50, width: 200 }}*/}
                        {/*onValueChange={(itemValue, itemIndex) => this.setState({originLang: itemValue})}>*/}
                        {/*<Picker.Item label="English" value="EN" />*/}
                        {/*<Picker.Item label="Spanish" value="ES" />*/}
                        {/*<Picker.Item label="Korean" value="KR" />*/}
                        {/*<Picker.Item label="Japanese" value="JP" />*/}
                    {/*</Picker>*/}
                    </View>
                    <TextInput
                        numberOfLines={4}
                        editable={true}
                        style={{flexDirection: 'column', paddingHorizontal: 10}}
                        placeholder="Type here to translate!"
                        placeHolderTextColor={'gray'}
                    />
                </View>
                <View style={{alignItems: 'center',
                    justifyContent: 'center'}}>
                <Button
                    iconRight={{name: 'translate'}}
                    title="Translate"
                    backgroundColor={Colors.basePurple}
                    buttonStyle={{
                        width:200,
                        justifyContent: 'center',
                        margin:10,
                        borderRadius:25
                    }}
                />
                </View>
                <View style={styles.transbox}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent: 'space-around',
                        borderBottomColor:Colors.darkGreen,
                        borderBottomWidth: 2}}>
                    <Text style={{marginTop: 14, fontSize:16}}>To:</Text>
                        <ModalSelector
                          data={languages}
                          initValue="Select something yummy!"
                          accessible={true}
                          optionTextStyle	={styles.pickerOptionText}
                          onChange={(option)=>{ this.setState({targetLang:option.label})}}>

                            <TextInput
                              style={styles.pickerButton}
                              editable={false}
                              placeholder="Select something yummy!"
                              value={this.state.targetLang} />

                        </ModalSelector>
                    </View>
                    <TextInput
                        numberOfLines={4}
                        editable={false}
                        style={{flexDirection: 'column', paddingHorizontal:10}}
                        placeholder="Your translated text"
                        placeHolderTextColor={'gray'}
                    />
                </View>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        padding:10,
    },
    transbox: {
        flex: 1,
        borderColor: '#3EB489',
        borderWidth: 2,
        borderRadius:10,
    },
    pickerButton: {
        color:'#444',
        padding:15
    },
    pickerOptionText: {
        color:'#74269b',
        fontSize:18
    },

});
