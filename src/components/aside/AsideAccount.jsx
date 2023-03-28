import React from "react";

const AsideAccount = ({ img, title, username }) => {
  return (
    <li className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <img src={img} alt={title + "avatar"} width="60" height="60" />
        <div className="flex flex-col">
          <h5 className="font-semibold text-lg">{title}</h5>
          <p className="text-lg opacity-60">{username}</p>
        </div>
      </div>
      <button className="py-[10px] px-[18px] bg-black text-white rounded-full">
        Follow
      </button>
    </li>
  );
};

export default AsideAccount;
