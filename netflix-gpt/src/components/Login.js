import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const [isSignInFormForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInFormForm);
  }

  const handleButtonClick = () => {
    //validate from data
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInFormForm){
      //Sign Up 

      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      ).then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          navigate("/browse");
        }).catch((error) => {
          setErrorMessage(error.message)
        });
        console.log("Logged in",user);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +"-"+ errorMessage);
      });
      }
    else{
      //Sign in logic
      signInWithEmailAndPassword(auth,
        email.current.value, 
        password.current.value)
      .then((userCredential) => {
        // Signed in 
        navigate("/browse");
        console.log("Signed In");
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +"-"+errorMessage);
      });
    }

    //Sign In Sign up logic
    console.log(message);
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
      <form onSubmit={(e)=>{e.preventDefault()}} className='w-3/12 p-10 absolute bg-black my-28 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
          <h1 className='p-3 font-bold text-2xl'>{isSignInFormForm? "Sign In" : "Sign Up"}</h1>
          {!isSignInFormForm && <input className="p-3 my-3 w-full bg-gray-700 text-sm" ref={name} type="text" placeholder="Full Name"/>}
          <input className="p-3 my-3 w-full bg-gray-700 text-sm" ref={email} type="text" placeholder="Email Address"/>
          <input className="p-3 my-3 w-full bg-gray-700 text-sm" ref={password} type="text" placeholder="Password"/>
          <p className='text-red-500 font-bold text-md py-2'>{errorMessage}</p>
          <button className="p-3 my-3 w-full bg-red-700 rounded-lg text-sm" onClick={handleButtonClick}>{isSignInFormForm? "Sign In" : "Sign Up"}</button>
          <p className='p-2 cursor-pointer text-sm' onClick={toggleSignInForm}>{isSignInFormForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;