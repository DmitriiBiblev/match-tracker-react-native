import { TStatus } from '@/app/types';
import { images } from '@/assets/images';
import React, { useMemo, useRef, useState } from 'react';
import { Animated, Easing, Pressable, StyleProp, Text, useWindowDimensions, View, ViewStyle } from 'react-native';
import { styles } from './filter.styles';

interface Props {
  styles: StyleProp<ViewStyle>;
}

type Value = TStatus | null;

interface Option {
  value: Value;
  text: string;
}

const options: Option[] = [
  { value: null, text: 'Все статусы' },
  { value: 'Ongoing', text: 'Live' },
  { value: 'Finished', text: 'Finished' },
  { value: 'Scheduled', text: 'Match preparing' },
];

export const Filter: React.FC<Props> = ({ styles: container }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Value>(null);
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

  const handleSelect = (value: TStatus | null) => {
    setSelectedValue(value);
    toggleDropdown();
  };

  return (
    <View style={ [s.filter, container] }>
      <Pressable
        style={ [s.select, isOpened && s.selectPressed] }
        onPress={ toggleDropdown }
      >
        <Text style={ s.value }>
          { options.find(({ value }) => value === selectedValue)?.text }
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
          options.map(({ value, text }) => {
            const isSelected: boolean = selectedValue === value;

            return (
              <Pressable
                style={ [s.option, isSelected && s.optionPressed] }
                key={ value }
                onPress={ () => handleSelect(value) }
              >
                <Text style={ [s.optionText, isSelected && s.optionTextPressed] }>
                  { text }
                </Text>
              </Pressable>
            );
          })
        }
      </Animated.View>
    </View>
  );
};
