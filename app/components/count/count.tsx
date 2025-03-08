import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleProp, TextStyle } from 'react-native';

interface Props {
  value: number;
  style: StyleProp<TextStyle>;
}

export const Count: React.FC<Props> = ({ value, style }) => {
  const animatedValue = useRef(new Animated.Value(value)).current;
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value,
      duration: 500,
      useNativeDriver: false,
    }).start();

    const listener = animatedValue.addListener(({ value }) => {
      setDisplayValue(Math.round(value));
    });

    return () => animatedValue.removeListener(listener);
  }, [value]);

  return (
    <Animated.Text style={ style }>
      { displayValue }
    </Animated.Text>
  );
};
