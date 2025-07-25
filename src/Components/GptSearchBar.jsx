import { useSelector } from "react-redux";
import lang from "../utils/languageconst";

const GptSearchBar = () => {
  const langData=useSelector((store)=>store.config.lan)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input type="text" 
        placeholder={lang[langData].gptPlaceholder } 
        className="bg-white text-black p-2 rounded border m-4 col-span-9"/>
        <button className="bg-red-500 rounded col-span-3 px-2 py-1 m-4 hover:bg-red-600 ">{lang[langData].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar