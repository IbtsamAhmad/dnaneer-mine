import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("pages/Login"));
const Signup = lazy(() => import("pages/Signup"));
const Home = lazy(() => import("pages/Home"));

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <Suspense fallback={"...loading"}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
