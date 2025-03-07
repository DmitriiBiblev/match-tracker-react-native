import { styles } from './match-info.styles';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  points: number;
  place: number;
  totalKills: number;
}

interface Param {
  value: keyof Props;
  text: string;
}

const params: Param[] = [
  { value: 'points', text: 'Points:' },
  { value: 'place', text: 'Место:' },
  { value: 'totalKills', text: 'Всего убийств:' },
];

export const MatchInfo: React.FC<Props> = (props: Props) => (
  <View style={ styles.info }>
    {
      params.map(({ value, text }) => (
        <View style={ styles.wrapper } key={ value }>
          <Text style={ styles.label }>
            { text }
          </Text>

          <Text style={ styles.value }>
            { props[value] }
          </Text>
        </View>
      ))
    }
  </View>
);
