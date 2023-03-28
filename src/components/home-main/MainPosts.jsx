import axios from "axios";
import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import MainPost from "./MainPost";
import Skeleton from "../../utils/Skeleton";

const MainPosts = () => {
  const { posts } = useLoaderData();
  // const [totalCount, setTotalCount] = useState(0);

  // const scrollHandler = (e) => {
  //   console.log("scrollHandler");
  // };

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
                <MainPost data={data} key={i} />
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
