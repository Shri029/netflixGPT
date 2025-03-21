import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constant';


const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10 top-0 left-0 w-full h-full bg-cover bg-center animate-ken-burns"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_auto_scroll/IN-en-20250303-TRIFECTA-5a51a3d1-4e37-441d-bc08-3597ab68c7b1_large.jpg')",
          animation: "zoomEffect 6s linear infinite alternate",
        }}
      ></div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      <style>
        {`
          @keyframes zoomEffect {
            0% {
              transform: scale(1) translateY(0);
            }
            100% {
              transform: scale(1.1) translateY(-20px);
            }
          }
        `}
      </style>
    </div>
  )
}

export default GptSearch;