import { images } from '@/assets/images';
import React, { useMemo } from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from './team.styles';

interface Props {
  name: string;
  isReversed?: boolean;
}

export const Team: React.FC<Props> = ({ name, isReversed }) => {
  const { width } = useWindowDimensions();
  const s = useMemo(() => styles(width), [width]);

  return (
    <View style={ [s.team, isReversed && s.reversed] }>
      <Image style={ s.preview } source={ images.illustrationRole } />

      <Text style={ s.text }>
        { name }
      </Text>
    </View>
  );
};
