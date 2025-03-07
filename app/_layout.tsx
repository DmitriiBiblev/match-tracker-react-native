import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert, ReloadButton, Status, Team } from './components';

const Layout = () => {
  const [showError, setShowError] = useState(false);

  const toggle = () => {
    setShowError((prev) => !prev); // Меняет состояние на противоположное
  };

  return (
    <View style={ styles.container }>
      <Team name="Team 1" />

      <Team name="Team 1" isReversed={ true } />

      <Text>Hello, Expo!</Text>

      <Alert showError={ showError } />

      <ReloadButton isLoading={ true } onPress={ toggle } />

      <Status status="Finished" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06080C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;
