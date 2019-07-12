import React from 'react';
import {Text, View, TouchableOpacity,ActivityIndicator} from "react-native";
import {Image, Button, Icon} from "react-native-elements";
import styled from 'styled-components';
const Container = styled.View`
  flex:1;
  padding:20px;
  height:70px;
  width:100%;
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
 border-bottom-left-radius:10;
 border-top-left-radius:10;
`;
const DataContainer = styled.View`
  flex:3;
`;
const BtnContainer = styled.View`
  flex:1;
  height:100%;
  alignItems:center;
`;

export default function Item({item,navigation}){
  return(
    <Container>
      <Thumbnail source={{uri:(item.thumbnail? item.thumbnail: 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif')}}/>
      <DataContainer>
      <Text>{item.name}</Text>
      </DataContainer>
      <BtnContainer>
      <Button
        onPress={()=>{
          navigation.push('Restaurant',{
            id:item.id
          })
        }}
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
