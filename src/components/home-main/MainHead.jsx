import React from "react";
import { customize } from "../../assets/svg";

const MainHead = () => {
  return (
    <section className="flex justify-between border-b-[1px] border-r-[1px] border-[#D8D8D8] items-center p-5">
      <h1 className="font-bold text-2xl">Home</h1>
      <img src={customize} alt="customize icon" />
    </section>
  );
};

export default MainHead;
