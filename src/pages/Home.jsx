import React, { useState } from "react";

import heroImg1 from "../assets/images/heroImg2.jpg";
import heroImg2 from "../assets/images/heroImg5.jpg";
import heroImg3 from "../assets/images/heroImg6.jpg";
import HashLoader from "react-spinners/HashLoader";
import RecipesList from "../components/Recipes/RecipesList";
import { Link } from "react-router-dom";

const Home = () => {
   const [loading, setLoading] = useState(false);
   return (
      <div className='bg-green-50'>
         <section className='bg-gradient-to-r from-gray-100  via-green-200 via-20% to-gray-100 '>
            <div className='container'>
               <div className='grid grid-cols-2 gap-5'>
                  <div className='col-span-2 md:col-span-1'>
                     <div className='mt-5'>
                        <h2 className='text-[45px]  leading-12 font-[700] w-full lg:w-3/4 my-16 '>
                           Welcome to{" "}
                           <span className='text-6xl text-secondaryColor font-mono'>
                              TastyBites
                           </span>{" "}
                           <p className='text-[30px] '>
                              Your Recipe Superpower!
                           </p>
                        </h2>

                        <p className='text-[22px]  text-textColor w-full lg:w-3/4 leading-8 mb-16'>
                           Ready to become a kitchen hero? Meet TastyBites, your
                           go-to recipe app for simple, delicious meals. Whether
                           you're a cooking pro or a beginner, TastyBites has
                           your back with easy-to-follow recipes and helpful
                           tips.
                        </p>
                     </div>

                     <div className='mt-12'>
                        <h2 className='text-[30px] text-headingColor leading-10 font-[600] '>
                           Why TastyBites?
                        </h2>
                        <ul className='mt-6 flex flex-col gap-4'>
                           <li>
                              <span className='text-[18px] text-headingColor font-[500] '>
                                 Super Simple Recipes:
                              </span>{" "}
                              From breakfast to dinner, our recipes are designed
                              for anyone to follow. No fancy skills
                              required—just a love for good food!
                           </li>

                           <li>
                              <span className='text-[18px] text-headingColor font-[500]'>
                                 Your Cooking Sidekick:
                              </span>{" "}
                              TastyBites guides you through each recipe, so you
                              can cook with confidence. Need a substitution?
                              We've got you covered. Adjust serving sizes
                              effortlessly.
                           </li>

                           <li>
                              <span className='text-[18px] text-headingColor font-[500]'>
                                 Smart Shopping:
                              </span>{" "}
                              Hate forgetting ingredients? TastyBites creates
                              shopping lists for your recipes, making grocery
                              trips a breeze.
                           </li>
                        </ul>
                     </div>

                     <div className='my-12'>
                        <h2 className='text-[30px] text-headingColor leading-10 font-[500] '>
                           How It Works?
                        </h2>
                        <ul className='mt-6 flex flex-col gap-3'>
                           <li>
                              <span className='text-[18px] text-headingColor font-[500]'>
                                 Pick Your Recipe:{" "}
                              </span>{" "}
                              Choose from a variety of recipes for every craving
                              and occasion.
                           </li>

                           <li>
                              <span className='text-[18px] text-headingColor font-[500]'>
                                 Cook with Confidence:
                              </span>{" "}
                              Follow the easy steps and tips. Before you know
                              it, you'll have a fantastic meal on your plate.
                           </li>

                           <li>
                              <span className='text-[18px] text-headingColor font-[500]'>
                                 Share and Connect:
                              </span>{" "}
                              Snap a pic, share your creation, and join the
                              TastyBites community. Your culinary journey just
                              got a whole lot tastier!
                           </li>
                        </ul>
                     </div>
                     <div className=''>
                        <button className='btn px-2 my-7 w-3/4 rounded-full'>
                           <Link to={"/create-recipes"}> Create Recipes</Link>
                        </button>
                     </div>
                  </div>

                  <div className='col-span-2 md:col-span-1 '>
                     <div className='grid grid-cols-2 items-center gap-3 sticky top-[20%] translate-y-[-10%]  self-start'>
                        <figure className=''>
                           <img src={heroImg1} alt='' className='rounded-lg' />
                        </figure>

                        <figure className='grid gap-3'>
                           <img src={heroImg2} alt='' className='rounded-lg' />
                           <img src={heroImg3} alt='' className='rounded-lg' />
                        </figure>
                     </div>
                     {/* <figure className=''>
                        <img src={heroImg5} alt='' className='rounded-lg' />
                     </figure>
                     <figure className=''>
                        <img src={heroImg4} alt='' className='rounded-lg' />
                     </figure> */}
                  </div>
               </div>
            </div>
         </section>

         <RecipesList />
      </div>
   );
};

export default Home;
