import { images } from '@/assets/images';
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';
import { Alert, Filter, Match, ReloadButton } from './components';
import { styles } from './layout.styles';

const Layout = () => {
  const [showError, setShowError] = useState(false);

  const toggle = () => {
    setShowError((prev) => !prev); // Меняет состояние на противоположное
  };

  return (
    <ScrollView style={ styles.scroll } contentContainerStyle={ styles.container }>
      <View style={ styles.header }>
        <Image source={ images.logo } style={ styles.logo } />

        <Filter styles={ styles.filter } />

        <Alert showError={ showError } />

        <ReloadButton isLoading={ false } onPress={ toggle } />
      </View>

      <FlatList
        contentContainerStyle={ styles.list }
        data={ [1, 2, 3, 4, 5, 6, 7, 8, 9] }
        keyExtractor={ index => index.toString() }
        renderItem={ ({ item }) => <Match /> }
      />
    </ScrollView>
  );
};

export default Layout;
