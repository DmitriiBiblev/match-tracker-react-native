import { IPlayer } from '@/app/interfaces';
import React from 'react';
import { View } from 'react-native';
import { MatchInfo } from '../match-info';
import { Player } from '../player';
import { styles } from './team-info.styles';

const players: IPlayer[] = [
  { kills: 3, username: 'Player 1' },
  { kills: 2, username: 'Player 2' },
  { kills: 5, username: 'Player 3' },
];

export const TeamInfo: React.FC = () => (
  <View style={ styles.info }>
    <View style={ styles.players }>
      { players.map(({ username, kills }: IPlayer) => (
        <Player
          name={ username }
          totalKills={ kills }
          key={ username }
        />
      )) }
    </View>

    <MatchInfo points={ 3 } place={ 4 } totalKills={ 5 } />
  </View>
);
