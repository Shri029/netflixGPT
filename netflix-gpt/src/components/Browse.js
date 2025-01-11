import React, { useEffect } from 'react';
import Header from './Header';

const Browse = () => {
  
  const getMovies = async () =>{
    const data = await fetch('https://www.omdbapi.com/?s=you&apikey=60ffafa9');
    const results = await data.json();
    console.log("Data: ", results.Search);
  }

  useEffect(()=>{
    getMovies();
  },[]);
  return (
    <div><Header/></div>
  )
}

export default Browse;