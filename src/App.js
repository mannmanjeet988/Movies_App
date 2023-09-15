import React,{useState} from 'react'
import "./style.css"
import movieData from "./data/movieData";
import MovieList from './Components/MovieList';
import MovieDisplay from './Components/MovieDisplay';

import MovieInfo from './Components/movieDisplayUsingRedux/MovieInfo';
import { UseSelector,UseDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { searchMovie } from './redux/actions';

const App = () => {


  return (
    <div>
         <h1 className='heading'>Movies List</h1> 
        <MovieInfo />
        
        {/* <MovieList  addMovie={setSelectedMovie} />
       { selectedMovie && <MovieDisplay  movieToBeDisplayed={selectedMovie} />} */}
    </div>
  )
}

export default App