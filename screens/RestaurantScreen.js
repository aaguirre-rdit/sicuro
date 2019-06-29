import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
export default function RestScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}

    </ScrollView>
  );
}

RestScreen.navigationOptions = {
  title: 'Restaurant Description & Revs',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.white,
  },
});
