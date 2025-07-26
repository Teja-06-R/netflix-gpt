import { useSelector } from "react-redux"
import Movielist from "./Movielist";

const GptmovieSugg = () => {
  const {movieNames,movieResults}=useSelector(store=>store.GptSearch);
   if(!movieNames) return;
  return (
    <div className="p-4 m-4 bg-black/70 text-white ">
      {movieNames.map((movieName,index)=>(
        <Movielist
         key={movieName}
          title={movieName}
           movies={movieResults[index]}
           />))}
    </div>
  );
}

export default GptmovieSugg