import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function MapScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}

    </ScrollView>
  );
}

MapScreen.navigationOptions = {
  title: 'Restaurant Search',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
