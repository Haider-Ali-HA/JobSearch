import React from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import {BsHouseDoor} from 'react-icons/bs'


const Search = () => {
  return (
    <>
      <div className="w-full h-[300px] rounded-lg bg-gray-400 flex justify-center items-center">
        <form action="" className="flex">
          <div className="flex  justify-between px-5 items-center shadow-lg shadow-gray-500 h-[90px] w-full bg-white rounded-lg">
            <div className="flex items-center mx-3">
              <AiOutlineSearch className="text-[25px] mx-3" />
              <input
                type="text"
                className="bg-transparent text-green-600 focus:outline-none w-full"
                placeholder="Search Job Here..."
              />
              <AiOutlineCloseCircle className="text-[25px] text-gray-400 hover:text-black hover:cursor-pointer" />
            </div>
            <div className="flex items-center mx-9">
              <BsHouseDoor className="text-[25px] mx-3" />
              <input
                type="text"
                className="bg-transparent text-green-600 focus:outline-none w-full"
                placeholder="Search By Company..."
              />
              <AiOutlineCloseCircle className="text-[25px] text-gray-400 hover:text-black hover:cursor-pointer" />
            </div>
            
            <div className="flex items-center mx-3">
              <CiLocationOn className="text-[25px] mx-3" />
              <input
                type="text"
                className="bg-transparent text-green-600 focus:outline-none w-full"
                placeholder="Search By Location..."
              />
              <AiOutlineCloseCircle className="text-[25px] text-gray-400 hover:text-black hover:cursor-pointer" />
            </div>
            <button className="bg-green-600 p-3 w-[100px] rounded-lg mx-3 text-white">Search</button>
          </div>
         
         
        </form>
      </div>
    </>
  );
};

export default Search;
