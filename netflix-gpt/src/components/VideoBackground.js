import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';

const VideoBackground = ({movieId}) => {

  // fetch trailer videos
  const getMovieVideos = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/976573/videos?language=en_US', 
    API_OPTIONS
  );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData[0];
    console.log("Trailder", trailer);
  }

  useEffect(()=>{
    getMovieVideos();
  },[]);

  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground;