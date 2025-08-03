import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { Supported_Languages } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import { showmovieDetails } from "../utils/moviesSlice";


const Header = () => {
  const user = useSelector((store) => store.user);
    const ismovieDetails=useSelector(store=>store.movies.movieDetails);
  const showGptSearch=useSelector((store)=>store.GptSearch.showGptSearch);
  const ismovieDetailshown=useSelector(store=>store.movies.movieDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribing when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());

    ismovieDetails && dispatch(showmovieDetails());
  };
  const handleOnchange=(e)=>{
    dispatch(changeLanguage(e.target.value));
      console.log(e.target.value);
  }
  const handleLogo=()=>{
    dispatch(showmovieDetails());
  }
  return (
    <div className="absolute w-full px-12 py-1 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <div className="mb-3 md:mb-0">
        <button onClick={handleLogo}><img className="w-28 sm:w-32 md:w-36 " src={LOGO} alt="logo" /></button>
      </div>
      {user && (
        <div >
          {showGptSearch && (<select className="bg-gray-950 text-white p-2 mx-2 rounded" onChange={handleOnchange}>
            {Supported_Languages.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
            </select>)}
            {ismovieDetailshown && <button
            className="bg-blue-500 p-2 mr-2 rounded hover:bg-blue-700 text-white transition"
            onClick={handleLogo}
          > Home </button>}
          <button
            className="bg-purple-600 p-2 rounded hover:bg-purple-700 text-white transition"
            onClick={handleGptSearch}
          >
            {showGptSearch?"Home ":"GPT Search"}
          </button>
          <button
            onClick={handleSignout}
            className="p-2 m-4 bg-red-600 rounded-lg hover:bg-red-700 font-semibold text-white transition "
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
