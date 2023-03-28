import React from "react";
import { avatar, backgroundImage } from "../../assets/images";
import { born, calendar, link, location } from "../../assets/svg";
import ProfileLinks from "./ProfileLinks";

const ProfileMain = ({ children }) => {
  return (
    <>
      <section className="border-[#D8D8D8] border-r">
        <div>
          <img src={backgroundImage} alt="background image" />
          <div className="w-full h-[85px]">
            <div className="-bottom -translate-y-1/2 px-6 flex items-end justify-between w-full">
              <img
                src={avatar}
                className="w-[150px] h-[150px]"
                alt="profile img"
              />
              <button className="py-2 px-4 mb-3 border border-[rgba(0,0,0,0.4)] rounded-full font-semibold text-lg">
                Edit profile
              </button>
            </div>
          </div>
        </div>
        <div className="px-6">
          <h3 className="font-bold text-2xl">Bobur</h3>
          <p className="opacity-60">@bobur_mavlonov</p>
          <p className="text-lg mt-3">
            UX&UI designer at{" "}
            <a
              href="https://abutech.uz/"
              className="text-[#1DA1F2]"
              target={"_blank"}
            >
              @abutechuz
            </a>
          </p>
          <ul className="flex justify-between mt-3">
            <li className="flex gap-3 items-center">
              <img src={location} alt="" />
              <p className="opacity-60">Mashag’daman</p>
            </li>
            <li className="flex gap-3 items-center">
              <img src={link} alt="" />
              <>
                <a
                  href="https://t.me/boburjon_mavlonov"
                  className="text-[#1DA1F2]"
                  target={"_blank"}
                >
                  t.me/boburjon_mavlonov
                </a>
              </>
            </li>
            <li className="flex gap-3 items-center">
              <img src={born} alt="" />
              <p className="opacity-60">Born November 24, 2000</p>
            </li>
            <li className="flex gap-3 items-center">
              <img src={calendar} alt="" />
              <p className="opacity-60">Joined May 2020</p>
            </li>
          </ul>
          <ul className="flex gap-[30px] mt-2">
            <li className="flex gap-1">
              <span className="font-bold">67</span>
              <p className="opacity-60">Following</p>
            </li>
            <li className="flex gap-1">
              <span className="font-bold">47</span>
              <p className="opacity-60">Followers</p>
            </li>
          </ul>
          <ul className="flex gap-[176.6px] mt-10">
            <ProfileLinks to={"/profile"} end="true" text={"Tweets"} />
            <ProfileLinks to={"/profile/replies"} text={"Tweets & replies"} />
            <ProfileLinks to={"/profile/media"} text={"Media"} />
            <ProfileLinks to={"/profile/likes"} text={"Likes"} />
          </ul>
        </div>
        {children}
      </section>
    </>
  );
};

export default ProfileMain;
