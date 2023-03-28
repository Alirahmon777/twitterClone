import React from "react";
import { mushtariy, shuhratbek } from "../../assets/images";
import AsideAccount from "./AsideAccount";

const AsideLike = () => {
  return (
    <div className="flex flex-col gap-6 bg-[#F7F9F9] rounded-[10px] py-5 px-[15px]">
      <h3 className="font-bold text-2xl">You might like</h3>
      <ul className="flex flex-col gap-6">
        <AsideAccount
          img={mushtariy}
          title="Mushtariy"
          username={"@Mushtar565266"}
        />
        <AsideAccount
          img={shuhratbek}
          title="Shuhratbek"
          username={"@mrshukhrat"}
        />
      </ul>
    </div>
  );
};

export default AsideLike;
