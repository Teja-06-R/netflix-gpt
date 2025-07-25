import  { useEffect } from 'react'
import { addTopRatedMovies } from "../utils/moviesSlice";
import { Toprated_url } from "../utils/constant";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from 'react-redux';


const useTopRatedMovies=()=>{
const dispatch = useDispatch();
const top_rated_mov=async()=>{
   const data=await fetch(Toprated_url,API_OPTIONS);
   const json=await data.json();
   dispatch(addTopRatedMovies(json.results));
}
useEffect(()=>{

  top_rated_mov()
    
},[]);
}
export default useTopRatedMovies;
