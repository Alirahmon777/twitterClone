import React from "react";
import {
  Aside,
  AsideFooter,
  AsideLike,
  AsideTrends,
  MainPost,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { ADD, REMOVE } from "../../store";

const Wishes = () => {
  const favorites = useSelector((prev) => prev.favorite);

  const dispatch = useDispatch();

  const addFavoriteHandler = (tweet) => {
    let haveProduct = false;
    favorites.forEach((favorite) => {
      if (favorite.id === tweet.id) {
        haveProduct = true;
      }
    });

    if (haveProduct) {
      dispatch({
        type: REMOVE,
        payload: tweet,
      });
    } else {
      dispatch({
        type: ADD,
        payload: tweet,
      });
    }
  };

  return (
    <>
      <div className="flex-[1_1_65%]">
        <ul>
          {favorites.map((data, i) => (
            <MainPost data={data} key={i} addFav={addFavoriteHandler} />
          ))}
        </ul>
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

export default Wishes;
