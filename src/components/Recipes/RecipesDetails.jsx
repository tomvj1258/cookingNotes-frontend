import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config/config";
import { useParams } from "react-router-dom";
import { lcRecipe } from "../../assets/data/recipeModel";
import cardImg from "../../assets/images/heroImg3.jpg";
import SidePanel from "../../pages/SidePanel";
import FeedbackForm from "../Feedback/FeedbackForm";

const RecipesDetails = () => {
   const { _id } = useParams();

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

   const recipeDetail = recipes
      ? recipes.filter((recipe) => recipe._id == _id).map((recipe) => recipe)
      : lcRecipe.filter((recipe) => recipe._id == _id).map((recipe) => recipe);

   // const recipeDetail = lcRecipe
   //    .filter((rex) => rex._id == 2)
   //    .map((rec) => rec);

   const [recipe] = recipeDetail;

   // const {
   //    title,
   //    category,
   //    foodType,
   //    ingredients,
   //    instructions,
   //    image,
   //    cookingTime,
   //    author,
   // } = lcRecipe;

   // const getRecipe = recipeDetail ? [recipeDetail] : [lcRecipe];

   // const [recipe] = getRecipe;

   console.log(recipe);
   console.log(recipeDetail);

   return (
      <div>
         <section className='bg-green-50'>
            <div className='container  '>
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
                           Author -{" "}
                           <span className='text-[20px] font-mono font-[600] text-primaryColor '>
                              {recipe.author}
                           </span>
                        </p>

                        <div className='block md:hidden mt-7'>
                           <figure className='shadow-2xl mx-auto'>
                              <img
                                 src={image ? image : cardImg}
                                 alt={recipe.title}
                                 className='rounded-lg'
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

                        <div className='flex items-center my-4 gap-5'>
                           <p className=' text-[15px] md:text-[18px] bg-green-200 border-2 border-green-600 px-2 py-1 rounded-lg my-1 text-primaryColor leading-7 font-mono font-[600]'>
                              {recipe.foodType}
                           </p>
                           <p className='text-[15px] md:text-[18px] bg-green-200 border-2 border-green-600 px-2 py-1 rounded-lg my-1 text-primaryColor leading-7 font-mono font-[600]'>
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
                              {ingredients.map((ingre, index) => (
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
                     <div className='sticky top-0 self-start '>
                        <figure className='shadow-2xl mx-auto hidden md:block'>
                           <img
                              src={image ? image : cardImg}
                              alt={title}
                              className='rounded-lg '
                           />
                        </figure>

                        <SidePanel />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default RecipesDetails;
