import React from "react";
import { user } from "../assets/svg";

const Skeleton = () => {
  return (
    <div className="p-4 border border-gray-100 rounded shadow animate-pulse md:p-6 dark:border-gray-100">
      <div className="post-image flex flex-col gap-[15px] items-start mb-5">
        <div className="flex space-x-3 w-full">
          <img
            src={user}
            className="text-gray-50 w-[60px] h-[60px] dark:opacity-20"
            alt=""
          />
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 mt-3">
                <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-200 w-24 mb-2"></div>
                <div className="w-16 h-2 bg-gray-100 rounded-full dark:bg-gray-200"></div>
                <div className="w-5 h-2 bg-gray-100 rounded-full dark:bg-gray-200"></div>
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-gray-100 rounded-full dark:bg-gray-200"></div>
                <div className="w-1 h-1 bg-gray-100 rounded-full dark:bg-gray-200"></div>
                <div className="w-1 h-1 bg-gray-100 rounded-full dark:bg-gray-200"></div>
              </div>
            </div>

            <div className="w-full h-full mt-4">
              <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-200 mb-2.5"></div>
              <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-200 mb-2.5"></div>
              <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-200"></div>
              <div className="relative mt-5 w-[86%]">
                <div className="flex items-center rounded-2xl justify-center mb-4 bg-gray-100 dark:bg-gray-200">
                  <svg
                    className="w-[90%] h-[90%]  text-gray-100 dark:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                </div>
              </div>
              <div className="icons flex gap-[100px] mt-4">
                <div className="h-6 w-6 bg-gray-100 rounded-full dark:bg-gray-200 mb-2.5"></div>
                <div className="h-6 w-6 bg-gray-100 rounded-full dark:bg-gray-200 mb-2.5"></div>
                <div className="h-6 w-6 bg-gray-100 rounded-full dark:bg-gray-200 mb-2.5"></div>
                <div className="h-6 w-6 bg-gray-100 rounded-full dark:bg-gray-200 mb-2.5"></div>
                <div className="h-6 w-6 bg-gray-100 rounded-full dark:bg-gray-200 mb-2.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
