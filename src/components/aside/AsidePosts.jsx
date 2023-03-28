import React from "react";
import {
  food,
  imagePost,
  profileMem,
  profilepost,
  profileTg,
  profileWork,
} from "../../assets/images";
const AsidePosts = () => {
  return (
    <div className="grid grid-cols-3 w-full gap-[2px] rounded-[10px] overflow-hidden">
      <img src={imagePost} className="w-[123px] h-[88px]" alt="post" />
      <img src={profilepost} className="w-[123px] h-[88px]" alt="post" />
      <img src={food} className="w-[123px] h-[88px]" alt="post" />
      <img src={profileTg} className="w-[123px] h-[88px]" alt="post" />
      <img src={profileWork} className="w-[123px] h-[88px]" alt="post" />
      <img src={profileMem} className="w-[123px] h-[88px]" alt="post" />
    </div>
  );
};

export default AsidePosts;
