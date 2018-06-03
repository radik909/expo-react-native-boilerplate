import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Colors from 'constants/colors';
import TEXTS from 'constants/texts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => (
  <View style={styles.container}>
    <Text>{TEXTS.LANDING.MOTTO}</Text>
  </View>
);
