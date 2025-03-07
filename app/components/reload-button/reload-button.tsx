import { images } from '@/assets/images';
import React, { useMemo } from 'react';
import { Image, Pressable, Text, useWindowDimensions } from 'react-native';
import { styles } from './reload-button.styles';

interface Props {
  isLoading: boolean;
  onPress: () => void;
}

export const ReloadButton: React.FC<Props> = ({ isLoading, onPress }) => {
  const { width } = useWindowDimensions();
  const s = useMemo(() => styles(width), [width]);

  return (
    <Pressable
      style={ ({ pressed }) => [
        s.btn,
        pressed && s.pressed,
        isLoading && s.disabled
      ] }
      onPress={ onPress }
      disabled={ isLoading }
    >
      <Text style={ [
        s.text,
        isLoading && s.disabledText
      ] }>
        Обновить
      </Text>

      <Image source={ images.refresh } style={ s.icon } />
    </Pressable>
  );
};
