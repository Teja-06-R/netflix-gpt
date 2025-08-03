import { useParams } from "react-router-dom"
import useVideobg from "../Hooks/useVideobg"
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constant";
import { API_OPTIONS } from "../utils/constant";
import {addMovieDetails,addCastInfo} from "../utils/moviesSlice";
import { useEffect } from "react";
import ActorCard from "./ActorCard";

const MovieDetails = () => {
  const dispatch=useDispatch();
  const {movieId}=useParams();
  console.log(movieId);
  useVideobg(movieId);
  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addMovieDetails(json));
  };
  const getCastInfo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/credits",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addCastInfo(json.cast));
  };

  const movieInfo = useSelector((store) => store.movies?.movieinfo);
  const cast=useSelector((store)=>store.movies?.castDetails);
  const poster =movieInfo?.poster_path;
  const title=movieInfo?.original_title;
  console.log(title);
  const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);
  useEffect(() => {
    getMovieDetails();
    getCastInfo();
    
  }, [movieId]);

  if (!trailerVideo) return null;
  if (!cast) return null;
 
  return (
    <>
    <div className="w-screen overflow-x-hidden">
     <div className="flex justify-center relative bg-black min-h-screen">
      <div className="text-white font-extrabold p-4 text-5xl ">{title}</div>
      <div className="md:w-5/6 w-11/12 md:h-[75%] h-[27%] md:mt-20 mt-4 text-white absolute flex justify-between">
        {/* Poster image (only on md screens and up) */}
        <img
          className="hidden md:block md:h-3/4 h-2/3 rounded-2xl object-cover z-20 md:border-b-2 border-b border-white shadow-red-400 shadow-xl md:my-auto md:-mr-32"
          src={IMG_CDN + poster}
          alt="Movie Poster"
        />

        {/* Video container */}
        <div className="z-10 overflow-hidden md:w-5/6 w-full h-full rounded-2xl shadow-red-400 shadow-xl relative">
          {/* Gradient overlay */}
          <div className="rounded-2xl md:border-b-2 border-b border-white absolute z-20 inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          {/* YouTube iframe */}
          <iframe
            className="md:scale-[1.35] scale-[1.6] w-full h-full"
            src={
              'https://www.youtube.com/embed/'+trailerVideo.key+'?&autoplay=1&mute=1&controls=0&loop=1&playlist='+trailerVideo.key+'&modestbranding=1&rel=0&showinfo=0'
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
        
    </div>
    </div>
    <div className="md:ml-0 ml-[50%] md:mt-4 mt-3 md:mb-6 md:w-full w-1/2 border-b border-white shadow-lg shadow-red-400 rounded-lg p-2 md:text-lg text-[10px] bg-black bg-opacity-80 transition-all ease-in-out duration-200 delay-75 hover:bg-gray-900 ">
        <h1 className="text-white font-bold text-2xl">Meet the Cast</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
        <div className=" md:mt-2 mt-[2px] flex md:ml-4 ml-2 overflow-x-scroll scrollbar-hide">
          <div className="flex  ">
            {cast.map((actor) => (
              <ActorCard key={actor?.id} actor={actor} />
            ))}
          </div>
        </div>
        </div>
      </div>
      </>
  );
};

   

   


export default MovieDetails


/*
console.log(movieId);
    

  "/ktqPs5QyuF8SpKnipvVHb3fwD8d.jpg"
  


   



  
 
*/