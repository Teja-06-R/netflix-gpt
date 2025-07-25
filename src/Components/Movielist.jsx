import MovieCard from "./MovieCard"

const Movielist = (props) => {
    const {title,movies}=props;
       

    if (!movies){
        return;
    }
    
  return (
    <div className=" px-4 py-2">
        <h2  className="text-white text-2xl font-bold ">{title}</h2>
        <div className="flex overflow-x-scroll">
            
            <div className="flex space-x-4 overflow-x-auto no-scrollbar"> 
                {movies.map((movie)=><MovieCard key={movie.id} poster_path={movie.poster_path}/>) }
            </div>
        </div>
    </div>
  )
}

export default Movielist