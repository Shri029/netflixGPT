import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInFormForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInFormForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
          alt="background" 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg"
        />
      </div>
      <form className='w-3/12 p-10 absolute bg-black my-10 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
          <h1 className='p-3 font-bold text-2xl'>{isSignInFormForm? "Sign In" : "Sign Up"}</h1>
          {!isSignInFormForm && <input className="p-3 my-3 w-full bg-gray-700 text-sm" type="text" placeholder="Full Name"/>}
          <input className="p-3 my-3 w-full bg-gray-700 text-sm" type="text" placeholder="Email Address"/>
          <input className="p-3 my-3 w-full bg-gray-700 text-sm" type="text" placeholder="Password"/>
          <button className="p-3 my-3 w-full bg-red-700 rounded-lg text-sm">{isSignInFormForm? "Sign In" : "Sign Up"}</button>
          <p className='p-2 cursor-pointer text-sm' onClick={toggleSignInForm}>{isSignInFormForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;