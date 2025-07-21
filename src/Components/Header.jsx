import {signOut } from "firebase/auth";
import { useEffect } from "react";
import {auth} from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constant";


const Header = () => {
  const user=useSelector((store)=>store.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();

useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user

    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    navigate("/browse");
    // ...
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/");
  }
})
// unsubscribing when the component unmounts
return ()=>unsubscribe();
},[]);



  const handleSignout=()=>{
    
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  navigate('/error');
});
  }
  return (
    <div className='absolute w-full px-12 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <div>
            <img className="w-48" src={LOGO}
            alt="logo"
            />
        </div>
        {user && <div>
          <button onClick={handleSignout} className='p-2 m-4 bg-red-600 rounded-lg hover:bg-red-700 font-semibold text-white  '>Sign out</button>
        </div>
}
    </div>
  )
}

export default Header;