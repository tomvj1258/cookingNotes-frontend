import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SavedRecipes from "../pages/SavedRecipes";
import CreateRecipes from "../pages/CreateRecipes";
import RecipesList from "../components/Recipes/RecipesList";
import RecipesDetails from "../components/Recipes/RecipesDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SidePanel from "../pages/SidePanel";

const Router = () => {
   return (
      <div>
         <Routes>
            <Route path='/'>
               <Route index element={<Home />} />
               <Route path='home' element={<Home />} />
               <Route path='create-recipes' element={<CreateRecipes />} />
               <Route path='sidepanel' element={<SidePanel />} />
               <Route path='login' element={<Login />} />
               <Route path='register' element={<Signup />} />
               <Route path='saved-recipes' element={<SavedRecipes />} />
               <Route path='recipes'>
                  <Route index element={<RecipesList />} />
                  <Route path=':id' element={<RecipesDetails />} />
               </Route>
            </Route>
         </Routes>
      </div>
   );
};

export default Router;
