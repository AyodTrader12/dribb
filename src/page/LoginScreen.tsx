import { useState } from "react";
import vid from "../assets/30fd1f7b63806eff4db0d4276eb1ac45.mp4";
import pix from "../assets/goo.png";
import { Link, useNavigate } from "react-router-dom";
const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-10 h-screen border-r">
        <main className="w-[400px] border-r ">
          <video
            src={vid}
            className="w-full h-full object-cover"
            loop
            autoPlay
            playsInline
            controls
          />
        </main>
        <main className="w-full h-full flex items-center justify-center md:justify-start ml-40">
          <div className="felx flex-col mb-4">
            <h1 className="text-[20px] font-bold mb-10">sign In to Dribbble</h1>
            <div className="flex flex-col">
              <button className="w-[400px] border rounded-3xl h-[60px] flex items-center mb-4 justify-center gap-6 font-semibold">
                <img className="w-[30px] h-[25px]" src={pix} alt="image" />
                <span className="text-sm text-gray-500 bg-white px-2 font-semibold">
                  sign in with Google
                </span>
              </button>
              <div>
                <p className="text-center text-[14px] mb-8">
                  or sign in with email
                </p>
              </div>
              <div className="flex flex-col">
                <label className="font-bold">username or Email</label>
                <input
                 required
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-[400px] h-[60px] border rounded-xl p-4 text-[16px] outline-none mb-6 "
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Password</label>
                <input
                    required
                  type="password"
              
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-[400px] h-[60px] border rounded-xl p-4 text-[16px] outline-none mb-6"
                />
              </div>
              <button
                className="bg-slate-900 border rounded-3xl w-[400px] h-[60px] text-white font-semibold mb-4"
                type="submit"
              >
                sign in{" "}
              </button>
              <p className="text-center">
                Don't have an account?
                <Link className="text-underline" to="/signup">
                  sign up
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginScreen;
