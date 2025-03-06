import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Status } from './components/status';

const Layout = () => {
  return (
    <View style={ styles.container }>
      <Text>Hello, Expo!</Text>

      <Status status="Finished" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;
