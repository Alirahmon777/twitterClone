import React from "react";
import { avatar } from "../../assets/images";
import { dashed, gif, image, schedule, smile, stats } from "../../assets/svg";

const MainUser = () => {
  return (
    <section className="post border-b-[1px] border-r-[1px] border-[#D8D8D8] px-5 flex items-end justify-between">
      <div className="post-image flex gap-[15px] items-start mb-5">
        <img src={avatar} width={60} height={60} alt="avatar image" />
        <div className="relative flex justify-center items-center top-[-20px]">
          <div className="relative flex flex-col gap-2 items-center">
            <div
              className="w-[100px] h-[102px] ml-[5px]"
              style={{ backgroundImage: `url(${dashed})` }}
            ></div>
            <form action="">
              <div className="svgs flex gap-[17px]">
                <label className="cursor-pointer" htmlFor="file">
                  <img src={image} alt="file" />
                </label>
                <label className="cursor-pointer" htmlFor="file">
                  <img src={gif} alt="file" />
                </label>
                <label className="cursor-pointer" htmlFor="">
                  <img src={stats} alt="" />
                </label>
                <label className="cursor-pointer" htmlFor="">
                  <img src={smile} alt="" />
                </label>
                <label className="cursor-pointer" htmlFor="">
                  <img src={schedule} alt="" />
                </label>
              </div>
              <input type="file" name="file" className="hidden" id="file" />
            </form>
          </div>

          <h2 className="post-title absolute bottom-1/2 text-[22px] text-[#828282] font-semibold z-10">
            What’s happening
          </h2>
        </div>
      </div>
      <button className="my-[5px] tracking-wider p-[12px_30px] bg-[#1DA1F2] text-white opacity-40 font-bold text-[17px] outline-none rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
        Tweet
      </button>
    </section>
  );
};

export default MainUser;
