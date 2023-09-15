import { SEARCH_MOVIE } from "../actions";
import movieArr from "./movieArr";
import { moviesReducer } from "./moviesReducer";

const initialState = {
  movies: movieArr,
  movieToShow: [],
};

export const movieInfoReducer = (state = initialState, action) => {
  if (action.type === SEARCH_MOVIE) {
    return {
      // ... state, movieToShow:state.movies.filter(item=>item.title===action.payload)
      ...state,
      movieToShow: state.movies.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      ),
    };
  }
  return state;
};
