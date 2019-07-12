import React from 'react';
import {Text, View, TouchableOpacity} from "react-native";
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
  
`;
export default function Item({item}){
  return(
    <Container>
      <Text>{item.name}</Text>
    </Container>
  )
}
