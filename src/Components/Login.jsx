import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [issignInform,setissignInform]=useState(true);
  const toggleSign=()=>{
       setissignInform(!issignInform);
  }
  return (
    <div>
        <Header/>
        <div>
            <img className="absolute" src='https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg'/>
        </div>
        <form className="relative bg-black/80 p-8 w-full max-w-md text-white rounded-lg top-40 left-134 bg-opacity-30">
             <h1 className='font-bold  text-3xl mb-6  px-2 py-2'>{issignInform ? "Sign In" :"Sign Up"}</h1>
             {!issignInform &&  <input className="bg-gray-700/60 mb-4 m-2 p-4 w-full placeholder-white mx-1 rounded" type="text" placeholder='Enter your Name'></input>


             }
            <input className="bg-gray-700/60 mb-4 m-2 p-4 w-full placeholder-white mx-1 rounded" type="text" placeholder='Enter your Email id'></input>
            <input className="bg-gray-700/60 bg-opacity-60 m-2 p-4 w-full placeholder-white  mx-1 rounded" type="password" placeholder='Password'></input>
            <button className="m-2 p-4 w-full bg-red-600 rounded-lg hover:bg-red-700 font-semibold text-white  my-4" >{issignInform ? "Sign In" :"Sign Up"}</button>
            <p className='mx-1 cursor-pointer' onClick={toggleSign}>{issignInform ? "New to Netflix?Sign up now" :"Already registered Sign In"}</p>
        </form>
        
    </div>
  )
}

export default Login


// To handle big forms we need to use Formik library 