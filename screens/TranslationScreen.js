import React from 'react';
import { View, TextInput, StyleSheet, Picker} from 'react-native';
import { Button, Text, Header } from 'react-native-elements';
import ModalSelector from 'react-native-modal-selector';

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
            originLang : 'EN',
            targetLang : 'ES',
        }
    }
    render (){
        return(
            <View style={styles.container}>
                <View style={styles.transbox}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent: 'space-around',
                        borderBottomColor:'#4dd698',
                        borderBottomWidth: 2
                    }}>
                    <Text style={{marginTop: 14, fontSize:16}}>From:</Text>

                        <ModalSelector
                          data={languages}
                          initValue="Select something yummy!"
                          accessible={true}
                          optionTextStyle	={{color:'#74269b',fontSize:18}}
                          onChange={(option)=>{ this.setState({originLang:option.label})}}>

                            <TextInput
                              style={{color:'#444',padding:15}}
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
                    backgroundColor={'#3EB489'}
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
                        borderBottomColor:'#4dd698',
                        borderBottomWidth: 2}}>
                    <Text style={{marginTop: 14, fontSize:16}}>To:</Text>
                    <Picker
                        selectedValue={this.state.targetLang}
                        style={{ height: 50, width: 200 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({targetLang: itemValue})}>
                        <Picker.Item label="English" value="EN" />
                        <Picker.Item label="Spanish" value="ES" />
                        <Picker.Item label="Korean" value="KR" />
                        <Picker.Item label="Japanese" value="JP" />
                    </Picker>
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
    }
});
