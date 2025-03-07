import { images } from '@/assets/images';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './player.styles';

interface Props {
  name: string;
  totalKills: number;
}

export const Player: React.FC<Props> = ({ name, totalKills }) => (
  <View style={ styles.player }>
    <View style={ styles.wrapper }>
      <Image source={ images.avatar } style={ styles.avatar } />

      <Text style={ styles.value }>
        { name }
      </Text>
    </View>

    <View style={ styles.wrapper }>
      <Text style={ styles.label }>
        Убийств:
      </Text>

      <Text style={ styles.value }>
        { totalKills }
      </Text>
    </View>
  </View>
);
