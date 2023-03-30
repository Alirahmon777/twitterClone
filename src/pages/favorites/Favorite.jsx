import React from "react";
import { Aside, AsideFooter, AsideLike, AsideTrends } from "../../components";

const Favorite = () => {
  return (
    <>
      <div className="flex-[1_1_65%]">Favorites</div>
      <div className="flex-[1_1_35%] pt-3">
        <Aside>
          <AsideTrends />
          <AsideLike />
          <AsideFooter />
        </Aside>
      </div>
    </>
  );
};

export default Favorite;
