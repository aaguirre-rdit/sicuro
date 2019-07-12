import React from 'react';
import {Text, View, TouchableOpacity,ActivityIndicator} from "react-native";
import {Image, Button, Icon} from "react-native-elements";
import styled from 'styled-components';
const Container = styled.View`
  flex:1;
  margin:0;
  height:120px;
  width:100%;
  justify-content:space-between;
  border:1px solid rgba(0,0,0,0.15);
  border-top-color:transparent;
  border-left-color:transparent;
  border-right-color:transparent;
  flex-direction:row;
  alignItems:center;
  
`;
const Thumbnail = styled.Image`
 flex:2;
 height:100%;
 width:100px;
 border:1px solid pink;
 border-bottom-left-radius:10;
 border-top-left-radius:10;
`;
const DataContainer = styled.View`
  flex:3;
  padding-horizontal:10px;
`;
const BtnContainer = styled.View`
  flex:1;
  height:100%;
  alignItems:center;
`;

export default function Item({item,navigation}){
  return(
    <Container>
      <Thumbnail source={{uri:(item.thumbnail? item.thumbnail: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg')}}/>
      <DataContainer>
      <Text>{item.name}</Text>
      </DataContainer>
      <BtnContainer>
      <Button
        onPress={()=>{
          navigation.push('Restaurant',{
            storeId:item.id
          })
        }}
        buttonStyle={{height:'100%'}}
        title={''}
        type={'clear'}
        icon={
          <Icon
            name={'doubleright'}
            type={'antdesign'}
            size={14}
          />
        }
      />
      </BtnContainer>
    </Container>
  )
}
