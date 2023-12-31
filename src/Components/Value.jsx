import React from "react";

const Value = () => {
  return (
    <>
      <div className="mb-[4rem] mt-[6rem]">
        <h1 className="text-black  text-[25px] py-[2rem] pb-[3rem] font-bold w-[100%] sm:w-[400px] block">
          The value that holds as true and to account
        </h1>
        <div className=" flex flex-col md:flex-row  items-center">
          <div className="singleGrid  w-[85%] md:w-[40%] rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex  items-center gap-3">
              <div className="imageDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src="/img/adobe.png" alt="" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-[18px]">
                Simplicity
              </span>
            </div>
            <p className="text-[13px] text-black  font-semibold opacity-[.7] py-[1rem]">
              Things being made beautiful simple are at the heart of everything
              we do
            </p>
          </div>
          <div className="singleGrid  w-[85%] md:w-[40%] rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex  items-center gap-3">
              <div className="imageDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src="/img/adobe.png" alt="" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-[18px]">
                Simplicity
              </span>
            </div>
            <p className="text-[13px] text-black font-semibold opacity-[.7] py-[1rem]">
              We work on the basis of creating trust which can be nurtured
              through authenticity and transparency
            </p>
          </div>
          <div className="singleGrid rounded-[10px] w-[85%] md:w-[40%] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imageDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src="/img/adobe.png" alt="" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-[18px]">
                Simplicity
              </span>
            </div>
            <p className="text-[13px] text-black font-semibold opacity-[.7] py-[1rem]">
              We believe in making things better for everyone, even if just a
              little bit!
            </p>
          </div>
        </div>
        <div className=" card mt-[2rem] flex justify-between items-center bg-gray-200 p-[2rem] sm:p-[5rem] rounded-[10px]">
          <div className=" sm:w-[100%]">
            <h1 className="text-blue-600 text-[20px] sm:text-[30px] font-bold">
              Ready to switch a careers
            </h1>
            <h2 className="text-gray-700 text-[19px] sm:text-[25px] font-bold">
              Let's get Started!
            </h2>
          </div >
          <button className="border-[2px] rounded-[10px] w-[130px] sm:w-[70%] h-[60px] sm:h-[100px]  sm:py-[4px] sm:px-[50px] text-[13px] sm:text-[18px] font-semibold text-blue-600 hover:bg-white border-blue-600">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Value;
