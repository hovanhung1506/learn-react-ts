import { createContext, useReducer } from 'react';
import topMoviesInfo from '../api/getTopMovies';
import { topMovieReducer, TopMovieState } from '../reducers/TopMovieReducer';
import { TopMovieActionType } from '../reducers/types';

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;
interface TopMovieContextProps {
  children: React.ReactNode;
}
interface TopMovieContextDefault {
  topMovies: TopMovieState;
  getTopMovies: () => Promise<void>;
  toggleWatched: (imdbID: string) => void;
}
const topMoviesDefault: TopMovieState = [];
export const TopMovieContext = createContext<TopMovieContextDefault>({
  topMovies: topMoviesDefault,
  getTopMovies: () => Promise.resolve(void 0),
  toggleWatched: () => {}
  
});
const TopMovieContextProvider = ({ children }: TopMovieContextProps) => {
  const [topMovies, dispatch] = useReducer(topMovieReducer, topMoviesDefault);
  const getTopMovies = async () => {
    const topMovies = await Promise.all(topMoviesInfo);
    dispatch({
      type: GET_TOP_MOVIES,
      payload: topMovies.map((movie) => ({
        ...movie.data,
        Watched: false,
      })),
    });
  };
  const toggleWatched = (imdbID: string) => dispatch({type: TOGGLE_TOP_MOVIE_WATCHED, payload: imdbID});
  const topMovieContentData = {
    topMovies,
    getTopMovies,
    toggleWatched,
  };
  return <TopMovieContext.Provider value={topMovieContentData}>{children}</TopMovieContext.Provider>;
};

export default TopMovieContextProvider;
