import React from "react";
import { avatar, imagePost } from "../../../assets/images";
import PostCards from "../cards/PostCards";

const Tweets = () => {
  return (
    <ul className="flex flex-col border-t border-[#d8d8d8]">
      <PostCards
        avatar={avatar}
        post="4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim"
      />
      <PostCards
        avatar={avatar}
        post="Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar haqida emas."
      />
      <PostCards
        avatar={avatar}
        postimage={imagePost}
        post="A bo'pti maskamasman"
      />
    </ul>
  );
};

export default Tweets;
