import React from 'react';
import { ScrollView, StyleSheet, Picker,Text,View } from 'react-native';
import { Button, CheckBox, Overlay } from 'react-native-elements';
import Colors from '../constants/Colors';
import Animation from '../components/Animation';
import Spinner from '../assets/images/animations/spinner.gif';
import MainStyles from '../constants/Styles';
class CardScreen extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      selectedLanguage:'eng',
      loading:false,
      cardContent:'',
      submit:false,
      gluten:false,
      dairy:false,
      nuts:false,
      eggs:false,
      soy:false,
      seafood:false
    }
  }
  requestCard = ()=> {
    this.setState({
      submit:true,
      loading:true
    })
    // ADD REQUEST
  };
  render() {

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
         <View style={{flex:1,textAlign:'center'}}>
        <Text>
          Select a language:
        </Text>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 200}}
          onValueChange={(lang, idx) =>
            this.setState({language: lang})
          }>
          <Picker.Item label={"English"} value={"eng"} />
          <Picker.Item label={"Spanish"} value={"spa"} />
          <Picker.Item label={'Korean'} value={'kor'}/>
          <Picker.Item label={'Japanese'} value={'jap'}/>
        </Picker>
         </View>
        <View style={styles.allergenView}>
          <Text>Select allergen(s)</Text>
        <View style={styles.checkContainer}>
          <CheckBox
            containerStyle={styles.checkboxContainer}
            title='Gluten'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={Colors.AnalogousBlue} // Change this
            checked={this.state.gluten}
            onPress={() => this.setState({gluten: !this.state.gluten})}
          />
          <CheckBox
            containerStyle={styles.checkboxContainer}

            title='Dairy'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={Colors.AnalogousBlue} // Change this
            checked={this.state.dairy}
            onPress={() => this.setState({dairy: !this.state.dairy})}
          />
          <CheckBox
            containerStyle={styles.checkboxContainer}

            title='Nuts'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={Colors.AnalogousBlue} // Change this
            checked={this.state.nuts}
            onPress={() => this.setState({nuts: !this.state.nuts})}
          />
          <CheckBox
            containerStyle={styles.checkboxContainer}

            title='Gluten'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={Colors.AnalogousBlue} // Change this
            checked={this.state.eggs}
            onPress={() => this.setState({eggs: !this.state.eggs})}
          />
          <CheckBox
            containerStyle={styles.checkboxContainer}

            title='Soy'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={Colors.AnalogousBlue} // Change this
            checked={this.state.soy}
            onPress={() => this.setState({soy: !this.state.soy})}
          />
          <CheckBox
            containerStyle={styles.checkboxContainer}

            title='Seafood'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={Colors.AnalogousBlue} // Change this
            checked={this.state.seafood}
            onPress={() => this.setState({seafood: !this.state.seafood})}
          />
        </View>
        </View>
        <View style={styles.generationView}>
          <Button
            buttonStyle={styles.buttonStyle}
            title={'Generate Card'}
            onPress={this.requestCard}
          />
        </View>
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
                  {this.state.cardContent}
                </View>
              }
              </View>
            </Overlay>
          )
        }
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
    height:60,
    borderColor:'transparent'
  },
  buttonStyle:{
    backgroundColor:Colors.tintColor,
    borderRadius:25,
    paddingVertical:10,
    paddingHorizontal:20,
  }
});

export default CardScreen;
