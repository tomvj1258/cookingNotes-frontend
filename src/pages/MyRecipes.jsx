import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config/config";
import useGetUserId from "../hooks/useGetUserId";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import cardImg from "../assets/images/heroImg3.jpg";

const MyRecipes = () => {
   const [myRecipes, setMyRecipes] = useState([]);

   const userId = useGetUserId();

   useEffect(() => {
      const fetchMyRecipes = async () => {
         try {
            const res = await axios.get(
               `${BASE_URL}/recipes/myRecipes/${userId}`
            );
            // console.log(userId, "userID");
            setMyRecipes(res.data);
            console.log(res.data);
         } catch (err) {
            console.log("Err", err);
         }
      };

      fetchMyRecipes();
   }, []);
   return (
      <div>
         <section className=''>
            <div className='container w-full max-w-[1880px]'>
               <div className=''>
                  <div className='text-center my-20'>
                     <h2 className='text-[25px] text-headingColor font-bold leading-9  '>
                        Your Recipes
                     </h2>

                     <p className='text-[18px] text-textColor leading-7 font-[400] my-7 md:w-[550px] mx-auto  '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nisi omnis animi beatae impedit velit ex accusamus
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet, labore dolor perspiciatis ad harum laborum optio
                        placeat quisquam obcaecati! Itaque impedit aperiam
                        temporibus ducimus. Aliquid est unde id sit laudantium.
                        a. Quas, in natus!
                     </p>
                  </div>

                  <div className='grid grid-cols-5 gap-2 '>
                     <div className='col-span-5   relative'>
                        <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-7 w-full shadow-2xl rounded-xl '>
                           {Array.isArray(myRecipes) &&
                              myRecipes.map((recipe) => (
                                 <ul className='mx-2'>
                                    <li
                                       key={recipe._id}
                                       className='shadow-2xl rounded-xl col-span-1 px-3  '
                                    >
                                       <figure className='shadow-lg w-full  mb-5'>
                                          <img
                                             src={
                                                recipe.image
                                                   ? recipe.image
                                                   : cardImg
                                             }
                                             alt={recipe.title}
                                             className='rounded-lg w-full h-80 overflow-hidden object-cover'
                                          />
                                       </figure>
                                       <div className='flex flex-col gap-2 '>
                                          <div className='flex items-center justify-between'>
                                             <h2 className='text-[30px] md:text-[35px] px-3 py-2 leading-9 text-headingColor font-[600]'>
                                                {recipe.title}
                                             </h2>
                                          </div>
                                          <div className='flex flex-col md:flex-row md:items-center justify-between gap-1'>
                                             <p className=' text-[15px] px-3 py-2 my-0 text-headingColor leading-5 font-[600] order-2 md:order-1'>
                                                Cooking Time:{" "}
                                                <span className='text-textColor '>
                                                   {recipe.cookingTime} (Min)
                                                </span>
                                             </p>
                                             <div className='flex gap-2 items-center md:order-2'>
                                                <p className=' text-[14px] font-[600] px-2 py-1 rounded-xl  bg-green-200 border-2 border-green-600 text-primaryColor '>
                                                   {recipe?.foodType}
                                                </p>
                                                <p className=' text-[14px] font-[600] px-2 py-1 rounded-xl  bg-green-200 border-2 border-green-600 text-primaryColor'>
                                                   {recipe?.category}
                                                </p>
                                             </div>
                                          </div>
                                          <div className=''>
                                             <h3 className='text-[20px] px-3 py-2 text-headingColor font-[500] underline'>
                                                Description
                                             </h3>
                                             <p className='text-[17px] px-3 py-2 text-textColor leading-7 '>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Esse iusto cum nesciunt, a
                                                quibusdam itaque doloremque
                                                assumenda ad mollitia veniam.
                                             </p>
                                          </div>
                                          <div className='flex items-center justify-between gap-5 mx-2 mb-5'>
                                             <p className='text-[18px] leading-5 text-headingColor font-[500] '>
                                                For more details..
                                             </p>
                                             <Link
                                                to={`/recipes/${recipe._id}`}
                                                className='w-[40px] h-[40px] rounded-full border border-solid border-[#181a1e] flex items-center justify-center group hover:bg-primaryColor hover:border-none '
                                             >
                                                <BsArrowRight className='group-hover:text-white w-7 h-6' />
                                             </Link>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default MyRecipes;
