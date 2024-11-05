import React from "react";
import pix from "../assets/30fd1f7b63806eff4db0d4276eb1ac45.mp4";
import pix1 from "../assets/goo-removebg-preview.png";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div>
      <div className="flex gap-10 h-screen">
        <main className="border-r w-[400px]">
          <video
            className="w-full h-full object-cover"
            src={pix}
            loop
            autoPlay
            playsInline
            controls
          />
        </main>
        <main className="w-full h-full flex items-center justify-center md:justify-start ml-40">
          <div className="felx flex-col mb-4">
            <h1 className="text-[20px] font-bold mb-10">sign up to Dribbble</h1>
            <div className="flex flex-col">
              <button className=" bg-slate-950 w-[400px] border rounded-full h-[60px] flex items-center mb-4 justify-center gap-6 font-semibold">
                <img className="w-[30px] h-[25px]" src={pix1} alt="image" />
                <p className="text-white"> sign up with Google</p>
              </button>
              <div>
                <p className="text-center text-[14px] mb-8">or</p>
              </div>
              <div>
                <Link to="/register">
                  {" "}
                  <button className="border rounded-full h-[60px] w-[400px] mb-8">
                    continue with email
                  </button>
                </Link>
              </div>
              <p className="text-center text-[12px] mb-4">
                By creating an account you agree with our Terms of Service,
                Privacy Policy,
                <br /> and our default Notification Settings.
              </p>
              <p className="text-center text-[12px]">
                Already have an account? <Link to="/login">sign In</Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default signup;
