import {  useSelector } from "react-redux";
import useVideobg from "../Hooks/useVideobg";

const VideoBackground = (props) => {
    const {id}=props;
  const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);
  useVideobg(id);
if (!trailerVideo) return null;
  return (
    <div className="w-full aspect-video overflow-hidden">
      <iframe className="w-full h-full " 
      src={"https://www.youtube.com/embed/"+trailerVideo.key+"?&autoplay=1&mute=1&loop=1&playlist="+trailerVideo.key+"&controls=0&modestbranding=1&rel=0&showinfo=0"}

      
       title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
          </div>
  )
}
export default VideoBackground;

/*
{`https://www.youtube.com/embed/' +trailerVideo.key+'?autoplay=1&mute=1&loop=1&playlist='+trailerVideo.key+'&controls=0&modestbranding=1&rel=0&showinfo=0`}
*/