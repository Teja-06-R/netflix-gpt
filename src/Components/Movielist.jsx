import MovieCard from "./MovieCard"
import { Link } from "react-router-dom";



const Movielist = (props) => {
    const {title,movies}=props;
       

    if (!movies){
        return;
    }
    
  return (
    <div className=" px-2 sm:px-4 py-4">
        <h2  className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2">{title}</h2>
        <div className="flex overflow-x-scroll no-scrollbar">
            
            <div className="flex space-x-3 sm:space-x-4 md:space-x-6 "> 
                {movies.map((movie)=><Link
              key={movie?.id}
              to={"/browse/movie/" + movie?.id} 
              >
                <MovieCard poster_path={movie.poster_path}/>
                </Link>) }
            </div>
        </div>
    </div>
  )
}

export default Movielist