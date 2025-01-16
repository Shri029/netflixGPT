import React, { useEffect } from 'react';
import Header from './Header';
import { API_OPTIONS } from '../utils/constant';

const Browse = () => {
  
  const getMovies = async () =>{
    // const data = await fetch('https://www.omdbapi.com/?s=you&apikey=60ffafa9');
    //  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing' + API_OPTIONS);
    // const results = await data.json();
    console.log("Data: ");
  }

  useEffect(()=>{
    getMovies();
  },[]);
  return (
    <div><Header/></div>
  )
}

export default Browse;