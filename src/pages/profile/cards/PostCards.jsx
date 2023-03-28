import React from "react";
import {
  comment,
  like,
  retweet,
  share,
  statistics,
  threeDots,
} from "../../../assets/svg";

const PostCards = ({ avatar, postimage, post }) => {
  function min() {
    const minut = Math.floor(Math.random() * 10080);
    return minut >= 10080
      ? Math.floor(minut / 10080) + "w"
      : minut >= 1440
      ? Math.floor(minut / 1440) + "d"
      : minut >= 60
      ? Math.floor(minut / 60) + "h"
      : minut + "m";
  }

  return (
    <li className="post border-b w-full border-[#D8D8D8] p-5">
      <div className="post-image flex gap-[15px] items-start mb-5">
        <img
          src={avatar}
          width={60}
          height={60}
          className="rounded-full"
          alt="avatar image"
        />
        <div className="flex gap-1 flex-col flex-grow">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <h3 className="text-xl font-bold">Bobur</h3>
              <p className="text-base opacity-60">
                @bobur_mavlonov · <span>{min()}</span>
              </p>
            </div>
            <img src={threeDots} alt={"about" + " Bobur"} />
          </div>
          <p className="text-lg">{post}</p>
          <div className="relative">
            {postimage ? (
              <img
                className="rounded-[20px] mt-[10px] w-90% h-[90%]"
                src={postimage}
                alt={"Bobur" + "'s post image"}
              />
            ) : null}
          </div>
          <div className="icons flex gap-[100px] mt-4">
            <button>
              <img src={comment} alt="comment icon" />
            </button>
            <button>
              <img src={retweet} alt="retweet icon" />
            </button>
            <button>
              <img src={like} alt="like icon" />
            </button>
            <button>
              <img src={share} alt="share icon" />
            </button>
            <button>
              <img src={statistics} alt="statistics icon" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostCards;
