import React, { Fragment, useMemo } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { styles } from './match-info.styles';

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

export const MatchInfo: React.FC<Props> = (props: Props) => {
  const { width } = useWindowDimensions();
  const s = useMemo(() => styles(width), [width]);

  return (
    <View style={ s.info }>
      {
        params.map(({ value, text }, index) => (
          <Fragment key={ value }>
            { index > 0 && <View style={ s.divider }></View> }

            <View style={ s.wrapper }>
              <Text style={ s.label }>
                { text }
              </Text>

              <Text style={ s.value }>
                { props[value] }
              </Text>
            </View>
          </Fragment>
        ))
      }
    </View>
  );
};
