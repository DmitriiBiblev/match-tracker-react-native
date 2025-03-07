import { TStatus } from '@/app/types';
import { images } from '@/assets/images';
import React, { useRef, useState } from 'react';
import { Animated, Easing, Pressable, Text, View } from 'react-native';
import { styles } from './filter.styles';

interface Props {
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

export const Filter: React.FC<Props> = (props: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Value>(null);
  const translateY = useRef(new Animated.Value(-10)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const rotateX = useRef(new Animated.Value(0)).current;

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
    <View style={ styles.filter }>
      <Pressable
        style={ [styles.select, isOpened && styles.selectPressed] }
        onPress={ toggleDropdown }
      >
        <Text style={ styles.value }>
          { options.find(({ value }) => value === selectedValue)?.text }
        </Text>

        <Animated.Image
          source={ images.arrow }
          style={ [
            styles.arrow, {
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
        style={ [styles.dropdown, {
          opacity: opacity,
          transform: [{ translateY: translateY }],
        }] }
      >
        {
          options.map(({ value, text }) => {
            const isSelected: boolean = selectedValue === value;

            return (
              <Pressable
                style={ [styles.option, isSelected && styles.optionPressed] }
                onPress={ () => handleSelect(value) }
              >
                <Text style={ [styles.optionText, isSelected && styles.optionTextPressed] }>
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
