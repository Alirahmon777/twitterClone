import React from "react";
import { Outlet } from "react-router-dom";
import { ProfileMain, ProfileHead, Aside } from "../../components";
import AsideFooter from "../../components/aside/AsideFooter";
import AsideLike from "../../components/aside/AsideLike";
import AsidePosts from "../../components/aside/AsidePosts";
import AsideTrends from "../../components/aside/AsideTrends";

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
