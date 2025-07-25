import  { useEffect } from 'react'
import { addPopularMovies } from "../utils/moviesSlice";
import { Popular_URL } from "../utils/constant";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from 'react-redux';


const usePopularMovies=()=>{
const dispatch = useDispatch();
const popular_mov=async()=>{
   const data=await fetch(Popular_URL,API_OPTIONS);
   const json=await data.json();
   dispatch(addPopularMovies(json.results));
}
useEffect(()=>{

  popular_mov()
    
},[]);
}
export default usePopularMovies;
