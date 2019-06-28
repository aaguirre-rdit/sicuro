import React from 'react';
import { ScrollView, StyleSheet, PickerIOS,Text,View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default class CardScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage:'eng',
      gluten:false,
      dairy:false,
      nuts:false,
      eggs:false,
      soy:false,
      seafood:false
    }
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
         <View style={{flex:1}}>
        <Text>
          Select a language:
        </Text>
        <PickerIOS
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
          onValueChange={(lang, idx) =>
            this.setState({language: lang})
          }>
          <PickerIOS.Item label={"English"} value={"eng"} />
          <PickerIOS.Item label={"Spanish"} value={"spa"} />
          <PickerIOS.Item label={'Korean'} value={'kor'}/>
          <PickerIOS.Item label={'Japanese'} value={'jap'}/>
        </PickerIOS>
         </View>
        <View style={styles.allergenView}>
          <Text>Select allergen(s)</Text>
        <View style={styles.checkContainer}>
          <CheckBox
            containerStyle={styles.checkboxContainer}
            title='Gluten'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={'red'} // Change this
            checked={this.state.gluten}
            onPress={() => this.setState({gluten: !this.state.gluten})}
          />
          <CheckBox
            containerStyle={styles.checkboxContainer}

            title='Dairy'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={'red'} // Change this
            checked={this.state.dairy}
            onPress={() => this.setState({dairy: !this.state.dairy})}
          />
          <CheckBox
            containerStyle={styles.checkboxContainer}

            title='Nuts'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={'red'} // Change this
            checked={this.state.nuts}
            onPress={() => this.setState({nuts: !this.state.nuts})}
          />
          <CheckBox
            containerStyle={styles.checkboxContainer}

            title='Gluten'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={'red'} // Change this
            checked={this.state.eggs}
            onPress={() => this.setState({eggs: !this.state.eggs})}
          />
          <CheckBox
            containerStyle={styles.checkboxContainer}

            title='Soy'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={'red'} // Change this
            checked={this.state.soy}
            onPress={() => this.setState({soy: !this.state.soy})}
          />
          <CheckBox
            containerStyle={styles.checkboxContainer}

            title='Seafood'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={'red'} // Change this
            checked={this.state.seafood}
            onPress={() => this.setState({seafood: !this.state.seafood})}
          />
        </View>
        </View>
        <View style={styles.generationView}>
          <Button
            title={'Generate Card'}
          />
        </View>
      </ScrollView>
    );
  }
}

CardScreen.navigationOptions = {
  title: 'Card Generator',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'space-around'
  },
  allergenView:{
    alignItems:'center',
    flex:1
  },
  generationView:{
    alignItems:'center',
    paddingVertical:50
  },
  checkContainer:{

    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around'
  },
  checkboxContainer:{
    backgroundColor:'transparent',
    width:'40%',
    height:60
  }
});
