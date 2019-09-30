import React from 'react';
import {SafeAreaView, View,ScrollView, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {Input, Button, Tile, Text, CheckBox} from 'react-native-elements';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';
import styled from 'styled-components';
import ImagePicker from '../../components/ImagePicker';
const HeaderText = styled.Text`
  font-weight:400;
  font-size:20px;
  color:${Colors.white};
  
`;
export default class AddItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      scrollOffset:0,
      loading:false,
      submit:false,
      gluten:false,
      dairy:false,
      nuts:false,
      eggs:false,
      soy:false,
      seafood:false
    }
  }
  // handleOnScroll = event => {
  //   alert("Scroll!");
  //   this.setState({
  //     scrollOffset: event.nativeEvent.contentOffset.y,
  //   });
  // };
  handleScrollTo = p => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(p);
    }
  };
  render(){
    return(
      <Modal
        animationIn={'slideInUp'}
        isVisible={this.props.isVisible}
        scrollOffset={this.state.scrollOffset}
        scrollOffsetMax={400 - 300}
        scrollTo={this.handleScrollTo}
        onBackdropPress={this.props.onBdPress}
        style={{
          width:'92%',
          flex:1,
          zIndex:10,
          padding:0,
          marginTop:'20%',
          justifyContent:'center',
          borderRadius:10,
          backgroundColor:Colors.white,
          alignSelf:'center'}}
      >
        <ScrollView style={{flexGrow:1,borderRadius:10}}>
        <View style={{
          ...Styles.mainView,
          backgroundColor:Colors.tintColor,
          maxHeight:50,
          alignItems:'center',
          justifyContent:'center',
          width:'100%',
          margin:0,
          flex:1,
          padding:0

        }}>
        <HeaderText>
          Add a new restaurant
        </HeaderText>
        </View>
          <SafeAreaView contentContainerStyle={{height:"80%", flex:1, backgroundColor:'blue',paddingHorizontal:0}}>
        {/*<ScrollView*/}
          {/*nestedScrollEnabled={true}*/}
          {/*//ref={ref => (this.scrollViewRef = ref)}*/}
          {/*//onScroll={this.handleOnScroll}*/}
          {/*//scrollEventThrottle={16}*/}
          {/*contentContainerStyle={{*/}
          {/*//...Styles.mainView,*/}
          {/*padding:10,*/}
          {/*flexGrow:1,*/}
          {/*flex:1,*/}
            {/*height:"100%",*/}
          {/*justifyContent:'flex-start'*/}
        {/*}}>*/}

          <Tile
            featured
            containerStyle={{
              height:220,
              flex:1,
              width:'100%',
              padding:0,
              backgroundColor:'pink',
              justifyContent:'space-around',
              alignContent:'center'}}
            imageContainerStyle={{height:200,flex:1, alignSelf:'center',marginLeft:0}}
            caption="Upload images"
            icon={{name:'image-plus', type:'material-community'}}
          >
          </Tile>
          <Input
            containerStyle={{marginVertical:10,flex:1,}}
            label={'Restaurant name'}
            placeholder='Enter name'
          />
          <Input
            multiline
            containerStyle={{marginVertical:10,flex:1,}}
            label={'Description'}
            placeholder='Enter name'
            inputStyle={{
              height:null
            }}
          />
          <View style={{marginVertical:10,justifyContent:'space-around',flex:1,}}>
          <Input
            label={'Address'}
            placeholder='Enter address in English'
            containerStyle={{marginBottom:10}}
          />
          <Button
            type={'outline'}
            title={'Enter location in map'}
            buttonStyle={{width:'60%',alignSelf:'center'}}
            />
          </View>
          <View>
          <View style={Styles.CheckContainer}>
            <CheckBox
              containerStyle={Styles.checkboxContainer}
              title='Gluten Free'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor={Colors.AnalogousBlue} // Change this
              checked={this.state.gluten}
              onPress={() => this.setState({gluten: !this.state.gluten})}
            />
            <CheckBox
              containerStyle={Styles.checkboxContainer}
              title='Dairy Free'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor={Colors.AnalogousBlue} // Change this
              checked={this.state.dairy}
              onPress={() => this.setState({dairy: !this.state.dairy})}
            />
            <CheckBox
              containerStyle={Styles.checkboxContainer}
              title='Nut Free'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor={Colors.AnalogousBlue} // Change this
              checked={this.state.nuts}
              onPress={() => this.setState({soy: !this.state.nuts})}
            />
            <CheckBox
              containerStyle={Styles.checkboxContainer}
              title='Soy Free'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor={Colors.AnalogousBlue} // Change this
              checked={this.state.soy}
              onPress={() => this.setState({soy: !this.state.soy})}
            />
            <CheckBox
              containerStyle={Styles.checkboxContainer}
              title='Egg free'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor={Colors.AnalogousBlue} // Change this
              checked={this.state.eggs}
              onPress={() => this.setState({eggs: !this.state.eggs})}
            />
            <CheckBox
              containerStyle={Styles.checkboxContainer}
              title='Seafood Free'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor={Colors.AnalogousBlue} // Change this
              checked={this.state.seafood}
              onPress={() => this.setState({seafood: !this.state.seafood})}
            />
          </View>
          </View>

        {/*</ScrollView>*/}
          </SafeAreaView>
        </ScrollView>

      </Modal>
    )
  }
}
