import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";


const useVideobg=(id)=>{
    const dispatch=useDispatch();
    const getMoviesVideo=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos',API_OPTIONS);
      const json=await data.json()
     
      if (!json){
        return;
      }
      const filterData=json.results.filter((video)=>video.type==="Trailer")
      const trailer=filterData.length ? filterData[0]:json.results[0];
      dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
      getMoviesVideo()
    },[]);
}
export default useVideobg;