import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config/config";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import cardImg from "../assets/images/heroImg3.jpg";
import heroImg1 from "../assets/images/heroImg2.jpg";
import heroImg2 from "../assets/images/heroImg5.jpg";
import heroImg3 from "../assets/images/heroImg6.jpg";
import heroImg4 from "../assets/images/heroImg0.jpg";
import heroImg5 from "../assets/images/heroImg4.jpg";
import { lcRecipe } from "../assets/data/recipeModel";
import useGetUserId from "../hooks/useGetUserId";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import SidePanel from "./SidePanel";
import RecipesList from "../components/Recipes/RecipesList";

const Home = () => {
   // const [recipes, setRecipes] = useState([]);
   // const [savedRecipes, setSavedRecipes] = useState([]);

   // const [cookies, _] = useCookies(["access_token"]);

   // const userId = useGetUserId();

   // useEffect(() => {
   //    const fetchRecipes = async () => {
   //       try {
   //          const res = await axios.get(`${BASE_URL}/recipes`);
   //          setRecipes(res.data);
   //          // console.log(res.data);
   //       } catch (err) {
   //          console.error("Err", err);
   //       }
   //    };

   //    const fetchSavedRecipes = async () => {
   //       try {
   //          const res = await axios.get(
   //             `${BASE_URL}/recipes/savedRecipes/id/${userId}`
   //          );

   //          setSavedRecipes(res.data.savedRecipes);
   //       } catch (err) {
   //          console.log("Err", err);
   //       }
   //    };

   //    fetchRecipes();
   //    if (cookies.access_token) {
   //       fetchSavedRecipes();
   //    }
   // }, [savedRecipes]);

   // const saveRecipes = async (recipeId) => {
   //    try {
   //       const res = await axios.put(
   //          `${BASE_URL}/recipes`,
   //          {
   //             recipeId,
   //             userId,
   //          },
   //          { headers: { authorization: cookies.access_token } }
   //       );

   //       setSavedRecipes(res.data.savedRecipes);

   //       toast.success(res.data.message);
   //    } catch (err) {
   //       console.error("Err", err);
   //    }
   // };

   // const isRecipeSaved = (id) => savedRecipes.includes(id);

   return (
      <div className='bg-green-50'>
         <section className='bg-gradient-to-r from-gray-100  via-green-200 via-20% to-gray-100 '>
            <div className='container'>
               <div className='grid grid-cols-2 gap-5'>
                  <div className='col-span-2 md:col-span-1'>
                     <div className='mt-5'>
                        <h2 className='text-[45px] lg:text-center leading-12 font-[700] w-full lg:w-3/4 my-16 '>
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

         {/* <section>
            <div className='container w-full max-w-[1880px] mb-7'>
               <div className=''>
                  <div className='text-center mb-20'>
                     <h2 className='text-[30px] text-headingColor font-bold leading-9 pt-9 '>
                        Our Recipes
                     </h2>

                     <p className='text-[18px] text-textColor leading-7 font-[400] my-7 md:w-[550px] mx-auto  '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nisi omnis animi beatae impedit velit ex accusamus
                        a. Quas, in natus!
                     </p>
                  </div>

                  <div className='grid grid-cols-5 gap-3 '>
                     <div className='col-span-5 lg:col-span-4  relative'>
                        <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-10 w-full shadow-2xl rounded-xl '>
                           {recipes.map((recipe) => (
                              <>
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
                                          className='rounded-lg w-[700px] h-[400px] overflow-hidden '
                                       />
                                    </figure>
                                    <div className='flex flex-col gap-2 '>
                                       <div className='flex items-center justify-between'>
                                          <h2 className='text-[30px] md:text-[35px] px-3 py-2 leading-9 text-headingColor font-[600]'>
                                             {recipe.title}
                                          </h2>
                                          <button
                                             onClick={() =>
                                                saveRecipes(recipe._id)
                                             }
                                             className='text-[14px] bg-primaryColor px-3 py-2 text-white font-[500] rounded-lg  hover:bg-secondaryColor'
                                             disabled={isRecipeSaved(
                                                recipe._id
                                             )}
                                          >
                                             {savedRecipes.includes(recipe._id)
                                                ? "Saved"
                                                : "Save"}
                                          </button>
                                       </div>
                                       <div className='flex flex-col md:flex-row justify-between gap-2'>
                                          <p className=' text-[15px] md:text-[17px] px-3 py-2 my-0 text-headingColor leading-7 font-[600] order-2 md:order-1'>
                                             Cooking Time:{" "}
                                             <span className='text-textColor '>
                                                {recipe.cookingTime} (Min)
                                             </span>
                                          </p>
                                          <div className='flex gap-3 md:order-2'>
                                             <p className=' text-[15px] md:text-[17px] bg-green-200 border-2 border-green-600 px-3 py-2 rounded-full my-1 text-primaryColor leading-7 font-[600] '>
                                                {recipe?.foodType}
                                             </p>
                                             <p className=' text-[15px] md:text-[16px] bg-green-200 px-3 py-2 border-2 border-green-600 rounded-full my-1 text-primaryColor leading-7 font-[600]'>
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
                                             consectetur adipisicing elit. Esse
                                             iusto cum nesciunt, a quibusdam
                                             itaque doloremque assumenda ad
                                             mollitia veniam.
                                          </p>
                                       </div>
                                       <div className='flex items-center justify-end gap-5 mx-2 mb-5'>
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
                              </>
                           ))}
                        </ul>
                     </div>
                     <div className='col-span-5 md:col-span-3 lg:col-span-1  sticky top-0 self-start right-0'>
                        <SidePanel />
                     </div>
                  </div>
               </div>
            </div>
         </section> */}
      </div>
   );
};

export default Home;
