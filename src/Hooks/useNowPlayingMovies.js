import React, { useEffect } from 'react'
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { Now_playing_URL } from "../utils/constant";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from 'react-redux';


const useNowPlayingMovies=()=>{
  const nowPlayingMovies=useSelector(store=>store.nowPlayingMovies);
const dispatch = useDispatch();
const now_playing_mov=async()=>{
   const data=await fetch(Now_playing_URL,API_OPTIONS);
   const json=await data.json();
   dispatch(addNowPlayingMovies(json.results));
}
useEffect(()=>{

  !nowPlayingMovies && now_playing_mov()
    
},[]);
}
export default useNowPlayingMovies;
