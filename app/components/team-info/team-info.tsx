import { IPlayer, ITeam } from '@/app/interfaces';
import React from 'react';
import { View } from 'react-native';
import { MatchInfo } from '../match-info';
import { Player } from '../player';
import { styles } from './team-info.styles';

interface Props {
  info: ITeam;
}

export const TeamInfo: React.FC<Props> = ({ info }) => (
  <View style={ styles.info }>
    <View style={ styles.players }>
      { info.players.map(({ username, kills }: IPlayer) => (
        <Player
          name={ username }
          totalKills={ kills }
          key={ username }
        />
      )) }
    </View>

    <MatchInfo
      points={ info.points }
      place={ info.place }
      totalKills={ info.total_kills }
    />
  </View>
);
