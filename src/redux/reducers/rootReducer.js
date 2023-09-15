import {combineReducers} from "redux"

import { movieInfoReducer } from "./movieInfoReducer"

import { moviesReducer } from "./moviesReducer"

const rootReducer = combineReducers({
    movie : movieInfoReducer,
    movieList : moviesReducer
})

export default rootReducer