import { Button } from "antd";
import AppCard from "components/Card/Card";

const SideCard = () => {
  return (
    <div
      style={{
        marginLeft: "2rem",
        padding: "14px",
        background: "linear-gradient(270deg, #34A5FF 0%, #5B2CD3 100%)",
        borderRadius: "20px",
      }}
    >
      <div style={{ marginBottom: "-2rem" }}>
        <AppCard>
          <h4 style={{ fontSize: "12px", color: "#140A2B", margin: "0" }}>
            My Balance
          </h4>
          <div style={{ marginBottom: "43px" }}>
            <span
              style={{ color: "#5B2CD3", fontSize: "20px", fontWeight: "700" }}
            >
              1,200,000
            </span>
            <span
              style={{
                marginLeft: "5px",
                color: "#5B2CD3",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              SAR
            </span>
          </div>
          <Button
            shape="round"
            style={{ width: "100%", height: "42px" }}
            type="primary"
          >
            Add Balance
          </Button>
          <Button
            shape="round"
            style={{
              width: "100%",
              marginTop: "10px",
              height: "42px",
              color: "#140A2B",
              background: "#fff",
              borderColor: "rgba(138, 133, 149, 0.2)",
            }}
          >
            Transfer
          </Button>
        </AppCard>
      </div>
    </div>
  );
};

export default SideCard;
