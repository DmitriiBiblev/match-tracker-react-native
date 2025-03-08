import { images } from '@/assets/images';
import React, { useMemo, useState } from 'react';
import { FlatList, Image, ScrollView, useWindowDimensions, View } from 'react-native';
import { Alert, Filter, Match, ReloadButton } from './components';
import { styles } from './layout.styles';

const Layout = () => {
  const [showError, setShowError] = useState(false);
  const { width } = useWindowDimensions();
  const s = useMemo(() => styles(width), [width]);

  const toggle = () => {
    setShowError((prev) => !prev); // Меняет состояние на противоположное
  };

  return (
    <ScrollView style={ s.scroll } contentContainerStyle={ s.container }>
      <View style={ s.header }>
        <Image source={ images.logo } style={ s.logo } />

        <Filter styles={ s.filter } />

        { showError && <Alert /> }

        <ReloadButton isLoading={ false } onPress={ toggle } />
      </View>

      <FlatList
        contentContainerStyle={ s.list }
        data={ [1, 2, 3, 4, 5, 6, 7, 8, 9] }
        keyExtractor={ index => index.toString() }
        renderItem={ ({ item }) => <Match /> }
      />
    </ScrollView>
  );
};

export default Layout;
