import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageconst";
import { useRef } from "react";
import ai from '../utils/gptutils';
import { API_OPTIONS } from "../utils/constant";
import js from "@eslint/js";
import {addgptMovieResult} from "../utils/gptSlice"

const GptSearchBar = () => {
  const dispatch=useDispatch();
  const langData=useSelector((store)=>store.config.lan)
  const searchText=useRef(null);

const searchMovieTMDB=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
    const json=await data.json();

    return json.results;
  }

const handleGptSearchClick=async()=> {
  console.log(searchText.current.value);
  const gptQuery="Act as a movie recommendation system and suggest some movies for the query: "+searchText.current.value+" only give names of 5 movies, comma seperated like the example result given ahead. Example: Kubera, Kingdom ,Don, Gadar, Rana Naidu ";
  
  const response = await ai.models.generateContent({ model: "gemini-1.5-flash" ,
    contents:gptQuery,
  }); 

    
     console.log(response.text);
     const gptMovies=(response.text).split(",");
     console.log(gptMovies);

     const promiseARR=gptMovies.map((movie)=>searchMovieTMDB(movie));
     const tmdbResults=await Promise.all(promiseARR);
     console.log(tmdbResults); 
     dispatch(addgptMovieResult({movieResults:tmdbResults,movieNames:gptMovies }));

}


  return (
    <div className="pt-[32%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" ref={searchText}
        placeholder={lang[langData].gptPlaceholder } 
        className="bg-white text-black p-2 rounded border m-4 col-span-9"/>
        <button className="bg-red-500 rounded col-span-3 px-2 py-1 m-4 hover:bg-red-600 " onClick={handleGptSearchClick}>{lang[langData].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar



/*
 const handleGptSearchClick=async()=>{
          
        // make an API call to GPT API and get the movie results

        const gptquery="Act as a movie recommendation system and suggest some movies for the query: "+searchText.current.value+" only give names of 5 movies, comma seperated like the example result given ahead. Example: Kubera, Kingdom ,Don, Gadar, Rana Naidu ";
        const gptResults=await client.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                 { role: 'developer', content: 'Talk like a pirate.' },
                 { role: 'user', content:gptquery },
  ],
});
console.log(gptResults.choices[0].message.content);

  }
  */