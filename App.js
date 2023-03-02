import './App.js'
import React, { useState } from 'react';
import MovieList from './components/MovieList/MovieList';
import Navigation from './components/navigation/Navigation';
import {moviesData} from './Data.js';
import AddMovie from './components/AddMovie/AddMovie.js';
import Filter from './components/Filter/Filter .js';

function App() {

  const [movies,setMovies ] = useState (moviesData)

  const [inputSearch, setInputSearch] = useState('')

const add= (newmovie) =>{
  setMovies([...movies, newmovie])
}
  return (
    <div className="App">

    <Navigation/> 
    <Filter  inputSearch={inputSearch} setInputSearch= {setInputSearch}/>
    <AddMovie  add={add}/>
    <MovieList movies = {movies} inputSearch={inputSearch} />
     
      
      
      
      

    </div>
  )
}

export default App