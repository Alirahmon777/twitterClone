import React from "react";
import { Outlet } from "react-router-dom";
import {
  ProfileMain,
  ProfileHead,
  Aside,
  AsidePosts,
  AsideLike,
  AsideTrends,
  AsideFooter,
} from "../../components";

const User = () => {
  return (
    <>
      <div className="flex-[1_1_65%]">
        <ProfileHead />
        <ProfileMain>
          <Outlet />
        </ProfileMain>
      </div>
      <div className="flex-[1_1_35%] pt-3">
        <Aside>
          <AsidePosts />
          <AsideLike />
          <AsideTrends />
          <AsideFooter />
        </Aside>
      </div>
    </>
  );
};

export default User;
