import React from "react";
import { Link } from "react-router-dom";

const SidePanel = () => {
   return (
      <div>
         <div className='shadow-2xl p-3 lg:p-4 rounded-md mb-4'>
            <div className='flex items-center justify-between mt-3'>
               <p className=' text-headingColor text-[24px] lg:text-[26px] leading-9 mt-0 font-semibold'>
                  Do you have your own Recipe..?
               </p>
            </div>

            <div className='mt-5'>
               <p className='text-para mt-0 font-semibold text-textColor'>
                  Make your Recipes ForEver!
               </p>

               <ul className='mt-3 flex flex-col gap-4 lg:gap-3'>
                  <li className='  '>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        Share it with your Friends
                     </p>
                  </li>
                  <li className=' '>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        Try New Recipes
                     </p>
                  </li>
                  <li className=' '>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        Others can try & send their opinion
                     </p>
                  </li>
                  <li className=' '>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        Be Master on your kitchen
                     </p>
                  </li>
               </ul>

               <button className='btn px-2 w-full rounded-md'>
                  <Link to={"/create-recipes"}> Create Recipes</Link>
               </button>
            </div>
         </div>
      </div>
   );
};

export default SidePanel;
