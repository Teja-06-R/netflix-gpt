import GptSearchBar from "./GptSearchBar";
import GptmovieSugg from "./GptmovieSugg";
import { bg_Url } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="relative -z-10">
        <img className="fixed top-0 left-0 w-full h-[100vh] sm:h-[90vh] md:h-[100vh] object-cover " src={bg_Url} />
      </div>
      <div className="pt-[30%] md:pt-0">
      <GptSearchBar />
      <GptmovieSugg />
    </div>
    </>
  );
};

export default GptSearch;
