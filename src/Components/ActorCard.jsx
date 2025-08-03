import { IMG_CDN } from "../utils/constant";

const ActorCard = ({ actor }) => {
  const { name, profile_path } = actor;
  if (!profile_path) return null;
  return (
    <div className="md:w-28 md:mx-2 mx-[3px] w-14">
      <img
        className="rounded-lg mb-2"
        src={IMG_CDN + profile_path}
        alt="Pfp"
      />
      <h1 className="md:text-xs text-[9px] text-center text-white font-black">{name}</h1>
      {/* <h1 className="md:text-xs text-[7px] text-center">( {character} )</h1> */}
    </div>
  );
};
export default ActorCard;