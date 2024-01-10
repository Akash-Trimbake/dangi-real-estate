import React from "react";
import photos from "./Photos";
// import A from "../assets/Photos/A.avif"
const principles = [
  {
    head: "Customer Satisfaction",
    desc: "We prioritize customer satisfaction by providing excellent service and meeting their needs. Our goal is to exceed expectations.",
  },
  {
    head: "Cost Savings",
    desc: "We help our clients save money by offering competitive prices and negotiating the best deals. Your financial well-being is important to us.",
  },
  {
    head: "Time Efficiency",
    desc: "We understand the value of your time. Our efficient processes and dedicated team ensure a smooth and timely real estate experience.",
  },
];

const About = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold my-8">Our principles</h2>
        <div className=" p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {principles.map((principle, index) => (
            <div key={index} className="bg-[#ebeadf] p-16 rounded-md">
              <p className="text-xl font-semibold mb-2 text-center">
                {principle.head}
              </p>
              <p className="text-lg text-justify">{principle.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#ebeadf] flex flex-col justify-center items-center">
        <h2 className="font-bold my-8">Meet the best team ever</h2>
        <div className="grid grid-cols-4 gap-24 px-32 items-center justify-center my-10">
        {
          photos.map((photo)=>(
            <div className="h-[370px] w-[270px] px-4 mb-8 bg-[#cac8b9]  flex flex-col justify-center items-center rounded-lg shadow-xl" >
              <img className="w-[80%] h-[52%] rounded-full " key={photo.name} src={photo.path} alt="Team"/>
              <div className="font-bold text-xl flex justify-center mt-8 ">{photo.name}</div>
              <div className="text-md">{photo.address}</div>
            </div>
            
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default About;
