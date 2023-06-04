import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import Opportunities from "pages/Opportunities/Opportunities";
import Profile from "pages/Profile";
const Login = lazy(() => import("pages/Login"));
const Signup = lazy(() => import("pages/Signup"));
const UserInformation = lazy(() => import("pages/UserInformation"));
const Dashboard = lazy(() => import("pages/Dashboard"));
const Transactions = lazy(() => import("pages/Transactions"));
const Home = lazy(() => import("pages/Home"));
const Opportunity = lazy(() => import("pages/Opportunity/Opportunity"));
const ForgetPassword = lazy(() => import("pages/ForgetPassword"));
const ConfirmPassword = lazy(() => import("pages/ConfirmPassword"));
const BorrowerLogin = lazy(() => import("borrower/Login"));
const BorrowerProfile = lazy(
  () => import("borrower/BorrowerMyProfile/MyProfile")
);

const BorrowerRegister = lazy(
  () => import("borrower/Signup/Register/Register")
);

const DashboardHome = lazy(
  () => import("borrower/DashboardHome/DashboardHome")
);

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
      path: "/borrower/login",
      element: <BorrowerLogin />,
    },

    {
      path: "/borrower/register",
      element: <BorrowerRegister />,
    },
    // {
    //   path: "/borrower/otp",
    //   element: <BorrowerOtp />,
    // },
    {
      path: "/borrower/dashboard/my-profile",
      element: <BorrowerProfile />,
    },
    {
      path: "/borrower/dashboard",
      element: <DashboardHome />,
    },

    {
      path: "/forget-password",
      element: <ForgetPassword />,
    },
    {
      path: "/confirm-password",
      element: <ConfirmPassword />,
    },
    { path: "/", element: <Home /> },
    {
      path: "/user-information",
      element: <UserInformation />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },

    {
      path: "/dashboard/opportunities",
      element: <Opportunities />,
    },
    {
      path: "/dashboard/transactions",
      element: <Transactions />,
    },
    {
      path: "/dashboard/profile",
      element: <Profile />,
    },
    {
      path: "/dashboard/opportunities/:id",
      element: <Opportunity />,
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
          <Spin size="large" />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
