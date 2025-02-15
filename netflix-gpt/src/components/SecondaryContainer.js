
import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  console.log("Now Playing movies", movies.nowPlayingMovies);
  return (
    <div>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      {/*  
        Movielist 
        - Popular
          - Cards * n
        - Nowplaying
        - Trending
        - Horror
        
      */}
    </div>
  )
}

export default SecondaryContainer;