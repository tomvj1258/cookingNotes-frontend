import React, { useEffect, useState } from "react";
import { lcRecipe } from "../../assets/data/recipeModel";
import SidePanel from "../../pages/SidePanel";
import { BsArrowRight } from "react-icons/bs";
import { useCookies } from "react-cookie";
import useGetUserId from "../../hooks/useGetUserId";
import { Link } from "react-router-dom";
import cardImg from "../../assets/images/heroImg3.jpg";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import HashLoader from "react-spinners/HashLoader";

const RecipesList = () => {
   const [recipes, setRecipes] = useState([]);
   const [savedRecipes, setSavedRecipes] = useState([]);
   const [loading, setLoading] = useState(false);
   const [cookies, _] = useCookies(["access_token"]);

   const userId = useGetUserId();

   useEffect(() => {
      const fetchRecipes = async () => {
         setLoading(true);
         try {
            const res = await axios.get(`${BASE_URL}/recipes`);
            setRecipes(res.data);
            setLoading(false);
            // console.log(res.data);
         } catch (err) {
            console.error("Err", err);
            setLoading(false);
         }
      };

      const fetchSavedRecipes = async () => {
         try {
            const res = await axios.get(
               `${BASE_URL}/recipes/savedRecipes/id/${userId}`
            );

            setSavedRecipes(res.data.savedRecipes);
         } catch (err) {
            console.log("Err", err);
         }
      };

      fetchRecipes();
      if (cookies.access_token) {
         fetchSavedRecipes();
      }
   }, []);

   const saveRecipes = async (recipeId) => {
      try {
         const res = await axios.put(
            `${BASE_URL}/recipes`,
            {
               recipeId,
               userId,
            },
            { headers: { authorization: cookies.access_token } }
         );

         setSavedRecipes(res.data.savedRecipes);

         toast.success(res.data.message);
      } catch (err) {
         console.error("Err", err);
      }
   };

   const isRecipeSaved = (id) => savedRecipes.includes(id);

   // const recipe = recipes ? recipes : lcRecipe;
   // console.log(recipes);
   // console.log(recipe);

   return (
      <div>
         <section>
            <div className='container w-full max-w-[1880px] mb-7'>
               <div className=''>
                  <div className='text-center mb-20'>
                     <h2 className='text-[30px] text-headingColor font-bold leading-9 pt-9 '>
                        Our Recipes
                     </h2>

                     <p className='text-[18px] text-textColor leading-7 font-[400] my-7 md:w-[550px]  mx-auto  '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nisi omnis animi beatae impedit velit ex accusamus
                        a. Quas, in natus!
                     </p>
                  </div>

                  <div className='grid grid-cols-4 gap-4 '>
                     <div className='col-span-4 lg:col-span-3  relative'>
                        <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 w-full shadow-2xl rounded-xl '>
                           {recipes.length === 0 ? (
                              <HashLoader size={35} color='#ffffff' />
                           ) : (
                              recipes.map((recipe) => (
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
                                             className='rounded-lg w-full h-80 overflow-hidden object-cover '
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
                                                {savedRecipes.includes(
                                                   recipe._id
                                                )
                                                   ? "Saved"
                                                   : "Save"}
                                             </button>
                                          </div>
                                          <div className='flex flex-col md:flex-row md:items-center justify-between gap-1'>
                                             <p className=' text-[15px] md:text-[17px] px-3 py-2 my-0 text-headingColor leading-5 font-[600] order-2 md:order-1'>
                                                Cooking Time:{" "}
                                                <span className='text-textColor '>
                                                   {recipe.cookingTime} (Min)
                                                </span>
                                             </p>
                                             <div className='flex  items-center gap-2 md:order-2'>
                                                <p className='text-[15px] font-[600] px-2 py-1 rounded-xl  bg-green-200 border-2 border-green-600 text-primaryColor '>
                                                   {recipe?.foodType}
                                                </p>
                                                <p className='text-[15px] font-[600] px-2 py-1   bg-green-200  border-2 border-green-600 rounded-xl text-primaryColor'>
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
                              ))
                           )}
                        </ul>
                     </div>
                     <div className='col-span-4 mt-7 lg:col-span-1  sticky top-[30%] translate-y-[-10%] self-start right-0'>
                        <SidePanel />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default RecipesList;
