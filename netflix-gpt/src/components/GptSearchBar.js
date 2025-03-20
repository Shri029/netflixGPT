import React, { useRef, useState } from 'react';
import {lang} from "../utils/languageConstant";
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import {GEMINI_API_KEY, API_OPTIONS} from '../utils/constant';
import { GoogleGenerativeAI } from "@google/generative-ai";
import {addGptMovieResults} from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) =>store.config.lang);
  const searchText = useRef(null);
  const searchMovieTMDB = async (movieName) =>{
  const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movieName + "&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json = await data.json();
    return json.results;
  }

  // const handleGptSearchClick = async () =>{
  //   console.log(searchText.current.value);
  //   // Make an API call to GPT API and get Movie Results

  //   const gptQuery =  "Act as a movie recommendation system and suggest some movies for the query: "+  searchText.current.value + ". only names of 5 movies, in a comma separated way like the example result given ahead. Example result:- Mrs., PK, Emergency, Dhoom Dham, Dunkey";
  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: 'user', content: gptQuery }],
  //     model: 'omni-moderation-2024-09-26',
  //   });

  //   console.log(gptResults.choices);
  // }

  const  handleGptSearchClick  =  async () => {

    const gptQuery = "Act as a movie recommendation system and suggest movies for the query: "+ searchText.current.value 
      + ". Only give me names of 5 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Once upon a time in Mumbai";
      
      try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: gptQuery }]
            }]
          })
        });
    
        const data = await res.json();
        const movieResults = data.candidates[0].content.parts[0].text.trim(); // Trim to avoid trailing newline
        console.log("Recommended Movies from Gemini:", movieResults);
    
        if (!movieResults) {
          console.error("No movie names received from Gemini!");
          return;
        }
    
        const moviesArray = movieResults.split(",").map(movie => movie.trim());  // Trim each movie name
        const promiseArray = moviesArray.map(movie => searchMovieTMDB(movie));
    
        //Promise fro all movie names
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovieResults({ movieNames: movieResults, movieResults: tmdbResults }));
        console.log("Movie data from TMDB:", tmdbResults);
      } catch (error) {
        console.error("Error fetching movies or TMDB data:", error);
      }
    };
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button onClick={handleGptSearchClick} className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar