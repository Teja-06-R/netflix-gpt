import { useDispatch } from "react-redux";
import { IMG_CDN } from "../utils/constant";
import { showmovieDetails } from "../utils/moviesSlice";
import {resetSearch} from "../utils/gptSlice";
const MovieCard = (props) => {
  const dispatch = useDispatch();
  const { poster_path } = props;
  if (!poster_path) return null;
  const handleCardClick = () => {
    dispatch(resetSearch());
    dispatch(showmovieDetails()); // then show movie details
  };

  return (
    <div className="min-w-[150px] max-w-[150px]">
      <div>
        <img
          alt="movie card"
          className="rounded-lg w-full hover:scale-105 transition-transform duration-300"
          src={IMG_CDN + poster_path}
          onClick={handleCardClick}
        />
      </div>
    </div>
  );
};

export default MovieCard;
