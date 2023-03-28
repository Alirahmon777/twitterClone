import React from "react";
import { Aside, MainHead, MainPosts, MainUser } from "../../components";
import AsideFooter from "../../components/aside/AsideFooter";
import AsideLike from "../../components/aside/AsideLike";
import AsideTrends from "../../components/aside/AsideTrends";

const Home = () => {
  return (
    <>
      <div className="flex-[1_1_65%]">
        <MainHead />
        <MainUser />
        <MainPosts />
      </div>
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

export default Home;
