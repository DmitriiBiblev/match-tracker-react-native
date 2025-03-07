import { images } from '@/assets/images';
import React from 'react';
import { Image, Pressable, Text } from 'react-native';
import { styles } from './reload-button.styles';

interface Props {
  isLoading: boolean;
  onPress: () => void;
}

export const ReloadButton: React.FC<Props> = ({ isLoading, onPress }) => (
  <Pressable
    style={ ({ pressed }) => [
      styles.btn,
      pressed && styles.pressed,
      isLoading && styles.disabled
    ] }
    onPress={ onPress }
    disabled={ isLoading }
  >
    <Text style={ [
      styles.text,
      isLoading && styles.disabledText
    ] }>
      Обновить
    </Text>

    <Image source={ images.refresh } style={ styles.icon } />
  </Pressable>
);
