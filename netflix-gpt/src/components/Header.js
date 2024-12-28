import React from 'react';
import Netflix_Logo_PMS from '../assets/Netflix_Logo_PMS.png'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img 
          className='w-36'
          alt="logo" 
          src={Netflix_Logo_PMS}
        />
    </div>
  )
}

export default Header