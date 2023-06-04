import Greeting from "pages/Dashboard/DasboardComponents/Greeting/Greeting";
import HeaderCards from "./HeaderCards";
import DashboardBody from "./DashboardBody/DashboardBody";
const DashboardContent = () => {
  return (
    <>
      <Greeting
        role={"Company"}
        className={"borrower-greeting"}
        name="Youxel"
        src="/assets/images/Avatar 3.png"
      />
      <HeaderCards />
      <DashboardBody />
    </>
  );
};

export default DashboardContent;
