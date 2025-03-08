import { images } from '@/assets/images';
import React, { useMemo } from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { Count } from '../count';
import { styles } from './player.styles';

interface Props {
  name: string;
  totalKills: number;
}

export const Player: React.FC<Props> = ({ name, totalKills }) => {
  const { width } = useWindowDimensions();
  const s = useMemo(() => styles(width), [width]);

  return (
    <View style={ s.player }>
      <View style={ s.wrapper }>
        <Image source={ images.avatar } style={ s.avatar } />

        <Text style={ s.value }>
          { name }
        </Text>
      </View>

      <View style={ s.wrapper }>
        <Text style={ s.label }>
          Убийств:
        </Text>

        <Count value={ totalKills } style={ s.value } />
      </View>
    </View>
  );
};
