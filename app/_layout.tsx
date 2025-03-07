import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert, ReloadButton, Status } from './components';

const Layout = () => {
  const [showError, setShowError] = useState(false);

  const toggle = () => {
    setShowError((prev) => !prev); // Меняет состояние на противоположное
  };

  return (
    <View style={ styles.container }>
      <Text>Hello, Expo!</Text>

      <Alert showError={ showError } />

      <ReloadButton isLoading={ true } onPress={ toggle } />

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
