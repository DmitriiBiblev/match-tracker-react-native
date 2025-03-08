import { images } from '@/assets/images';
import React, { useMemo } from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from './alert.styles';

export const Alert: React.FC = () => {
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
