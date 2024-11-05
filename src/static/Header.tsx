import React from "react";
import pix from "../assets/dribblogo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className=" w-[full] h-[70px] flex justify-between">
        <div className="w-[45%] h-[70px]  flex justify-between">
          <div className=" w-[20%] h-[70px] ml-6">
            <img className="w-full h-full" src={pix} alt="image" />
          </div>
          <div className=" w-[70%] h-[70px] flex justify-between items-center">
            <nav>Find Designers</nav>
            <nav>Inspiration</nav>
            <nav>Jobs</nav>
            <nav>Go pro</nav>
          </div>
        </div>
        <div className="w-[30%] h-[70px]  flex justify-around items-center">
          <div>
            <input
              className="border rounded-3xl h-[50px] pl-8"
              placeholder="search"
            />
          </div>
          <div>
            <Link to="/login"> Log in</Link>
          </div>
          <div>
            <Link to="/signup">
              {" "}
              <button
                className="border rounded-3xl bg-slate-950 h-[45px] text-white w-[100px] outline-none"
                type="submit"
              >
                sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
