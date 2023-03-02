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

  const [inputStars , setInputStars] = useState(0)

const add= (newmovie) =>{
  setMovies([...movies, newmovie])
}
  return (
    <div className="App">

    <Navigation inputSearch={inputSearch} setInputSearch= {setInputSearch} 
    inputStars={inputStars} setInputStars={setInputStars}/> 
    <Filter  inputSearch={inputSearch} setInputSearch= {setInputSearch}
     inputStars={inputStars} setInputStars={setInputStars}/>
    <AddMovie  add={add}/>
    <MovieList movies = {movies} inputSearch={inputSearch} 
    inputStars={inputStars}  />
     
      
      
      
      

    </div>
  )
}

export default App