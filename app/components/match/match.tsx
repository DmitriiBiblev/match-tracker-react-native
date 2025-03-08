import { Count } from '@/app/components';
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
  match: IMatch;
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
        <Team name={ match.awayTeam.name } />

        <View style={ s.info }>
          <View style={ s.score }>
            <Count value={ match.awayScore } style={ s.scoreText } />

            <Text style={ s.scoreText }>:</Text>

            <Count value={ match.homeScore } style={ s.scoreText } />
          </View>

          <Status status={ match.status } />
        </View>

        <Team name={ match.homeTeam.name } isReversed={ true } />

        { width > 1250 && <Image source={ isOpened ? images.chevronUp : images.chevronDown } /> }
      </Pressable>

      <Animated.View style={ [s.dropdown, animatedStyles] }>
        <View style={ s.content } onLayout={ changeContentHeight }>
          <TeamInfo info={ match.awayTeam } />

          {
            width <= 1250 && (
              <View style={ s.vs }>
                <View style={ s.divider } />

                <Text style={ s.vsText }>VS</Text>

                <View style={ s.divider } />
              </View>
            )
          }

          <TeamInfo info={ match.homeTeam } />
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
