export const API_KEY = '60ffafa9';

export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjA5YjRkZWFjYjBjYzczY2UxOGE0NGVkZDhjYTBmZiIsIm5iZiI6MTczNzAyOTkzNy4yNDcsInN1YiI6IjY3ODhmOTMxMzg5MjAzOTNhZDFkNDA4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SEwIWi1AeW57GoNCiduMEF9hgq7J7q20t10Hpt0ab2Y",
    },
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

  export const BG_URL= "https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg";

  export const BG_URL1= 'https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_auto_scroll/IN-en-20250303-TRIFECTA-5a51a3d1-4e37-441d-bc08-3597ab68c7b1_large.jpg';

  export const SUPPORTED_LANGUAGES = [
    {identifier: "en",name: "English"},
    {identifier: "hindi",name: "Hindi"},
    {identifier: "spanish",name: "Spanish"},
  ];

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

  export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
  ;