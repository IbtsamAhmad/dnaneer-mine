import { ReactComponent as OpportunityIcon } from "assets/svgs/OpportunityIcon.svg";
import "./banner.scss";

const OpportunityBanner = () => {
    const institutional = localStorage.getItem("institutional");
  return (
    <div
      className={
        institutional === "Institutional"
          ? "banner-container banner-containerO"
          : "banner-container"
      }
    >
      <div>
        <h1>Find the best Opportunity for you</h1>
        <h4>Maximize your investments today!</h4>
      </div>
      <OpportunityIcon />
    </div>
  );
};

export default OpportunityBanner;
