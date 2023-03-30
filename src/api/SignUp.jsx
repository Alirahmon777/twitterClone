import React, { useState } from "react";
import { logo } from "../assets/svg";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("https://reqres.in/api/register", {
        email,
        password,
      })
      .then((response) => {
        enqueueSnackbar(email + " successfully registered", {
          variant: "success",
        });
        window.location.pathname = "/home";
        localStorage.setItem("token", response.data.token);
        return response.data;
      })
      .catch((error) => {
        enqueueSnackbar(
          `${error.message} try using this email eve.holt@reqres.in`,
          {
            autoHideDuration: 3000,
            variant: "error",
          }
        );
        throw error;
      });
  };
  const [viewPassword, setViewPassword] = useState(true);

  function viewingPassword() {
    {
      return viewPassword ? (
        <svg
          onClick={() => {
            setViewPassword(false);
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "40px",
            cursor: "pointer",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <defs>
            <clipPath id="__lottie_element_89">
              <rect width="24" height="24" x="0" y="0"></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#__lottie_element_89)">
            <g
              transform="matrix(1,0,0,1,0,0)"
              opacity="1"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,12,16.5)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity="0"
                  stroke="rgb(0,0,0)"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d=" M-7,-5.5 C-7,-5.5 7,-5.5 7,-5.5 C8.104000091552734,-5.5 9,-4.604000091552734 9,-3.5 C9,-3.5 9,3.5 9,3.5 C9,4.604000091552734 8.104000091552734,5.5 7,5.5 C7,5.5 -7,5.5 -7,5.5 C-8.104000091552734,5.5 -9,4.604000091552734 -9,3.5 C-9,3.5 -9,-3.5 -9,-3.5 C-9,-4.604000091552734 -8.104000091552734,-5.5 -7,-5.5z"
                ></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,12,6.5)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity="0"
                  stroke="rgb(0,0,0)"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d=" M-5,4.5 C-5,4.5 -5,0.5 -5,0.5 C-5,-2.260999917984009 -2.760999917984009,-4.5 0,-4.5 C2.76200008392334,-4.5 5,-2.260999917984009 5,0.5 C5,0.5 5,4.5 5,4.5"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      ) : (
        <svg
          onClick={() => {
            setViewPassword(true);
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "40px",
            cursor: "pointer",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <defs>
            <clipPath id="__lottie_element_89">
              <rect width="24" height="24" x="0" y="0"></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#__lottie_element_89)">
            <g
              transform="matrix(1,0,0,1,0,0)"
              opacity="1"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,12,16.5)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity="0"
                  stroke="rgb(0,0,0)"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d=" M-7,-5.5 C-7,-5.5 7,-5.5 7,-5.5 C8.104000091552734,-5.5 9,-4.604000091552734 9,-3.5 C9,-3.5 9,3.5 9,3.5 C9,4.604000091552734 8.104000091552734,5.5 7,5.5 C7,5.5 -7,5.5 -7,5.5 C-8.104000091552734,5.5 -9,4.604000091552734 -9,3.5 C-9,3.5 -9,-3.5 -9,-3.5 C-9,-4.604000091552734 -8.104000091552734,-5.5 -7,-5.5z"
                ></path>
              </g>
              <g
                opacity="1"
                transform="matrix(0.9998349547386169,-0.018166514113545418,0.018166514113545418,0.9998349547386169,11.923500061035156,6.408583164215088)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity="0"
                  stroke="rgb(0,0,0)"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d=" M-5,4.5 C-5,4.5 -5,0.5 -5,0.5 C-5,-2.260999917984009 -2.760999917984009,-4.5 0,-4.5 C2.555999994277954,-4.5 4.664000034332275,-2.5820000171661377 4.9629998207092285,-0.1080000028014183"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      );
    }
  }

  return (
    <div className="w-[750px] mx-auto max-w-full h-full flex items-center justify-center">
      <div className="p-10 w-full">
        <img src={logo} className="mx-auto" alt="" />
        <h3 className="text-2xl lg:text-3xl font-bold mt-10">
          Create an account
        </h3>
        <form
          action="post"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-8 w-full text-xl"
        >
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="py-[15px] 3xl:py-[23px] px-5 w-full border border-[#d8d8d8] rounded-md outline-none"
          />
          <div className="flex py-[15px] 3xl:py-[23px] px-5 w-full border border-[#d8d8d8] rounded-md">
            <input
              type={viewPassword ? "password" : "text"}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="flex-grow outline-none w-full"
            />
            {viewingPassword()}
          </div>
          <button className="py-[15px] 3xl:py-[23px] px-5 w-full text-white bg-[#1da1f2] rounded-md outline-none">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// write the axios function in reqres.in api for registration

export default SignUp;
