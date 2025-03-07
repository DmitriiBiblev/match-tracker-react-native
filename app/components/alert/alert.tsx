import { images } from '@/assets/images';
import React, { useMemo } from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from './alert.styles';

interface Props {
  showError: boolean;
}

export const Alert: React.FC<Props> = ({ showError }) => {
  if (!showError) return null;

  const { width } = useWindowDimensions();
  const s = useMemo(() => styles(width), [width]);

  return (
    <View style={ s.alert }>
      <Image style={ s.icon } source={ images.alertTriangle } />

      <Text style={ s.text }>
        Ошибка: не удалось загрузить информацию
      </Text>
    </View>
  );
};
