import { images } from '@/assets/images';
import React, { useMemo } from 'react';
import { FlatList, Image, ScrollView, useWindowDimensions, View } from 'react-native';
import { Alert, Filter, Match, ReloadButton } from './components';
import { useMatches } from './hooks';
import { styles } from './layout.styles';

const Layout = () => {
  const { matches, isLoading, isError, loadMatches } = useMatches();
  const { width } = useWindowDimensions();
  const s = useMemo(() => styles(width), [width]);

  return (
    <ScrollView style={ s.scroll } contentContainerStyle={ s.container }>
      <View style={ s.header }>
        <Image source={ images.logo } style={ s.logo } />

        <Filter styles={ s.filter } />

        { isError && <Alert /> }

        <ReloadButton isLoading={ isLoading } onPress={ loadMatches } />
      </View>

      <FlatList
        contentContainerStyle={ s.list }
        data={ matches }
        keyExtractor={ (item) => item.title }
        renderItem={ ({ item }) => <Match match={ item } /> }
      />
    </ScrollView>
  );
};

export default Layout;
