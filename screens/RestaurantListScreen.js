import React from 'react';
import ListItem from '../components/restaurant/RestaurantListItem';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {SearchBar, Button, Icon} from "react-native-elements";
import styled from 'styled-components';
import Colors from '../constants/Colors';
import AddItem from '../components/restaurant/addItem';
const SearchContainer = styled.View`
  flex-direction:row;
  justify-content:space-between;
  alignItems:center;
  border:1px solid rgba(0,0,0,0.05);
  border-top-color:transparent;
  border-left-color:transparent;
  border-right-color:transparent;
`;
export default class MapScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      search:'',
      loading:false,
      openAddModal:false
    }}
  updateSearch = (search)=>{
    this.setState({search})
  };
  showAddModal = () => {
    this.setState({
      openAddModal:true
    })

  };
  onSearch = () => {
    if (this.state.search.trim() !== ''){
      // TODO add request to server
      this.setState({
        loading:true
      });
      // DELETE ALL THIS BELOW!
      setTimeout(()=>
      this.setState({
        list:[
          {
            name:'yamil-1',
            id:1
          },
          {
            name:'yamil-',
            id:2
          },
          {
            name:'yamil-3',
            id:3
          },
          {
            name:'yamil-4',
            id:4
          },
          {
            name:'yamil-5',
            id:5
          }
          ],
        loading:false
      }),3000)
    }
  };
  render() {
    console.log(this.state.openAddModal)
    return(
      <View style={styles.viewContainer}>
        <SearchContainer>
          <SearchBar
            containerStyle={{
              borderBottomColor:'transparent',
              borderTopColor:'transparent',
              flex:1,
              backgroundColor:'transparent'
            }}
            round
            searchIcon={null}
            showLoading={this.state.loading}
            lightTheme
            placeHolder={'Type here...'}
            value={this.state.search}
            onChangeText={this.updateSearch}
          />
          <View>
          <Button
            type={'clear'}
            raised
            onPress={this.onSearch}
            backgroundColor={Colors.tintColor}
            icon={
              <Icon
              type={'antdesign'}
              name={'search1'}
            />
            }
          />
          </View>
        </SearchContainer>
        <ScrollView>
          {this.state.list.map((rest,index) => (
            <ListItem item={rest} navigation={this.props.navigation} key={index}/>
          ))}
        </ScrollView>
        <View>
        <TouchableOpacity
          style={styles.floatingBottomBtn}
          onPress={this.showAddModal}
        >
            <Icon
              name={'add'}
              type={'material'}
              color={Colors.white}
              size={30}
            />
        </TouchableOpacity>
        </View>
        <AddItem
          isVisible={this.state.openAddModal}
          onBdPress={()=>this.setState({openAddModal:false})}
        />

      </View>
    )
  }
}

const styles = {
  floatingBottomBtn:{
    position:'absolute',
    bottom:20,
    justifyContent:'center',
    right:20,
    borderRadius:25,
    width:50,
    height:50,
    backgroundColor:Colors.AnalogousGreen,
  },
  viewContainer:{
    height:'100%',
    flex:1,
  }
};

MapScreen.navigationOptions = {
  title: 'Restaurant Search',
  //header:null
};

