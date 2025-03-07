import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Alert, Match, MatchInfo, Player, ReloadButton, Status, Team } from './components';

const Layout = () => {
  const [showError, setShowError] = useState(false);

  const toggle = () => {
    setShowError((prev) => !prev); // Меняет состояние на противоположное
  };

  return (
    <ScrollView style={ styles.container }>
      <Match />

      <Team name="Team 1" />

      <Team name="Team 1" isReversed={ true } />

      <MatchInfo points={ 1 } place={ 2 } totalKills={ 3 } />

      <Text>Hello, Expo!</Text>

      <Player name="User 1" totalKills={ 4 } />

      <Alert showError={ showError } />

      <ReloadButton isLoading={ true } onPress={ toggle } />

      <Status status="Finished" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06080C',
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Layout;
