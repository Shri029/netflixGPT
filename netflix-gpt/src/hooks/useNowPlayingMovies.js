import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = () => {
  //Fetch data from TMDB APIs and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const dataJson = await data.json();
    dispatch(addNowPlayingMovies(dataJson.results));
  }

  useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies();
  },[]);
};

export default useNowPlayingMovies;