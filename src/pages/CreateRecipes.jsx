import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/config";
import { toast } from "react-toastify";
import useGetUserId from "../hooks/useGetUserId";
import { useCookies } from "react-cookie";

const CreateRecipes = () => {
   const userId = useGetUserId();
   const [recipe, setRecipe] = useState({
      title: "",
      foodType: "",
      category: "",
      ingredients: [],
      instructions: "",
      image: "",
      cookingTime: 0,
      author: "",
      userOwner: userId,
   });

   const navigate = useNavigate();

   const [cookies] = useCookies(["access_token"]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setRecipe({ ...recipe, [name]: value });
   };

   const handleIngredientChange = (e, index) => {
      const { value } = e.target;
      const ingredients = recipe.ingredients;
      ingredients[index] = value;
      setRecipe({ ...recipe, ingredients });
   };

   const addIngredient = () => {
      setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const res = await axios.post(`${BASE_URL}/recipes`, recipe, {
            headers: { authorization: cookies.access_token },
         });
         // const data = await res.json();

         toast.success(res.data.message);
         !cookies.access_token && navigate("/login");

         navigate("/");
      } catch (err) {
         console.error("Err", err);
      }
   };

   console.log("recipe", recipe);

   return (
      <div>
         <section>
            <div className='container'>
               <div className='w-full max-w-[800px] mx-auto  shadow-primaryColor '>
                  <form
                     onSubmit={handleSubmit}
                     className='my-20 md:mt-10 py-7 px-8 md:px-16 shadow-primaryColor shadow-2xl rounded-2xl'
                  >
                     <div className='md:text-center'>
                        <h2 className=' text-[24px] md:text-[35px] leading-9 font-[600] '>
                           Create your{" "}
                           <span className='text-primaryColor'>OWN</span>{" "}
                           Recipes
                        </h2>
                     </div>
                     <div className='mt-8 flex items-center '>
                        <label htmlFor='Title' className='hidden' />
                        <input
                           type='text'
                           name='title'
                           onChange={handleChange}
                           placeholder='Recipe Title'
                           className='text-[18px] leading-7 text-headingColor font-[500] bg-transparent w-full  md:mx-auto  px-4 py-3 border-2 border-solid border-black focus:outline-none focus:border-primaryColor focus:shadow-md placeholder:text-textColor cursor-pointer rounded '
                           required
                        />
                     </div>

                     {/* <div className='mt-6 flex items-center'>
                        <label htmlFor='description' className='hidden' />
                        <textarea
                           type='text'
                           placeholder='Description'
                           className='text-[18px] leading-7 text-headingColor font-[500] bg-transparent w-3/4 mx-auto px-4 py-3 border-b border-solid border-black focus:outline-none focus:border-b-primaryColor placeholder:text-textColor cursor-pointer rounded '
                        />
                     </div> */}

                     <div className='mt-6 grid grid-cols-2 gap-5  '>
                        <div className=''>
                           <label htmlFor='Title' className='hidden ' />
                           <select
                              name='foodType'
                              onChange={handleChange}
                              className='col-span-1 text-[18px] leading-7 text-headingColor bg-transparent font-[500] w-full  px-4 py-3 mt-3  border-2 border-black focus:outline-none focus:border-primaryColor placeholder:text-textColor  cursor-pointer rounded '
                           >
                              <option value='select'>Food Type</option>
                              <option value='Veg'>Veg</option>
                              <option value='Non-Veg'>Non-Veg</option>
                           </select>
                        </div>

                        <div className=''>
                           <label htmlFor='Title' className='hidden ' />
                           <select
                              name='category'
                              onChange={handleChange}
                              className='text-[18px] leading-7 text-headingColor font-[500] bg-transparent w-full   px-4 py-3 mt-3 border-2 border-black focus:outline-none focus:border-primaryColor placeholder:text-textColor cursor-pointer rounded '
                           >
                              <option value='select'>Category</option>
                              <option value='Soup'>Soups</option>
                              <option value='Starter'>Starter</option>
                              <option value='Main Dish'>Main Dish</option>
                              <option value='Side Dish'>Side Dish</option>
                              <option value='Desert'>Desert</option>
                           </select>
                        </div>
                     </div>

                     <div className='mt-6 flex  flex-wrap items-center'>
                        <label htmlFor='ingredients' className='hidden' />

                        <div className=''>
                           <button
                              type='button'
                              onClick={addIngredient}
                              className='text-[20px] bg-primaryColor px-3 py-2 text-white font-[500] rounded-lg my-6 inline-block   hover:bg-secondaryColor'
                           >
                              Add Ingredient
                           </button>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                           {recipe.ingredients.map((link, index) => (
                              <div className=''>
                                 <input
                                    key={index}
                                    type='text'
                                    name='ingredients'
                                    value={link}
                                    placeholder={`${index + 1}.`}
                                    onChange={(e) =>
                                       handleIngredientChange(e, index)
                                    }
                                    className='text-[18px] leading-7 text-headingColor font-[500] bg-transparent w-full  mb-3 md:mx-auto  px-4 py-3 border-2 border-solid border-black focus:outline-none focus:border-primaryColor focus:shadow-md placeholder:text-headingColor cursor-pointer rounded '
                                    required
                                 />
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className='mt-6 flex items-center'>
                        <label htmlFor='instructions' className='hidden' />
                        <textarea
                           type='text'
                           name='instructions'
                           onChange={handleChange}
                           placeholder='Instructions'
                           className='text-[18px] leading-7 text-headingColor font-[500] bg-transparent w-full  md:mx-auto px-4 py-3 border-2 border-solid border-black focus:outline-none focus:border-primaryColor focus:shadow-md placeholder:text-textColor cursor-pointer rounded '
                           required
                        />
                     </div>

                     <div className='mt-6 flex items-center'>
                        <label htmlFor='image' className='hidden' />
                        <input
                           type='text'
                           name='image'
                           onChange={handleChange}
                           placeholder='Image URL'
                           className='text-[18px] leading-7 text-headingColor font-[500] bg-transparent w-full  md:mx-auto px-4 py-3 border-2 border-solid border-black focus:outline-none focus:border-primaryColor focus:shadow-md placeholder:text-textColor cursor-pointer rounded '
                        />
                     </div>

                     <div className='my-8 flex items-center'>
                        <label htmlFor='cooking time' className='hidden' />
                        <input
                           type='number'
                           name='cookingTime'
                           onChange={handleChange}
                           placeholder='Cooking Time (Mins)'
                           className='text-[18px] leading-7 text-headingColor font-[500] bg-transparent w-full  md:mx-auto px-4 py-3 border-2 border-solid border-black focus:outline-none focus:border-primaryColor focus:shadow-md placeholder:text-textColor cursor-pointer rounded '
                           required
                        />
                     </div>

                     <div className='my-8 '>
                        <label htmlFor='cooking time' className='hidden' />
                        <input
                           type='text'
                           name='author'
                           onChange={handleChange}
                           placeholder='Author Name'
                           className='text-[18px] leading-7 text-headingColor font-[500] bg-transparent w-1/2  md:mx-auto px-4 py-3 border-b-2 border-solid border-black focus:outline-none focus:border-primaryColor focus:shadow-md placeholder:text-textColor cursor-pointer rounded '
                           required
                        />
                     </div>
                     <div className='flex  '>
                        <button
                           type='submit'
                           className='text-[20px] bg-primaryColor px-3 py-2 text-white font-[500] rounded-lg my-10 w-full md:w-1/2 ml-auto hover:bg-secondaryColor'
                        >
                           Create Recipe
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </div>
   );
};

export default CreateRecipes;
