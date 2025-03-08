import { IMatch } from '../interfaces';

export enum MatchesActionType {
  GET_MATCHES = 'Get Matches',
  GET_MATCHES_SUCCESS = 'Get Matches Success',
  GET_MATCHES_FAILURE = 'Get Matches Failure'
}

interface State {
  matches: IMatch[];
  isLoading: boolean;
  isError: boolean;
}

type Action =
  | { type: MatchesActionType.GET_MATCHES }
  | { type: MatchesActionType.GET_MATCHES_SUCCESS; payload: IMatch[] }
  | { type: MatchesActionType.GET_MATCHES_FAILURE };

export const matchesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case MatchesActionType.GET_MATCHES:
      return { ...state, isLoading: true, isError: false };
    case MatchesActionType.GET_MATCHES_SUCCESS:
      return { ...state, isLoading: false, matches: action.payload };
    case MatchesActionType.GET_MATCHES_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};