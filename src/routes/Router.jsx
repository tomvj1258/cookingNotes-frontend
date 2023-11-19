import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SavedRecipes from "../pages/SavedRecipes";
import CreateRecipes from "../pages/CreateRecipes";
import SavedRecipesList from "../components/saved/SavedRecipesList";
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
               <Route path='saved-recipes'>
                  <Route index element={<SavedRecipes />} />
                  <Route path=':id' element={<SavedRecipesList />} />
               </Route>
            </Route>
         </Routes>
      </div>
   );
};

export default Router;
