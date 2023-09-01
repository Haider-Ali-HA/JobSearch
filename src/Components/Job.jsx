import React from "react";
import { BiTimeFive } from "react-icons/bi";
const Job = () => {
  const Data = [
    {
      id: 1,
      title: "Web Developer",
      image: "/img/adobe.png",
      time: "Now",
      location: "Pakistan",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum sit eveniet eius ",
      company: "Novac Linux Co.",
    },
    {
      id: 2,
      title: "App Developer",
      image: "/img/adobe.png",
      time: "2-Days",
      location: "London",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum sit eveniet eius ",
      company: "Novac Linux Co.",
    },
    {
      id: 3,
      title: "Web Developer",
      image: "/img/adobe.png",
      time: "Now",
      location: "Pakistan",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum sit eveniet eius ",
      company: "Novac Linux Co.",
    },
    {
      id: 4,
      title: "App Developer",
      image: "/img/adobe.png",
      time: "2-Days",
      location: "London",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum sit eveniet eius ",
      company: "Novac Linux Co.",
    },
  ];
  return (
    <>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-500 shadow-lg shadow-gray-500 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-gray-700 group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center gap-1 text-gray-300 ">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h1 className="text-[#ccc]">{location}</h1>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}{" "}
              </p>
              <div className="company flex items-center gap-2">
                <img src={image} alt="company logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-gray-500 hover:bg-white hover:text-white group-hover:text-black ">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Job;
