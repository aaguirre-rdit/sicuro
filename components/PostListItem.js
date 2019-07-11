import React from 'react';
import {ActivityIndicator } from 'react-native';
import {View, Text, Button, Image} from 'react-native-elements';
import styled from 'styled-components';
const Container = styled.View`
  width: 90%;
  border-radius:10;
  height: 100;
  border:1px solid rgba(0,0,0,0.3);
  display:flex;
  flex-direction:row;
  margin:auto;
  justify-content:space-around;
  margin-bottom:10px;
   overflow:hidden;


`;
const TextContainer = styled.View`
  flex:4;
  display:flex;
  flex-direction:column;
  padding-horizontal: 25px;
`;
const Thumbnail = styled.Image`
 flex:2;
 height:100%;
 border:0.5px solid pink;
 border-bottom-left-radius:10%;
 border-top-left-radius:10%;
`;
const PostListItem = ({item}) => {
  return (
    <Container>
      <Thumbnail  style={{elevation:0}} source={{uri:(item.thumbnail? item.thumbnail: 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif')}}/>
      <TextContainer>
        <Text>{item.title}</Text>
        <Text>{item.intro}</Text>
        <Text
          onPress={()=>alert('link to page')}
        >Read more...</Text>
      </TextContainer>
    </Container>
  )
};

export default PostListItem;

