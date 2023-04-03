import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import MainPost from "./MainPost";
import Skeleton from "../../utils/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { ADD, REMOVE } from "../../store";

const MainPosts = () => {
  const { posts } = useLoaderData();
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
    <ul>
      <Suspense
        fallback={
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        }
      >
        <Await resolve={posts}>
          {(resolvedPosts) => (
            <>
              {resolvedPosts.map((data, i) => (
                <MainPost data={data} key={i} addFav={addFavoriteHandler} />
              ))}
            </>
          )}
        </Await>
      </Suspense>
    </ul>
  );
};

async function getDatas() {
  const res = await fetch(import.meta.env.VITE_APP_BASE_URL + "/users");

  return res.json();
}

const postLoader = async () => {
  return defer({
    posts: getDatas(),
  });
};

export { MainPosts, postLoader };
