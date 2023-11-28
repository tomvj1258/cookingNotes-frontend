import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useCookies } from "react-cookie";

const Header = () => {
   const menuRef = useRef(null);

   const [cookies, setCookies] = useCookies(["access_token"]);

   const handleLogout = () => {
      setCookies("access_token", "");
      window.localStorage.removeItem("userId");
   };

   const navLinks = [
      {
         id: 1,
         path: "/",
         name: "Home",
      },
      {
         id: 2,
         path: "recipes",
         name: "Recipes",
      },
      // {
      //    id: 3,
      //    path: "create-recipes",
      //    name: "Create Recipes",
      // },
      // {
      //    id: 4,
      //    path: "login",
      //    name: "Login",
      // },
      // {
      //    id: 5,
      //    path: "register",
      //    name: "Signup",
      // },
   ];

   const toggleMenu = () => menuRef.current.classList.toggle("show-menu");

   return (
      <>
         <header className=' flex items-center sticky top-0 z-30 bg-gradient-to-r from-green-300  via-gray-100 via-50% to-green-200 to-90% h-20 w-full'>
            <div className='container  '>
               <div className='flex items-center justify-between '>
                  <div className=''>
                     <Link to='/'>
                        <h1 className=' text-[30px] leading-7 lg:text-[40px] text-headingColor lg:leading-10 font-[700] font-mono m-2 '>
                           TastyBites
                        </h1>
                     </Link>
                  </div>
                  <div className='navigate' ref={menuRef} onClick={toggleMenu}>
                     <ul className='menu flex items-center  gap-8'>
                        {navLinks.map((nav) => {
                           return (
                              <li key={nav.id} className=''>
                                 <NavLink
                                    to={nav.path}
                                    className={(navClass) =>
                                       navClass.isActive
                                          ? "text-secondaryColor text-[20px] leading-7 font-[700]"
                                          : "text-textColor text-[20px] leading-7 font-[600] hover:text-primaryColor"
                                    }
                                 >
                                    {nav.name}
                                 </NavLink>
                              </li>
                           );
                        })}

                        <div className=''>
                           {cookies.access_token && (
                              <NavLink
                                 to={"/my-recipes"}
                                 className={(navClass) =>
                                    navClass.isActive
                                       ? "text-primaryColor text-[20px] leading-7 font-[700]"
                                       : "text-textColor text-[20px] leading-7 font-[600] hover:text-primaryColor"
                                 }
                              >
                                 My Recipes
                              </NavLink>
                           )}
                        </div>

                        <div className=''>
                           {cookies.access_token && (
                              <NavLink
                                 to={"/create-recipes"}
                                 className={(navClass) =>
                                    navClass.isActive
                                       ? "text-primaryColor text-[20px] leading-7 font-[700]"
                                       : "text-textColor text-[20px] leading-7 font-[600] hover:text-primaryColor"
                                 }
                              >
                                 Create Recipes
                              </NavLink>
                           )}
                        </div>

                        <div className=''>
                           {cookies.access_token && (
                              <NavLink
                                 to={"/saved-recipes"}
                                 className={(navClass) =>
                                    navClass.isActive
                                       ? "text-primaryColor text-[20px] leading-7 font-[700]"
                                       : "text-textColor text-[20px] leading-7 font-[600] hover:text-primaryColor"
                                 }
                              >
                                 Saved Recipes
                              </NavLink>
                           )}
                        </div>

                        <div className='block lg:hidden'>
                           <button className='bg-secondaryColor px-3 lg:px-4 py-2 lg:py-3 text-[14px] lg:text-[16px] text-white font-semibold my-3 rounded-[50px] border border-solid border-green-600 shadow-xl hover:bg-primaryColor'>
                              {!cookies.access_token ? (
                                 <Link to={"/login"}>Login</Link>
                              ) : (
                                 <>
                                    <Link to={"/login"} onClick={handleLogout}>
                                       Logout
                                    </Link>
                                 </>
                              )}
                           </button>
                        </div>
                     </ul>
                  </div>

                  <div className='flex items-center'>
                     <div className='hidden lg:block'>
                        <button className='bg-secondaryColor px-3 lg:px-4 py-2 lg:py-3 text-[14px] lg:text-[16px] text-white font-semibold my-3 rounded-[50px] border border-solid border-green-600 shadow-xl hover:bg-primaryColor'>
                           {!cookies.access_token ? (
                              <Link to={"/login"}>Login</Link>
                           ) : (
                              <>
                                 <Link to={"/login"} onClick={handleLogout}>
                                    Logout
                                 </Link>
                              </>
                           )}
                        </button>
                     </div>
                     <span className='relative  lg:hidden' onClick={toggleMenu}>
                        <BiMenu className='h-7 w-7 cursor-pointer ml-4' />
                     </span>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
