import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config/config";
import { useParams } from "react-router-dom";
import SidePanel from "../../pages/SidePanel";
// import { lcRecipe } from "../../assets/data/recipeModel";
import cardImg from "../../assets/images/heroImg3.jpg";
import FeedbackForm from "../Feedback/FeedbackForm";

const RecipesDetails = () => {
   const { id } = useParams();

   const [recipes, setRecipes] = useState([]);
   const [showFeedbackForm, setShowFeedbackForm] = useState(false);

   useEffect(() => {
      const fetchRecipes = async () => {
         try {
            const res = await axios.get(`${BASE_URL}/recipes`);
            setRecipes(res.data);
            // console.log(res.data);
         } catch (err) {
            console.error("Err", err);
         }
      };

      fetchRecipes();
   }, []);

   const recipeDetail = recipes.filter((rec) => rec._id === id);
   // .map((rec) => rec);

   const [recipe] = recipeDetail;

   //  const {
   //     title,
   //     category,
   //     foodType,
   //     ingredients,
   //     instructions,
   //     image,
   //     cookingTime,
   //     author,
   //  } = recipe;

   console.log("Id", id);

   console.log("DataBase", recipes);
   console.log("Filter", recipeDetail);
   //  console.log(recipe.title);
   //  console.log(title);

   return (
      <div>
         <section className='bg-green-50'>
            <div className='container  '>
               {recipeDetail.length > 0 && (
                  <>
                     <div className='grid grid-cols-5 gap-9  '>
                        <div className='col-span-5 md:col-span-3 mt-4'>
                           <div className='md:mt-6'>
                              <div className='flex justify-center mb-3'>
                                 <h1 className=' inline px-6  text-center text-[22px] leading-9 font-mono text-secondaryColor font-[600] border-x-2 border-secondaryColor '>
                                    Recipes
                                 </h1>
                              </div>
                              <h2 className='text-[40px] leading-9 mt-6 font-[600] text-headingColor  '>
                                 {recipe.title}
                              </h2>
                              <p className='text-[18px] leading-7 font-[400] text-textColor '>
                                 Author - {""}
                                 <span className='text-[20px] font-mono font-[600] text-primaryColor '>
                                    {recipe.author ? recipe.author : "Unknown"}
                                 </span>
                              </p>

                              <div className='block md:hidden mt-7'>
                                 <figure className='shadow-2xl mx-auto'>
                                    <img
                                       src={
                                          recipe.image ? recipe.image : cardImg
                                       }
                                       alt={recipe.title}
                                       className='rounded-lg w-full h-80'
                                    />
                                 </figure>
                              </div>
                           </div>

                           <div className='mt-6 flex justify-between'>
                              <div className='my-4'>
                                 <p className='text-[20px] font-mono font-[600]'>
                                    Cooking Time
                                 </p>
                                 <p className='text-[18px] font-mono font-[500]'>
                                    {recipe.cookingTime} Min
                                 </p>
                              </div>

                              <div className='flex items-center my-2 gap-5'>
                                 <p className=' text-[15px] font-[600] px-2 py-1 rounded-xl  bg-green-200 border-2 border-green-600 text-primaryColor'>
                                    {recipe.foodType}
                                 </p>
                                 <p className='text-[15px] font-[600] px-2 py-1 rounded-xl  bg-green-200 border-2 border-green-600 text-primaryColor'>
                                    {recipe.category}
                                 </p>
                              </div>
                           </div>

                           <div className='mt-20'>
                              <div className=''>
                                 <h2 className='text-[35px] text-center underline leading-9 mb-7 font-[500] '>
                                    Ingredients
                                 </h2>
                                 <ul className='flex flex-col gap-6'>
                                    {recipe.ingredients.map((ingre, index) => (
                                       <li
                                          key={index}
                                          className='text-[18px] leading-7 text-textColor font-[500] '
                                       >
                                          {ingre}
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>

                           <div className='mt-20'>
                              <div className=''>
                                 <h2 className='text-[35px] text-center underline leading-9 mb-7 font-[500]'>
                                    Cooking Guide
                                 </h2>
                                 <p className='text-[18px] leading-9 text-textColor font-[500]'>
                                    {recipe.instructions}
                                 </p>
                              </div>
                           </div>

                           <div className='mb-16'>
                              {!showFeedbackForm && (
                                 <div className='text-center'>
                                    <button
                                       className='btn'
                                       onClick={() => setShowFeedbackForm(true)}
                                    >
                                       Give Feedback
                                    </button>
                                 </div>
                              )}

                              {showFeedbackForm && <FeedbackForm />}
                           </div>
                        </div>

                        <div className='col-span-5 md:col-span-2  ml-4'>
                           <div className='sticky top-0 translate-y-5 self-start '>
                              <figure className='shadow-2xl mx-auto hidden md:block '>
                                 <img
                                    src={recipe.image ? recipe.image : cardImg}
                                    alt={recipe.title}
                                    className='rounded-lg w-full h-80'
                                 />
                              </figure>

                              <SidePanel />
                           </div>
                        </div>
                     </div>
                  </>
               )}
            </div>
         </section>
      </div>
   );
};

export default RecipesDetails;
