import { Progress } from "antd";
import Tag from "components/Tags/Tags";

const tags = [
  "12 months",
  "Opportunity date: 25 Feb, 2023",
  "Annual ROI 17.5%",
];

const CardInfo = ({ id }) => {
  return (
    <div className="card-info">
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontWeight: "700" }}>#4197564</h3>
        <h5 style={{ marginLeft: "10px" }}>Importing and Exporting Agency</h5>
      </div>
      <div style={{ display: "flex" }}>
        {tags.map((tagName) => (
          <Tag key={tagName} tag={tagName} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "31px 0 12px 0",
        }}
      >
        <div>
          <div style={{ color: "#5B2CD3" }}>
            <span
              style={{ fontSize: "18px", color: "#5B2CD3", fontWeight: "700" }}
            >
              1,250,000
            </span>
            <span
              style={{ fontSize: "12px", marginLeft: "5px", fontWeight: "500" }}
            >
              SAR
            </span>
          </div>
          <div style={{ fontSize: "12px", color: "#8A8595" }}>
            70% Collected
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <div>
            <span
              style={{ fontSize: "15px", marginLeft: "5px", fontWeight: "800" }}
            >
              2,250,000
            </span>
            <span
              style={{ fontSize: "12px", marginLeft: "5px", fontWeight: "500" }}
            >
              SAR
            </span>
          </div>
          <div style={{ fontSize: "12px", color: "#8A8595" }}>Fund Needed</div>
        </div>
      </div>
      <Progress
        strokeColor="#5B2CD3"
        //   type=""
        percent={75}
        //   size={[600,15]}
      />
    </div>
  );
};

export default CardInfo;
