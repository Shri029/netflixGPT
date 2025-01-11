import React, { useEffect } from 'react';
import Netflix_Logo_PMS from '../assets/Netflix_Logo_PMS.png';
import User_Avatar from '../assets/User_Avatar.jpg';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser} from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = () =>{
    signOut(auth)
     .then(() => {}).catch((error) => {
      // An error happened.
    });
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName} = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
          console.log("Logged out");
        }
      });

      //Unsubscribe when component unscuscribe
      return () => unSubscribe();
},[]);
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
            src={User_Avatar}
          />
          <button onClick={handleSignout} className='font-bold text-white'>(Sign Out)</button>
        </div>
    </div>
  )
}

export default Header