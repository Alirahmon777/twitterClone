import "./index.css";
import {
  Home,
  User,
  Bookmarks,
  Explore,
  Lists,
  Messages,
  More,
  Notification,
  NotFound,
  Login,
  SignUp,
} from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import { useState } from "react";
import { postLoader } from "./components";
import { Like, Media, Replice, Tweets } from "./pages/profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to={"/home"} replace />} />
      <Route
        path="/"
        element={<Layout user={localStorage.getItem("token") ? true : false} />}
      >
        <Route path="home" element={<Home />} loader={postLoader} />
        <Route path="profile" element={<User />}>
          <Route path="likes" element={<Like />} />
          <Route path="media" element={<Media />} />
          <Route path="replies" element={<Replice />} />
          <Route index element={<Tweets />} />
        </Route>
        <Route path="explore" element={<Explore />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="notification" element={<Notification />} />
        <Route path="more" element={<More />} />
        <Route path="messages" element={<Messages />} />
        <Route path="lists" element={<Lists />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="api/signup" element={<SignUp />} />
      <Route path="api/login" element={<Login />} />
    </>
  )
);

function App() {
  const [loading, setLoading] = useState(true);
  const body = document.body;

  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1000);
  }

  return !loading ? (
    <>
      {body.classList.remove("overflow-hidden")}
      <RouterProvider router={router} />
    </>
  ) : (
    body.classList.add("overflow-hidden")
  );
}

export default App;
