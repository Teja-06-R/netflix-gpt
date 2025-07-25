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

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.GptSearch.showGptSearch);
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
  };
  const handleOnchange=(e)=>{
    dispatch(changeLanguage(e.target.value));
      console.log(e.target.value);
  }
  return (
    <div className="absolute w-full px-12 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img className="w-48" src={LOGO} alt="logo" />
      </div>
      {user && (
        <div>
          {showGptSearch && (<select className="bg-gray-950 text-white p-2 mx-2 rounded" onChange={handleOnchange}>
            {Supported_Languages.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
            
            </select>)}
          <button
            className="bg-purple-600 p-2 rounded hover:bg-purple-700 text-white"
            onClick={handleGptSearch}
          >
            {showGptSearch?"Home ":"GPT Search"}
          </button>
          <button
            onClick={handleSignout}
            className="p-2 m-4 bg-red-600 rounded-lg hover:bg-red-700 font-semibold text-white  "
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
