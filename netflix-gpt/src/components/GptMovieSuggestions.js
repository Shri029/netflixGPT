import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {

  const { movieNames, movieResults} = useSelector(store => store.gpt);

  if(!movieNames) return null;


  console.log("movieName movieResults", movieNames, movieResults);
  return (
    <div className='m-4 bg-black opacity-90 text-white overflow-x-auto whitespace-nowrap space-x-4 p-4 scroll-smooth md:scrollbar-hide'>
      <div>
        {movieNames.map((movieName,index)=>(
          <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
          ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions;