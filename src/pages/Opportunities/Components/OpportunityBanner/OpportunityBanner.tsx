import { ReactComponent as OpportunityIcon } from "assets/svgs/OpportunityIcon.svg";

const OpportunityBanner = () => {
  return (
    <div
      style={{
        borderRadius: "20px",
        marginBottom: "2rem",
        background: "linear-gradient(270deg, #34A5FF 0%, #5B2CD3 100%)",
        padding: "3.3rem 2.3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1 style={{ color: "#fff", fontSize: "20px" }}>
          Find the best Opportunity for you
        </h1>
        <h4 style={{ color: "#fff", fontSize: "16px" }}>
          Maximize your investments today!
        </h4>
      </div>
      <OpportunityIcon />
    </div>
  );
};

export default OpportunityBanner;
