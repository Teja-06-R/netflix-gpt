import { IMG_CDN } from "../utils/constant";

const MovieCard = (props) => {
    const {poster_path}=props;
  return (
    <div className="min-w-[150px] max-w-[150px]">
        <div>
            <img alt="movie card"
            className="rounded-lg w-full hover:scale-105 transition-transform duration-300"
            src={IMG_CDN+ poster_path}
            />
        </div>
    </div>
  )
}

export default MovieCard