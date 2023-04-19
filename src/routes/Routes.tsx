import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import Opportunities from "pages/Opportunities/Opportunities";
const Login = lazy(() => import("pages/Login"));
const Signup = lazy(() => import("pages/Signup"));
const UserInformation = lazy(() => import("pages/UserInformation"));
const Dashboard = lazy(() => import("pages/Dashboard"));
const Transactions = lazy(() => import("pages/Transactions"));
const Home = lazy(() => import("pages/Home"));
import DashboardLayout from 'components/DashboardLayout/DashboardLayout'
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
    { path: "/", element: <Home /> },
    {
      path: "/user-information",
      element: <UserInformation />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      // children:[
      //   // {
      //   //   path: "",
      //   //   element: <div>hello</div>,
      //   // },
      //   {
      //     path: "opportunities",
      //     element:<DashboardLayout ><Opportunities /></DashboardLayout> ,
      //   },
      // ]
    },

    {
      path: "/dashboard/opportunities",
      element: <Opportunities />,
    },
    {
      path: "/dashboard/transactions",
      element: <Transactions />,
    },
  ]);

  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large"/>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
