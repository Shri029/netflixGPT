import React from 'react';
import { useState } from "react";

import dataSwamiJi from '../utils/dataSwamiji.json';

import Background from '../assets/Background.png';
import BGImg from '../assets/BGImg.png';
import BG from '../assets/BG.png';
import Swamiji from '../assets/SwamiJi.png';
import Calender from '../assets/Calender.png';
import Zoom from '../assets/Zoom.png';
import Yoga1 from '../assets/Yoga1.png';
import Yoga2 from '../assets/Yoga2.png';
import Yoga3 from '../assets/Yoga3.png';
import OM from '../assets/Om.png';
import Smile from '../assets/Smile.png';
import Yoga from '../assets/Yoga.png';
import Meditate from '../assets/Meditate.png';
import Meditate1 from '../assets/Meditate1.png';
import Lotus from '../assets/Lotus.png';
import Empowerment from '../assets/Empowerment.png';
import Knowledge from '../assets/Knowledge.png';
import Practise from '../assets/Practise.png';
import Universal from '../assets/Universal.png';


const Webinar = () => {
  const [fullName, setFullName]= useState("");
  const [number, setNumber]= useState("");
  const [email, setEmail]= useState("");
    const handleButtonClick = () => {
        console.log("Clicked")
    }

    const timer = [
      { "time": "10", "unit": "Days"}, 
      { "time": "24", "unit": "Hours" }, 
      { "time": "56", "unit": "Minutes" },
      { "time": "32", "unit": "Seconds" }
    ]

    const dataYoga = [
      {
        "img": Yoga1,
        "title": "Divine Energy of Shaktipat ",
        "content": "Uses Shaktipat to transfer divine energy through sacred mantras, or touch. This process, focused on the third eye, brings peace, awakens spirituality, and calms the mind.",
      },
      {
        "img": Yoga2,
        "title": "The Art of Om Chanting",
        "content": "Teaches the right posture and method for Om chanting, helping focus energy better. This practice improves meditation, clears the mind, and activates your chakras effectively.",
      },
      {
        "img": Yoga3,
        "title": "Ancient Kriya Yoga Technique",
        "content": "Guides breathing and posture exercises to balance the body and mind. Through Kriya Yoga techniques, you gain inner peace, boost awareness, and grow spiritually with harmony.",
      },
    ]

    const dataAttendee = [
      {
        "img": OM,
        "content": "Spiritual seekers yearning for a deeper connection with the divine.",
      },
      {
        "img": Yoga,
        "content": "Yoga practitioners wanting to enhance their practice.",
      },
      {
        "img": Meditate,
        "content": "Anyone interested in energy healing, meditation, and personal growth.",
      },
      {
        "img": Smile,
        "content": "Individuals seeking effective ways to manage anxiety, depression, stress, and OCD",
      },
    ]

    const dataBenefit = [
      {
        "img": Meditate1,
        "title": "Immediate Peace and Clarity ",
        "content": "Experience a calm and focused mind after just one session.",
      },
      {
        "img": Lotus,
        "title": "Energized Chakras",
        "content": "Learn to balance and harmonize your body’s energy centers for overall well-being.",
      },
      {
        "img": Empowerment,
        "title": "Personal Empowerment",
        "content": "Unlock your hidden potential to overcome challenges with renewed strength and positivity.",
      },
      {
        "img": Knowledge,
        "title": "Life-Changing Spiritual Insight",
        "content": "Gain access to ancient knowledge that has transformed lives for centuries.",
      },
      {
        "img": Practise,
        "title": "Tools for Daily Practice",
        "content": "Learn techniques that you can easily incorporate into your routine for ongoing growth.",
      },
      {
        "img": Universal,
        "title": "Universal Connection",
        "content": "Align with the universe’s energy to manifest abundance, health, and happiness in your life.",
      },
    ]

    const Details = ()=> {
      return <>
        <div className='w-5/12 bg-white rounded-lg mx-auto flex-wrap items-center text-black'>
          <h4 className='absolute bg-orange-500 mx-[13%] my-[20%] p-2 rounded-md font-sans text-xl font-semibold text-white'>Your Instructor</h4>
          <img 
          alt="swamiji" 
          src={Swamiji}
          />
        <h4 className='bg-orange-600 font-sans p-4 text-xl text-center font-semibold text-white'>Swami Rudraksha Dev</h4>
        <div className='flex-row p-2 m-2'>
          <div className='flex text-sm font-bold'>
            <div className='flex border-orange-600 border-r-2 p-1'>
              <img className='w-10 h-10' alt="calender"src={Calender}/>
              <div className='flex-row px-3'>
                <h5 className='mb-1'>24th January, 2025 </h5>
                <h5>7:00pm to 9:00pm</h5>Unlock
              </div>
            </div>
            <img className='px-3'alt="zoom" src={Zoom}/>
          </div>
          <div className='flex flex-wrap items-center p-2'>
            {dataSwamiJi.map((data, key)=>(
              <div key={key} className='p-2 m-1 text-center font-bold font-sans bg-orange-50'>
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

    const Timer = () => {
      return <>
      <div className='flex-row'>
          <h1 className='text-white font-bold text-3xl text-center mt-6'>Offer ends in</h1>
          <div className='flex flex-wrap items-center p-2 mx-auto justify-center'>
            {timer.map((data, key)=>(
              <div key={key} className='p-3 m-3 min-w-28 text-center font-bold font-sans bg-white border border-1 border-orange-500'>
                <p1 className='text-xl'>{data.time}</p1>
                <h5 className='text-lg'>{data.unit}</h5>
              </div>
            ))}
          </div>
          </div>
      </>
    }

    const Learning = () => {
      return <>
      <div className='flex-row my-10'>
        <h1 className='text-orange-500 font-bold text-3xl text-center'>What you’ll learn in this webinar</h1>
        <div className='w-[80%] mt-5 mx-auto flex justify-center'>
          {dataYoga.map((data, key)=>(
            <div key={key} className='m-5 text-center font-sans bg-white rounded-lg'>
              <img className='w-60' src={data.img}/>
              <h5 className='text-md font-bold py-1'>{data.title}</h5>
              <p1 className='text-sm font-semibold'>{data.content}</p1>
            </div>
          ))}
        </div>
        <span className="flex items-center justify-center">
        <button className="py-4 px-12 bg-orange-500 rounded-lg text-sm text-white font-semibold" onClick={handleButtonClick}>Register Now</button>
        </span>
        </div>
      </>
    }

    const Attendee = () => {
      return <>
              <div className='w-[55%] flex mx-auto mt-[28rem] justify-center'>
                <img className='bg-black' alt="background" src={Background}/>
                <div className='absolute my-5 bg-opacity-60'>
                  <span><h1 className='text-white font-bold text-3xl text-center my-5'>Who Should Attend?</h1></span>
                  <div className='w-[60%] mx-auto my-5 flex flex-wrap justify-between'>
                    {dataAttendee.map((data, key)=>(
                      <div key={key} className='min-w-56 m-5 w-20 text-center font-sans rounded-lg'>
                        <div className='bg-orange-600 rounded-lg w-14 h-14 items-center justify-center mx-auto'><img className='w-9' src={data.img}/></div>
                        <p1 className='text-sm font-semibold text-white'>{data.content}</p1>
                      </div>
                    ))}
                  </div>
                  <span className="flex items-center justify-center">
                    <button className="my-5 py-4 px-12 bg-orange-500 rounded-lg text-sm text-white font-semibold" onClick={handleButtonClick}>Free Registeration</button>
                  </span>
                </div>
              </div>
      </>
    }
  return (
    <div className='flex flex-row flex-wrap'>
      <div className='container flex-row justify-between items-center'>
        <div className='flex flex-wrap'>
          <img className='bg-black w-full h-[850]' alt="background" src={Background}/>
            <div className='w-8/12 absolute mx-auto my-10 right-0 left-0 flex-wrap flex-row justify-between items-center'>
              <div className='text-center text-3xl text-white font-bold mb-8'>
                <h1 className='text-white'>Join Swami Rudraksha Dev’s</h1>
                <h1 className='text-amber-500'>Live Shaktipath Webinar</h1>
              </div>
              <div className='flex flex-row'>
                <Details/>
                <Login/>
              </div>
              <Timer/>
              <Learning/>
            </div> 
            <Attendee/>
            
        <div className='w-[55%] my-12 mx-auto flex-row flex-wrap'>
          <h1 className='text-orange-500 font-bold text-3xl text-center'>What you’ll learn in this webinar</h1>
            <div className='flex flex-wrap flex-row my-5 mx-auto text-black'>
              {dataBenefit.map((data, key)=>(
                <div key={key} className='min-w-[25rem] m-2 p-1 w-20 flex-row flex-wrap font-sans rounded-md text-black border border-solid-1 border-orange-600  items-center'>
                  <div className='w-14 h-14 bg-orange-300 rounded-lg'><img className='w-9' src={data.img}/></div>
                  <div className='w-[30%] bg-orange-400'>
                    <h5 className='text-md font-bold'>{data.title}</h5>
                    <p1 className='text-sm font-semibold'>{data.content}</p1>
                  </div>
                </div>
              ))}
            </div>
            <span className="flex items-center justify-center">
              <button className="px-5 py-3 bg-orange-500 rounded-lg text-md text-white font-semibold" onClick={handleButtonClick}>Click here to register</button>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Webinar;