import { IMatch } from '@/app/interfaces';
import { images } from '@/assets/images';
import React, { useRef, useState } from 'react';
import { Animated, Image, LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import { Status } from '../status';
import { Team } from '../team';
import { TeamInfo } from '../team-info';
import { styles } from './match.styles';

interface Props {
  match?: IMatch;
}

export const Match: React.FC<Props> = ({ match }) => {
  const [isOpened, setIsOpened] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const contentHeight = useRef(0);

  const toggleAccordion = () => {
    Animated.timing(animation, {
      toValue: isOpened ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();

    setIsOpened(prev => !prev);
  };

  const animatedStyles = {
    maxHeight: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, contentHeight.current]
    }),
  };

  const changeContentHeight = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    const { padding, marginTop } = StyleSheet.flatten(styles.content);

    contentHeight.current = height + padding * 2 + marginTop;
  };

  return (
    <View style={ styles.match }>
      <Pressable style={ styles.header } onPress={ toggleAccordion }>
        <Team name="Team 1" />

        <View style={ styles.info }>
          <Text style={ styles.score }>
            { 1 } : { 3 }
          </Text>

          <Status status="Scheduled" />
        </View>

        <Team name="Team 2" isReversed={ true } />

        <Image source={ isOpened ? images.chevronUp : images.chevronDown } />
      </Pressable>

      <Animated.View style={ [styles.dropdown, animatedStyles] }>
        <View style={ styles.content } onLayout={ changeContentHeight }>
          <TeamInfo />

          <TeamInfo />
        </View>
      </Animated.View>
    </View>
  );
};
