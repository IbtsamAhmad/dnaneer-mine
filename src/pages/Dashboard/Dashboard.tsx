import DashboardLayout from "components/DashboardLayout/DashboardLayout";
import DashboardContent from "./DashboardContent";
// import Opportunities from "pages/Opportunities/Opportunities";
// import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardLayout sideKey="1">
      <DashboardContent />
    </DashboardLayout>
  );
};

export default Dashboard;
