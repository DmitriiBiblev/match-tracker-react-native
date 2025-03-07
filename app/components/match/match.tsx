import { IMatch } from '@/app/interfaces';
import { images } from '@/assets/images';
import React, { useMemo, useRef, useState } from 'react';
import {
  Animated,
  Image,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
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
  const { width } = useWindowDimensions();
  const s = useMemo(() => styles(width), [width]);

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
    const { padding, marginTop } = StyleSheet.flatten(s.content);

    contentHeight.current = height + padding * 2 + marginTop;
  };

  return (
    <View style={ s.match }>
      <Pressable style={ s.header } onPress={ toggleAccordion }>
        <Team name="Team 1" />

        <View style={ s.info }>
          <Text style={ s.score }>
            { 1 } : { 3 }
          </Text>

          <Status status="Scheduled" />
        </View>

        <Team name="Team 2" isReversed={ true } />

        { width > 1250 && <Image source={ isOpened ? images.chevronUp : images.chevronDown } /> }
      </Pressable>

      <Animated.View style={ [s.dropdown, animatedStyles] }>
        <View style={ s.content } onLayout={ changeContentHeight }>
          <TeamInfo />

          {
            width <= 1250 && (
              <View style={ s.vs }>
                <View style={ s.divider } />

                <Text style={ s.vsText }>VS</Text>

                <View style={ s.divider } />
              </View>
            )
          }

          <TeamInfo />
        </View>
      </Animated.View>

      {
        width <= 1250 && (
          <Pressable
            style={ s.arrow }
            onPress={ toggleAccordion }
          >
            <Image source={ isOpened ? images.chevronUp : images.chevronDown } />
          </Pressable>
        )
      }
    </View>
  );
};
