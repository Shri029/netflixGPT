import React from 'react';
import Netflix_Logo_PMS from '../assets/Netflix_Logo_PMS.png';
import Sign_out from '../assets/Sign_Out.jpg';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleSignout = () =>{
    signOut(auth)
     .then(() => {
       navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
          className='w-36'
          alt="logo" 
          src={Netflix_Logo_PMS}
        />
        <div className='flex p-2'>
          <img 
            className='w-12 h-12'
            alt="usericon"
            src={Sign_out}
          />
          <button onClick={handleSignout} className='font-bold text-white'>(Sign Out)</button>
        </div>
    </div>
  )
}

export default Header