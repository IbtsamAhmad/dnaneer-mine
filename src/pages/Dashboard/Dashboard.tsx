import DashboardLayout from "components/DashboardLayout/DashboardLayout";
import DashboardConent from "./DashboardContent";
import Opportunities from "pages/Opportunities/Opportunities";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardConent />
    </DashboardLayout>
  );
};

export default Dashboard;
