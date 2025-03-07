import { TStatus } from '../types';
import { ITeam } from './team.interface';

export interface IMatch {
  awayScore: number;
  awayTeam: ITeam;
  homeScore: number;
  homeTeam: ITeam;
  status: TStatus;
  time: string;
  title: string;
}
