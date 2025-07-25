import  { useEffect } from 'react'
import { addUpcomingMovies } from "../utils/moviesSlice";
import { Upcoming_url } from "../utils/constant";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from 'react-redux';


const useUpcomingMovies=()=>{
const dispatch = useDispatch();
const top_rated_mov=async()=>{
   const data=await fetch(Upcoming_url,API_OPTIONS);
   const json=await data.json();
   dispatch(addUpcomingMovies(json.results));
}
useEffect(()=>{

  top_rated_mov()
    
},[]);
}
export default useUpcomingMovies;
