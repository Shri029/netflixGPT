import React from 'react';
import Background from '../assets/Background.png';
import Swamiji from '../assets/SwamiJi.png';

const Webinar = () => {
    const handleButtonClick = () => {
        console.log("Clicked")
    }
  return (
    <div>
        <div className='absolute'>
          <img 
            className='bg-blend-color bg-black bg-opacity-80 '
            alt="background" 
            src={Background}
          />
        </div>
        <div className='w-8/12 p-5 absolute my-28 mx-auto right-0 left-0 flex justify-center'>
        <div className='w-5/12 bg-white text-white rounded-lg mx-auto'>

            <text />
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className='w-5/12 p-10 bg-white text-white rounded-lg mx-auto'>
          <h1 className='p-3 font-bold text-2xl text-black'>Enter Your Details</h1>
          <label className='pt-4 font-bold text-black'>Full Name</label>
          <input className="p-4 my-3 w-full bg-gray-100 text-sm" type="text" placeholder="Enter Full Name"/>
          <label className='pt-4 font-bold text-black'>Whatsapp Number</label>
          <input className="p-4 my-3 w-full bg-gray-100 text-sm" type="text" placeholder="Email Whatsapp Number"/>
          <label className='pt-4 font-bold text-black'>Email</label>
          <input className="p-4 my-3 w-full bg-gray-100 text-sm" type="text" placeholder="Email email id"/>
          <button className="p-3 my-3 w-full bg-orange-600 rounded-lg text-sm" onClick={handleButtonClick}> "Free Registeration"</button>
      </form>
      </div>
    </div>
  )
}

export default Webinar;