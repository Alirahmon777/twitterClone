import React from "react";
import {
  Aside,
  AsideFooter,
  AsideLike,
  AsideTrends,
  MainHead,
  MainPosts,
  MainUser,
} from "../../components";

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
