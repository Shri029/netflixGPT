import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movies";


const useNowPlayingMovies = () => {
  //Fetch data from TMDB APIs and update store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const results = await data.json();
    console.log("Data: ",results);
    dispatch(addNowPlayingMovies(results));
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[]);
};

export default useNowPlayingMovies;