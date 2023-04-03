import React from "react";
import {
  comment,
  like,
  likeFill,
  retweet,
  share,
  statistics,
  threeDots,
} from "../../assets/svg";

const MainPost = ({ data, addFav }) => {
  const { title, username, postimage, avatar, post } = data;

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
    <li className="post border-b-[1px] border-r-[1px] border-[#D8D8D8] p-5 flex items-end justify-between transition-all">
      <div className="post-image flex gap-[15px] items-start mb-5">
        <img
          src={avatar}
          width={60}
          height={60}
          className="rounded-full"
          alt="avatar image"
        />
        <div className="flex gap-1 flex-col">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-base opacity-60">
                @{username} · <span>{min()}</span>
              </p>
            </div>
            <img src={threeDots} alt={"about" + title} />
          </div>
          <p className="text-lg">{post}</p>
          <div className="relative">
            <img
              className="rounded-[20px] mt-[10px] w-90% h-[90%]"
              src={postimage}
              alt={title + "'s post image"}
            />
          </div>
          <div className="icons flex gap-[100px] mt-4">
            <button>
              <img src={comment} alt="comment icon" />
            </button>
            <button>
              <img src={retweet} alt="retweet icon" />
            </button>
            <button onClick={() => addFav(data)}>
              <img src={data.isfav ? likeFill : like} alt="like icon" />
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

export default MainPost;
