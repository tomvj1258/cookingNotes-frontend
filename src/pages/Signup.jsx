import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import signupImg from "../assets/images/signup.svg";
import axios from "axios";
import { BASE_URL } from "../config/config";

const Signup = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         const res = await axios.post(`${BASE_URL}/auth/register`, {
            username,
            email,
            password,
         });

         setLoading(false);
         toast.success(res.data.message);

         navigate("/login");
      } catch (err) {
         toast.error(err.message);
         console.error(err);
         setLoading(false);
      }
   };

   return (
      <div className=''>
         <div className='container '>
            <div className='w-full max-w-[1170px] mx-auto  '>
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 my-24'>
                  <div className=' hidden lg:block my-auto py-3 px-4 rounded-md'>
                     <figure className='mx-4   '>
                        <img src={signupImg} alt='' />
                     </figure>
                  </div>

                  <div className=' shadow-lg rounded-xl my-12  w-full max-w-[600px] mx-auto'>
                     <form className='my-12 mx-10 ' onSubmit={handleSubmit}>
                        <h2 className='text-[25px] leading-9 text-headingColor font-[600]'>
                           Create an
                           <span className='text-primaryColor font-semibold leading-9 ml-1'>
                              Account
                           </span>{" "}
                        </h2>
                        <div className='mt-12'>
                           <label htmlFor='username' className='hidden' />
                           <input
                              type='text'
                              id='username'
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              placeholder='Enter your name:'
                              className='text-[18px] leading-7 text-headingColor bg-transparent w-full px-4 py-3 border-b border-solid border-black focus:outline-none focus:border-b-primaryColor placeholder:text-textColor cursor-pointer rounded '
                              required
                           />
                        </div>
                        <div className='mt-8'>
                           <label htmlFor='email' className='hidden' />
                           <input
                              type='email'
                              id='email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder='Email:'
                              className='text-[18px] leading-7 text-headingColor bg-transparent w-full  px-4 py-3 border-b border-solid border-black focus:outline-none focus:border-b-primaryColor placeholder:text-textColor cursor-pointer rounded '
                              required
                           />
                        </div>
                        <div className='mt-8'>
                           <label htmlFor='password' className='hidden' />
                           <input
                              type='password'
                              id='password'
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder='Password:'
                              className='text-[18px] leading-7 text-headingColor bg-transparent w-full px-4 py-3 border-b border-solid border-black focus:outline-none focus:border-b-primaryColor placeholder:text-textColor cursor-pointer rounded '
                              required
                           />
                        </div>
                        <button
                           type='submit'
                           className='text-[20px] bg-primaryColor px-3 py-2 text-white font-[500] rounded-lg mt-20 w-full hover:bg-secondaryColor'
                        >
                           {loading ? (
                              <HashLoader size={35} color='#ffffff' />
                           ) : (
                              "Sign Up"
                           )}
                        </button>
                        <p className='mt-3 text-center '>
                           Already have an account?{" "}
                           <NavLink
                              to={"/login"}
                              className={
                                 "text-primaryColor text-[20px] font-semibold hover:text-secondaryColor"
                              }
                           >
                              Login
                           </NavLink>
                        </p>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Signup;
