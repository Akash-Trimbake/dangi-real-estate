import React from "react";

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
    </div>
  );
};

export default About;
