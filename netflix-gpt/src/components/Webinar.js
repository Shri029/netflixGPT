import React from 'react';
import Background from '../assets/Background.png';
import Swamiji from '../assets/SwamiJi.png';
import Calender from '../assets/Calender.png'
import Zoom from '../assets/Zoom.png'
import { useState } from "react";
import dataSwamiJi from '../utils/dataSwamiji.json';

const Webinar = () => {
  const [fullName, setFullName]= useState("");
  const [number, setNumber]= useState("");
  const [email, setEmail]= useState("");
    const handleButtonClick = () => {
        console.log("Clicked")
    }

    const Details = ()=> {
      return <>
        <div className='w-5/12 bg-white rounded-lg mx-auto flex-wrap items-center'>
          <h4 className='absolute bg-orange-500 mx-24 my-48 p-2 rounded-md font-sans text-xl font-semibold'>Your Instructor</h4>
          <img 
          alt="swamiji" 
          src={Swamiji}
          />
        <h4 className='bg-orange-600 font-sans p-4 text-xl text-center font-semibold'>Swami Rudraksha Dev</h4>
        <div className='flex-row p-2 m-2'>
          <div className='flex text-black text-sm font-bold'>
            <div className='flex border-orange-600  border-r-2 p-1'>
              <img className='w-10 h-10' alt="calender"src={Calender}/>
              <div className='flex-row px-3'>
                <h5 className='mb-1'>24th January, 2025 </h5>
                <h5>7:00pm to 9:00pm</h5>
              </div>
            </div>
            <img className='px-3'alt="zoom" src={Zoom}/>
          </div>
          <div className='flex flex-wrap items-center p-2'>
            {dataSwamiJi.map((data, key)=>(
              <div key={key} className='p-2 m-1 text-black text-center font-bold font-sans bg-orange-50'>
                  <p1 className='text-xs'>{data.title}</p1>
                  <h5 className='text-sm'>{data.number}</h5>
              </div>
            ))}
          </div>
        </div>
        </div>
        </> }

    const Login = () => {
      return <>
            <div className='w-5/12 p-10 bg-white rounded-lg mx-auto flex-wrap items-center'>
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
                <button className="p-3 my-3 w-full bg-orange-500 rounded-lg text-sm" onClick={handleButtonClick}>Free Registeration</button>
              </form>
            </div>
      </>

    }

  return (
    <div className='container'>
      <div className='container justify-between items-center'>
          <div className='absolute flex flex-wrap'>
            <img 
              className='bg-black'
              alt="background" 
              src={Background}
            />
          </div>
          <div className='w-8/12 absolute mx-auto my-10 right-0 left-0 flex-wrap flex-row justify-between items-center'>
            <div className='text-center text-3xl text-white font-bold mb-6'>
              <h1 className='text-white'>Join Swami Rudraksha Dev’s</h1>
              <h1 className='text-amber-500'>Live Shaktipath Webinar</h1>
            </div>
            <div className='flex flex-row'>
              <Details/>
              <Login/>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default Webinar;