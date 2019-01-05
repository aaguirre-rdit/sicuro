import React from 'react';
import { View, Picker } from 'react-native';
import { Icon, Button, CheckBox, Text } from 'react-native-elements';
export default class ScanSettingsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIngredient:null,
            selectedLanguage:null,
        }

    }

    render(){
        return(
            <View>
                <View style={styles.selector}>
                <Text h4 style={styles.labels}>Scan for:</Text>
                <Picker
                    selectedValue={this.state.selectedIngredient}
                    style={{ height: 50, width: 400 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedIngredient: itemValue})}>
                    <Picker.Item label="Gluten (wheat, barley, rye)" value="Gluten (wheat, barley, rye)" />
                    <Picker.Item label="Nuts" value="Nuts" />
                    <Picker.Item label="Lactose" value="Lactose" />
                    <Picker.Item label="Soy" value="Soy" />
                    <Picker.Item label="Eggs" value="Eggs" />
                </Picker>
                </View>
                <View style={styles.selector}>
                <Text h4 style={styles.labels}>Select a language</Text>
                <Picker
                    selectedValue={this.state.selectedLanguage}
                    style={{ height: 50, width: 400 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedLanguage: itemValue})}
                >
                <Picker.Item label="Korean" value="Korean" />
                <Picker.Item label="English" value="English" />
                <Picker.Item label="Spanish" value="Spanish" />
                <Picker.Item label="German" value="German" />
                </Picker>
                </View>
            </View>
        )
    }
}

styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60
    },
    selector : {
        marginBottom:160
    },
    labels: {
        textAlign: 'center',
        margin: 'auto',
    }
}
