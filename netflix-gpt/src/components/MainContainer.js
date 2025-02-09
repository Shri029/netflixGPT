import React from 'react'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  //This is called Early return.
  if(!movies) return;

  //Main movie- first movie of the list
  const movie = movies[0];
  return (
    <div>MainContainer</div>
  )
}

export default MainContainer;