import React from 'react'
import StartImage from "../assets/startImage.jpg"

const Hero = () => {
  return (
    <div>
    <div className="absolute z-20 text-white top-[40%] font-bold left-[8%] flex flex-col gap-4">
    <h1>Dangi Realty International</h1>
    <h2>Your Trusted Real Estate Partner</h2>
    <div ><button className="border p-2 rounded-full hover:bg-white hover:text-black ">Learn More</button></div>
    </div> 
    <div className="absolute z-10 h-[828px] w-full bg-black bg-opacity-50"></div>
    <div className="hero h-[828px] w-full bg-cover bg-fixed " style={{ backgroundImage: `url(${StartImage})` }}>
    </div>
    </div>
  )
}

export default Hero