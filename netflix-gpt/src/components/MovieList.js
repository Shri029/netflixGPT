import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies}) => {
    console.log("Movie data:- ",movies);
  return (
    <div>
        <div>
            <div>
                <h1>{title}</h1>
                <div>
                    {movies.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default MovieList;