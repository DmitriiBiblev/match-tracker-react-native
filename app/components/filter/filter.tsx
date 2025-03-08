import { TFilters } from '@/app/types';
import { images } from '@/assets/images';
import React, { useMemo, useRef, useState } from 'react';
import { Animated, Easing, Pressable, StyleProp, Text, useWindowDimensions, View, ViewStyle } from 'react-native';
import { styles } from './filter.styles';

interface Props {
  value: TFilters;
  styles: StyleProp<ViewStyle>;
  onSelected: (value: TFilters) => void;
}

interface Option {
  value: TFilters;
  text: string;
}

const options: Option[] = [
  { value: null, text: 'Все статусы' },
  { value: 'Ongoing', text: 'Live' },
  { value: 'Finished', text: 'Finished' },
  { value: 'Scheduled', text: 'Match preparing' },
];

export const Filter: React.FC<Props> = ({ value, styles: container, onSelected }) => {
  const [isOpened, setIsOpened] = useState(false);
  const translateY = useRef(new Animated.Value(-10)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const rotateX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();
  const s = useMemo(() => styles(width), [width]);

  const toggleDropdown = () => {
    setIsOpened(prev => !prev);

    Animated.timing(translateY, {
      toValue: isOpened ? -10 : 8,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacity, {
      toValue: isOpened ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(rotateX, {
      toValue: isOpened ? 0 : 180,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const handleSelect = (value: TFilters) => {
    onSelected(value);
    toggleDropdown();
  };

  return (
    <View style={ [s.filter, container] }>
      <Pressable
        style={ [s.select, isOpened && s.selectPressed] }
        onPress={ toggleDropdown }
      >
        <Text style={ s.value }>
          { options.find((option) => option.value === value)?.text }
        </Text>

        <Animated.Image
          source={ images.arrow }
          style={ [
            s.arrow, {
              transform: [{
                rotateX: rotateX.interpolate({
                  inputRange: [0, 180],
                  outputRange: ['0deg', '180deg']
                })
              }],
            }] }
        >
        </Animated.Image>
      </Pressable>

      <Animated.View
        style={ [s.dropdown, {
          opacity: opacity,
          pointerEvents: isOpened ? 'auto' : 'none',
          transform: [{ translateY: translateY }],
        }] }
      >
        {
          options.map((option) => {
            const isSelected: boolean = option.value === value;

            return (
              <Pressable
                style={ [s.option, isSelected && s.optionPressed] }
                key={ option.value }
                onPress={ () => handleSelect(option.value) }
              >
                <Text style={ [s.optionText, isSelected && s.optionTextPressed] }>
                  { option.text }
                </Text>
              </Pressable>
            );
          })
        }
      </Animated.View>
    </View>
  );
};
