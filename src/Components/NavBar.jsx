import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="flex justify-between items-center border bg-gray-200 w-full h-[70px] p-[2rem] rounded-[10px] font-poppin">
        <div className="text-[25px]">
          <h1>
            <strong>Job</strong>Search
          </h1>
        </div>
        <div className="list-none hidden lg:flex">
          <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 ">
            Jobs
          </li>
          <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 ">
            Companies
          </li>
          <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 ">
            About
          </li>
          <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 ">
            Contact
          </li>
          <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 ">
            Blog
          </li>
          <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 ">
            Login
          </li>
          <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 ">
            Register
          </li>
        </div>
        <div
          onClick={handleClick}
          className=" block lg:hidden text-black  sm:mr-10 hover:cursor-pointer "
        >
          {!click ? (
            <GiHamburgerMenu size={20} />
          ) : (
            <AiOutlineClose size={20} />
          )}
        </div>

        {/* responsive */}
        <div
          className={
            click
              ? ` block z-30 lg:hidden fixed top-[-370px] left-[-1px] w-[100%] border-b border-r-white h-[370px] bg-black ${click ? "translate-y-full" : "translate-y-0"
              }  duration-500 transition ease-out `
              : "fixed left-[-100%]  "
          }
        >
          <div
            className={`flex justify-center  sm:justify-between  text-2xl font-Lobster items  ml-[1%] h-[370px]  w-full text-white   `}
          >
            <div className="text-[17px] sm:text-[25px]  mx-3  mt-[30px] ml-[20px]">
              <h1>
                <strong>Job</strong>Search
              </h1>
            </div>

            <div className="list-none flex flex-col  px-3 text-[17px] sm:text-[21px]  justify-center items-center  mt-[30px]">
              <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 border-black hover:border-green-600 ">
                Jobs
              </li>
              <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 border-black hover:border-green-600 ">
                Companies
              </li>
              <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 border-black hover:border-green-600 ">
                About
              </li>
              <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 border-black hover:border-green-600 ">
                Contact
              </li>
              <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 border-black hover:border-green-600 ">
                Blog
              </li>
              <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 border-black hover:border-green-600 ">
                Login
              </li>
              <li className=" mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 border-black hover:border-green-600 ">
                Register
              </li>
            </div>
            <div
              onClick={handleClick}
              className="block lg:hidden  text-white   mt-[30px] mr-[40px] hover:cursor-pointer "
            >
              {!click ? (
                <GiHamburgerMenu size={20} />
              ) : (
                <AiOutlineClose size={20} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
