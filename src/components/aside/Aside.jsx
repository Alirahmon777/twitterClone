import React from "react";
import { search } from "../../assets/svg";

const Aside = ({ children }) => {
  return (
    <aside className="fixed overflow-y-auto px-7 z-10 flex-col gap-5 h-full">
      <div className="h-full">
        <div className="flex flex-col gap-5">
          <div className="bg-[#EFF3F4] py-4 px-5 rounded-full flex gap-5">
            <img src={search} alt="search tw icon" />
            <input
              type="search"
              className="flex-grow bg-transparent outline-none border-none"
              placeholder="Search Twitter"
            />
          </div>
          <div className="flex flex-col gap-5 pb-10 h-full">{children}</div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
