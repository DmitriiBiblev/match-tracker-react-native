import { useEffect, useReducer } from 'react';
import { getMatches } from '../services';
import { MatchesActionType, matchesReducer } from '../stores';
import { IMatch } from '../interfaces';

export const useMatches = () => {
  const [state, dispatch] = useReducer(matchesReducer, {
    matches: [],
    isLoading: true,
    isError: false
  });

  const loadMatches = async () => {
    dispatch({ type: MatchesActionType.GET_MATCHES });

    try {
      const matches: IMatch[] = await getMatches();

      dispatch({ type: MatchesActionType.GET_MATCHES_SUCCESS, payload: matches });
    } catch {
      dispatch({ type: MatchesActionType.GET_MATCHES_FAILURE });
    }
  };

  useEffect(() => {
    loadMatches();
  }, []);

  return { ...state, loadMatches };
};