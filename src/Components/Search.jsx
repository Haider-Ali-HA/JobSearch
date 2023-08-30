import React from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";

const Search = () => {
  return (
    <>
      <div className="searchDiv w-full h-[300px] rounded-lg bg-gray-400 flex flex-col justify-center items-center">
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
            <button className="bg-green-600 p-3 w-[100px] rounded-lg mx-3 text-white">
              Search
            </button>
          </div>
        </form>
        <div className="secDiv flex items-center gap-10 mt-5 justify-center">
          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#0a0a0a] font-semibold">
              Sort By:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white outline-none rounded-[3px] px-4 py-1"
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
              className="bg-white outline-none rounded-[3px] px-4 py-1"
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
              className="bg-white outline-none rounded-[3px] px-4 py-1"
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
