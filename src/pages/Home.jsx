import React, { useState } from "react";

import heroImg1 from "../assets/images/heroImg2.jpg";
import heroImg2 from "../assets/images/heroImg5.jpg";
import heroImg3 from "../assets/images/heroImg6.jpg";
import HashLoader from "react-spinners/HashLoader";
import RecipesList from "../components/Recipes/RecipesList";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(["access_token"]);
  // console.log(cookies);

  return (
    <div className="bg-green-50">
      <section className="bg-gradient-to-r from-gray-100  via-green-200 via-20% to-gray-100 ">
        <div className="container">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2 md:col-span-1">
              <div className="mt-5">
                <h2 className="leading-12  my-16 w-full text-[45px] font-[700] lg:w-3/4 ">
                  Welcome to{" "}
                  <span className="font-mono text-6xl text-secondaryColor">
                    TastyBites
                  </span>{" "}
                  <p className="text-[30px] ">Your Recipe Superpower!</p>
                </h2>

                <p className="mb-16  w-full text-[22px] leading-8 text-textColor lg:w-3/4">
                  Ready to become a kitchen hero? Meet TastyBites, your go-to
                  recipe app for simple, delicious meals. Whether you're a
                  cooking pro or a beginner, TastyBites has your back with
                  easy-to-follow recipes and helpful tips.
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-[30px] font-[600] leading-10 text-headingColor ">
                  Why TastyBites?
                </h2>
                <ul className="mt-6 flex flex-col gap-4">
                  <li>
                    <span className="text-[18px] font-[500] text-headingColor ">
                      Super Simple Recipes:
                    </span>{" "}
                    From breakfast to dinner, our recipes are designed for
                    anyone to follow. No fancy skills required—just a love for
                    good food!
                  </li>

                  <li>
                    <span className="text-[18px] font-[500] text-headingColor">
                      Your Cooking Sidekick:
                    </span>{" "}
                    TastyBites guides you through each recipe, so you can cook
                    with confidence. Need a substitution? We've got you covered.
                    Adjust serving sizes effortlessly.
                  </li>

                  <li>
                    <span className="text-[18px] font-[500] text-headingColor">
                      Smart Shopping:
                    </span>{" "}
                    Hate forgetting ingredients? TastyBites creates shopping
                    lists for your recipes, making grocery trips a breeze.
                  </li>
                </ul>
              </div>

              <div className="my-12">
                <h2 className="text-[30px] font-[500] leading-10 text-headingColor ">
                  How It Works?
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  <li>
                    <span className="text-[18px] font-[500] text-headingColor">
                      Pick Your Recipe:{" "}
                    </span>{" "}
                    Choose from a variety of recipes for every craving and
                    occasion.
                  </li>

                  <li>
                    <span className="text-[18px] font-[500] text-headingColor">
                      Cook with Confidence:
                    </span>{" "}
                    Follow the easy steps and tips. Before you know it, you'll
                    have a fantastic meal on your plate.
                  </li>

                  <li>
                    <span className="text-[18px] font-[500] text-headingColor">
                      Share and Connect:
                    </span>{" "}
                    Snap a pic, share your creation, and join the TastyBites
                    community. Your culinary journey just got a whole lot
                    tastier!
                  </li>
                </ul>
              </div>
              <div className="">
                {cookies.access_token ? (
                  <Link to={"/create-recipes"}>
                    {" "}
                    <button className="btn my-7 w-3/4 rounded-full px-2">
                      Create Recipes
                    </button>
                  </Link>
                ) : (
                  <Link to={"/login"}>
                    {" "}
                    <button className="btn my-7 w-3/4 rounded-full px-2">
                      Create Recipes
                    </button>
                  </Link>
                )}
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 ">
              <div className="sticky top-[20%] grid translate-y-[-10%] grid-cols-2 items-center gap-3 self-start">
                <figure className="">
                  <img src={heroImg1} alt="" className="rounded-lg" />
                </figure>

                <figure className="grid gap-3">
                  <img src={heroImg2} alt="" className="rounded-lg" />
                  <img src={heroImg3} alt="" className="rounded-lg" />
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
