import React from "react";
import { useNavigate } from "react-router-dom";
import { arrowBack } from "../../assets/svg";

const ProfileHead = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section className="flex gap-10 border-b-[1px] border-r-[1px] border-[#D8D8D8] items-center p-[18px]">
      <button onClick={goBack}>
        <img src={arrowBack} alt="back to home icon" />
      </button>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-xl">Bobur</h3>
        <p className="opacity-60">1,070 Tweets</p>
      </div>
    </section>
  );
};

export default ProfileHead;
