import { images } from '@/assets/images';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './alert.styles';

interface Props {
  showError: boolean;
}

export const Alert: React.FC<Props> = ({ showError }) => {
  if (!showError) return null;

  return (
    <View style={ styles.alert }>
      <Image style={ styles.icon } source={ images.alertTriangle } />

      <Text style={ styles.text }>
        Ошибка: не удалось загрузить информацию
      </Text>
    </View>
  );
};
