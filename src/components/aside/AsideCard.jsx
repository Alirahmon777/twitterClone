import React from "react";
import { threeDots } from "../../assets/svg";

const AsideCard = ({ views, title, text }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-[2px]">
        <p className="opacity-60 text-[#393B41]">{text}</p>
        <h4 className="font-semibold text-xl">{title}</h4>
        <p className="opacity-60 text-[#393B41]">{views}</p>
      </div>
      <img src={threeDots} alt="three dots, more icon" />
    </div>
  );
};

export default AsideCard;
