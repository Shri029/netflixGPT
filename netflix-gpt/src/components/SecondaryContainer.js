
import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  console.log("Now Playing movies", movies.nowPlayingMovies);
  return (
    movies && (
    <div className='bg-black'>
    <div className='-mt-96 relative z-20'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
      <MovieList title="Popular" movies={movies.popularMovies}/>
      <MovieList title="Upcoming" movies={movies.upcomingMovies}/>
      {/*  
        Movielist 
        - Popular
          - Cards * n
        - Nowplaying
        - Trending
        - Horror
        
      */}
    </div>
    </div>
    )
  );
}

export default SecondaryContainer;