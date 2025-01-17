import React from 'react';
import Background from '../assets/Background.png';
import Swamiji from '../assets/SwamiJi.png';
import { useState } from "react";

const Webinar = () => {
  const [fullName, setFullName]= useState("");
  const [number, setNumber]= useState("");
  const [email, setEmail]= useState("");
    const handleButtonClick = () => {
        console.log("Clicked")
    }
  return (
        <div className='container min-h-screen flex justify-between items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='absolute flex flex-wrap'>
          <img 
            className='bg-black'
            alt="background" 
            src={Background}
          />
        </div>
        <div className='w-7/12 p-5 absolute bg-black mx-auto my-10 right-0 left-0 flex-wrap flex-row justify-between items-center'>
        <div className='text-center text-center text-3xl font-bold mb-10 text-white'>
          <h1 className='text-white'>Join Swami Rudraksha Dev’s</h1>
          <h1 className='text-amber-500'>Live Shaktipath Webinar</h1>
        </div>
        <div className='flex flex-wrap m-2 p-2 text-white'>
        <div className='w-5/12 bg-white rounded-lg mx-auto flex-wrap items-center'>
            <div className='absolute bg-orange-500 rounded-lg mx-20 my-40 p-2'>
              <h4 className='font-sans text-xl text-center font-semibold'>Your Instructor</h4>
            </div>
            <img 
                alt="swamiji" 
                src={Swamiji}
            />
            <div className='bg-orange-600'><h4 className='font-sans p-4 text-xl text-center font-semibold'>Swami Rudraksha Dev</h4></div>
        </div>
        <div className='w-5/12 p-10 bg-white rounded-lg mx-auto flex-wrap mx-auto flex-wrap items-center'>
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <h1 className='p-3 mb-3 font-bold text-2xl text-black text-center'>Enter Your Details</h1>
          {/* <label className='font-bold text-black'>Full Name</label> */}
          <input className="p-4 mb-4 w-full text-sm border border-solid border-b-2 rounded-lg text-black" value={fullName} 
          onChange={(e)=> {setFullName(e.target.value)}} type="text" placeholder="Enter Full Name"/>
          {/* <label className='my-5 font-bold text-black'>Whatsapp Number</label> */}
          <input className="p-4 mb-4 w-full text-sm  border border-solid border-b-2 rounded-lg text-black" type="text" value={number} 
          onChange={(e)=> {setNumber(e.target.value)}} placeholder="Email Whatsapp Number"/>
          {/* <label className='my-3 font-bold text-black'>Email</label> */}
          <input className="p-4 mb-4 w-full text-sm border border-solid border-b-2 rounded-lg text-black" type="text" value={email} 
          onChange={(e)=> {setEmail(e.target.email)}} placeholder="Email email id"/>
          <button className="p-3 my-3 w-full bg-orange-500 rounded-lg text-sm" onClick={handleButtonClick}>Free Registeration"</button>
      </form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Webinar;