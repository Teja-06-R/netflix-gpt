import GptSearchBar from "./GptSearchBar";
import GptmovieSugg from "./GptmovieSugg";
import { bg_Url } from "../utils/constant";

const GptSearch = () => {
  return (
    <div className="">
      <div className="relative -z-10">
        <img className="absolute" src={bg_Url} />
      </div>
      <GptSearchBar />
      <GptmovieSugg />
    </div>
  );
};

export default GptSearch;
