import React from "react";
import Header from "../static/Header";

const Homescreen = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="w-full h-[500px] bg-slate-200 flex items-center justify-center">
        <div className="w-[70%] h-[400px]">
          <div className=" w-full h-[50px] flex items-center justify-center">
            <button className="bg-pink-300 rounded-3xl h-[35px] text-gray w-[37%] font-semibold">
              Over 3 million ready-to-work creatives!
            </button>
          </div>
          <div className="w-full h-[250px] ">
            <h1 className="text-[75px] text-center">
              The world’s destination for design
            </h1>
            <p className="font-semibold text-grey-300 text-center">
              Get inspired by the work of millions of top-rated designers &
              agencies around the world.
            </p>
          </div>
          <div className="w-full h-[80px] flex  justify-center items-center">
            <button className="bg-slate-950 rounded-3xl text-white h-[50px] w-[13%]">
              Get started
            </button>
          </div>
        </div>
      </div>
      {/* 
      yellow part */}
      <div className="bg-yellow-300 w-full h-[650px] flex items-center justify-center">
        <div className="w-[45%] h-[90%]">
          <div className=" w-full h-[55%]">
            <h1 className="text-[70px] text-center mb-4">
              {" "}
              Find your next
              <br /> designer today
            </h1>
            <p className="text-[25px] text-center">
              The World's leading use Dribbble to hire creative talent. Browse
              millions of top-rated portfolios to find your perfect creative
              match
            </p>
          </div>
          <div className=" w-full h-[30%] flex items-center justify-center">
            <div className="w-[60%] h-[60%] flex items-center justify-evenly">
              <button className="bg-slate-800 rounded-full w-[40%] h-[60%] text-white font-semibold">
                Get started now
              </button>

              <button className="bg-white rounded-full w-[40%] h-[60%] font-semibold ">
                Learn about hiring
              </button>
            </div>
          </div>
          <p className="text-[20px] text-center">
            Are you a designer?join Dribbble
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
