import { images } from '@/assets/images';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './team.styles';

interface Props {
  name: string;
  isReversed?: boolean;
}

export const Team: React.FC<Props> = ({ name, isReversed }) => (
  <View style={ [
    styles.team,
    isReversed && styles.reversed
  ] }>
    <Image style={ styles.preview } source={ images.illustrationRole } />

    <Text style={ styles.text }>
      { name }
    </Text>
  </View>
);
