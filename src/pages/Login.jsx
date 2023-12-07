import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login.svg";
import { useCookies } from "react-cookie";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [cookies, setCookies] = useCookies(["access_token"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });

      setCookies("access_token", res.data.token);
      window.localStorage.setItem("userId", res.data.userId);
      setLoading(false);

      console.log(cookies);
      console.log(res.data.userId);
      toast.success(res.data.message);
      cookies.access_token.length ? navigate("/") : navigate("/login");
    } catch (err) {
      console.error(err.message);

      setLoading(false);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="grid">
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className=" mx-auto w-full max-w-[600px]">
              <div className="my-12 rounded-xl px-4 py-3 shadow-lg ">
                <form className="mx-4 my-16 " onSubmit={handleSubmit}>
                  <h2 className="text-[25px] font-[600] leading-9 text-headingColor">
                    Hello!
                    <span className="ml-2 font-semibold leading-9 text-primaryColor">
                      Welcome
                    </span>{" "}
                    Back
                  </h2>

                  <div className="mt-8">
                    <label htmlFor="email" className="hidden" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email :"
                      className="mt-4 w-full cursor-pointer rounded border-b border-solid border-black bg-transparent px-4 py-3 text-[18px] leading-7 text-headingColor placeholder:text-textColor focus:border-b-primaryColor focus:outline-none "
                    />
                  </div>
                  <div className="mt-8">
                    <label htmlFor="password" className="hidden" />
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password :"
                      className="mt-4 w-full cursor-pointer rounded border-b border-solid border-black bg-transparent px-4 py-3 text-[18px] leading-7 text-headingColor placeholder:text-textColor focus:border-b-primaryColor focus:outline-none "
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-20 w-full rounded-lg bg-primaryColor px-3 py-2 text-[20px] font-[500] text-white hover:bg-secondaryColor"
                  >
                    {loading ? (
                      <HashLoader size={35} color="#ffffff" />
                    ) : (
                      "Login"
                    )}
                  </button>
                  <p className="mt-3 text-center ">
                    Don't have an account?{" "}
                    <NavLink
                      to={"/register"}
                      className={
                        "text-[20px] font-semibold text-primaryColor hover:text-secondaryColor"
                      }
                    >
                      Register
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>

            <div className=" my-auto hidden lg:block">
              <figure className=" px-4 py-3">
                <img src={loginImg} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
