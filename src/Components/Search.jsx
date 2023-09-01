import React from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";

const Search = () => {
  return (
    <>
      <div className="searchDiv w-full h-[500px] sm:h-[300px] rounded-lg bg-gray-400 flex flex-col sm:flex-row md:flex-col justify-center px-3 items-center">
        <form action="" className="w-full sm:w-[60%] md:w-full  flex">
          <div className="flex flex-col md:flex-row  p-5  justify-between  md:px-5 items-center shadow-lg shadow-gray-500 h-[200px] md:h-[90px] w-full bg-white rounded-lg">
            <div className="flex  items-center mx-3 ">
              <AiOutlineSearch className="text-[25px] mx-3" />
              <input
                type="text"
                className="bg-transparent text-green-600 focus:outline-none w-full"
                placeholder="Search Job Here..."
              />
              <AiOutlineCloseCircle className="text-[25px] text-gray-400 hover:text-black hover:cursor-pointer" />
            </div>
            <div className="flex items-center mx-3 ">
              <BsHouseDoor className="text-[25px] mx-3" />
              <input
                type="text"
                className="bg-transparent text-green-600 focus:outline-none w-full"
                placeholder="Search By Company..."
              />
              <AiOutlineCloseCircle className="text-[25px]  text-gray-400 hover:text-black hover:cursor-pointer" />
            </div>

            <div className="flex items-center mx-3 ">
              <CiLocationOn className="text-[25px]  mx-3" />
              <input
                type="text"
                className="bg-transparent text-green-600 focus:outline-none w-full"
                placeholder="Search By Location..."
              />
              <AiOutlineCloseCircle className="text-[25px] text-gray-400 hover:text-black hover:cursor-pointer" />
            </div>
            <button className="bg-green-600 p-3  w-[90px] sm:w-[100px] h-[50px] sm:h-[50px] rounded-lg mx-3  text-white">
              Search
            </button>
          </div>
        </form>
        <div className="secDiv  flex flex-col md:flex-row items-center gap-10 mt-11 sm:mt-0 md:mt-5 justify-center">
          <div className="singleSearch   mx-5 md:mx-0 flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#0a0a0a] font-semibold">
              Sort By:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white outline-none w-[150px] rounded-[3px] px-4 py-1"
            >
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts with</option>
              <option value="">Contains</option>
            </select>
          </div>
          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="type" className="text-[#0a0a0a] font-semibold">
              Type:
            </label>
            <select
              name=""
              id="type"
              className="bg-white outline-none ml-5 md:ml-0 w-[150px] rounded-[3px] px-4 py-1"
            >
              <option value="">Full-time</option>
              <option value="">Remote</option>
              <option value="">Contract with</option>
              <option value="">Part-time</option>
            </select>
          </div>
          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="level" className="text-[#0a0a0a] font-semibold">
              Level:
            </label>
            <select
              name=""
              id="level"
              className="bg-white outline-none w-[150px] ml-5 md:ml-0 rounded-[3px] px-4 py-1"
            >
              <option value="">Senior</option>
              <option value="">Beginner</option>
              <option value="">Intermediate</option>
              <option value="">Advocate</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
