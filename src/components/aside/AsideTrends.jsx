import React from "react";
import { settings } from "../../assets/svg";
import AsideCard from "./AsideCard";

const AsideTrends = () => {
  return (
    <div className="trends py-5 px-[15px] bg-[#F7F9F9] rounded-[10px]">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">Trends for you</h3>
        <img src={settings} alt="settings icon" />
      </div>
      <ul className="flex flex-col gap-[15px] mt-5">
        <AsideCard
          title={"Rahmat"}
          text={"Trending in Uzbekistan"}
          views={"1Mln Tweets"}
        />
        <AsideCard
          title={"Revolution"}
          text={"Trending in Germany"}
          views={"50.4K Tweets"}
        />
        <AsideCard
          title={"Hannah"}
          text={"Trending in Digital creators"}
          views={"67.4K Tweets"}
        />

        <a
          href="https://www.twitter.com"
          target={"_blank"}
          className="text-[#1da1f2] text-lg"
        >
          Show more
        </a>
      </ul>
    </div>
  );
};

export default AsideTrends;
