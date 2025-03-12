import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovies = () => {
  //Fetch data from TMDB APIs and update store
  const dispatch = useDispatch();
  const getUpcoming = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const dataJson = await data.json();
    dispatch(addUpcomingMovies(dataJson.results));
  }

  useEffect(()=>{
    getUpcoming();
  },[]);
};

export default useUpcomingMovies;