import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login.svg";
import { useCookies } from "react-cookie";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { toast } from "react-toastify";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const [, setCookies] = useCookies(["access_token"]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const res = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password,
         });

         setCookies("access_token", res.data.token);
         window.localStorage.setItem("userId", res.data.userId);

         toast.success(res.data.message);

         navigate("/");
      } catch (err) {
         console.error(err.message);
      }
   };
   return (
      <div>
         <div className='container'>
            <div className='grid'>
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16'>
                  <div className=' w-full mx-auto max-w-[600px]'>
                     <div className='shadow-lg rounded-xl my-12 py-3 px-4 '>
                        <form className='my-16 mx-4 ' onSubmit={handleSubmit}>
                           <h2 className='text-[25px] leading-9 text-headingColor font-[600]'>
                              Hello!
                              <span className='text-primaryColor font-semibold leading-9 ml-2'>
                                 Welcome
                              </span>{" "}
                              Back
                           </h2>

                           <div className='mt-8'>
                              <label htmlFor='email' className='hidden' />
                              <input
                                 type='email'
                                 id='email'
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 placeholder='Email :'
                                 className='text-[18px] leading-7 text-headingColor bg-transparent w-full mt-4 px-4 py-3 border-b border-solid border-black focus:outline-none focus:border-b-primaryColor placeholder:text-textColor cursor-pointer rounded '
                              />
                           </div>
                           <div className='mt-8'>
                              <label htmlFor='password' className='hidden' />
                              <input
                                 type='password'
                                 id='password'
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder='Password :'
                                 className='text-[18px] leading-7 text-headingColor bg-transparent w-full mt-4 px-4 py-3 border-b border-solid border-black focus:outline-none focus:border-b-primaryColor placeholder:text-textColor cursor-pointer rounded '
                              />
                           </div>
                           <button
                              type='submit'
                              className='text-[20px] bg-primaryColor px-3 py-2 text-white font-[500] rounded-lg mt-20 w-full hover:bg-secondaryColor'
                           >
                              Login
                           </button>
                           <p className='mt-3 text-center '>
                              Don't have an account?{" "}
                              <NavLink
                                 to={"/register"}
                                 className={
                                    "text-primaryColor font-semibold text-[20px] hover:text-secondaryColor"
                                 }
                              >
                                 Register
                              </NavLink>
                           </p>
                        </form>
                     </div>
                  </div>

                  <div className=' my-auto hidden lg:block'>
                     <figure className=' py-3 px-4'>
                        <img src={loginImg} alt='' />
                     </figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
