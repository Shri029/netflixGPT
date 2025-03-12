import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = () => {
  //Fetch data from TMDB APIs and update store
  const dispatch = useDispatch();
  const getTopRated = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const dataJson = await data.json();
    dispatch(addTopRatedMovies(dataJson.results));
  }

  useEffect(()=>{
    getTopRated();
  },[]);
};

export default useTopRatedMovies;