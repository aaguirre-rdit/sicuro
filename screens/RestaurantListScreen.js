import React from 'react';
import ListItem from '../components/RestaurantListItem';
import {ScrollView, View, Text} from 'react-native';
import {SearchBar, Button, Icon} from "react-native-elements";
import styled from 'styled-components';
const SearchContainer = styled.View`
  flex-direction:row;
  justify-content:space-between;
  alignItems:center;
  
`;
export default class MapScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      search:'',
      loading:false
    }}
  updateSearch = (search)=>{
    this.setState({search})
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
          {name:'yamil'}
          ],
        loading:false
      }),3000)
    }
  };
  render() {
    return(
      <View>
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
          <Button
            type={'clear'}
            icon={
              <Icon
              type={'antdesign'}
              name={'search1'}
            />
            }
            onPress={this.onSearch}
          />
        </SearchContainer>
        <ScrollView>
          {this.state.list.map(rest => (
            <ListItem item={rest}/>
          ))}
        </ScrollView>
      </View>
    )
  }
}

MapScreen.navigationOptions = {
  title: 'Restaurant Search',
  //header:null
};

