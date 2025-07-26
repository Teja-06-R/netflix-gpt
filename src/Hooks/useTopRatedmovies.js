import  { useEffect } from 'react'
import { addTopRatedMovies } from "../utils/moviesSlice";
import { Toprated_url } from "../utils/constant";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch ,useSelector} from 'react-redux';


const useTopRatedMovies=()=>{
const topratedmovies=useSelector(store=>store.topratedmovies);
const dispatch = useDispatch();
const top_rated_mov=async()=>{
   const data=await fetch(Toprated_url,API_OPTIONS);
   const json=await data.json();
   dispatch(addTopRatedMovies(json.results));
}
useEffect(()=>{

 !topratedmovies && top_rated_mov()
    
},[]);
}
export default useTopRatedMovies;
