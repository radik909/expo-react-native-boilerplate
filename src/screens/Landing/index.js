import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Expo from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Expo.Constants.statusBarHeight,
  },
});

export default () => (
  <View style={styles.container}>
    <Text>A unique place to find your perfect life partner!</Text>
    <Button
      title="LOGIN"
      titleStyle={{ fontSize: 16 }}
      raised
      buttonStyle={{
        backgroundColor: '#000000',
        borderRadius: 50,
      }}
      ViewComponent={Expo.LinearGradient}
      linearGradientProps={{
        colors: ['#FF9800', '#F44336'],
        start: [1, 0],
        end: [0.2, 0],
      }}
      containerStyle={{ width: '100%', padding: 15 }}
      onPress={() => console.log('Pressed')}
    />
    <Button
      title="REGISTER"
      titleStyle={{ fontSize: 16 }}
      raised
      buttonStyle={{
        backgroundColor: '#000000',
        borderRadius: 50,
      }}
      ViewComponent={Expo.LinearGradient}
      linearGradientProps={{
        colors: ['#FF9800', '#F44336'],
        start: [1, 0],
        end: [0.2, 0],
      }}
      containerStyle={{ width: '100%', padding: 15 }}
      onPress={() => console.log('Pressed')}
    />
  </View>
);
