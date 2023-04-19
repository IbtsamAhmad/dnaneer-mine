import { Row, Col, Progress } from "antd";
const FundStatus = () => {
  return (
    <>
      <Row>
        <Col xs={24}>
          <div style={{ marginBottom: "27px" }}>
            <h3 className="large-heading">Fund status</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={18}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0 0 8px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <div style={{ color: "#5B2CD3", marginTop: "12px" }}>
                <span
                  style={{
                    fontSize: "18px",
                    color: "#5B2CD3",
                    fontWeight: "700",
                  }}
                >
                  1,250,000
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    marginLeft: "5px",
                    fontWeight: "500",
                  }}
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
                flexDirection: "column-reverse",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                    fontWeight: "800",
                  }}
                >
                  2,250,000
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    marginLeft: "5px",
                    fontWeight: "500",
                  }}
                >
                  SAR
                </span>
              </div>
              <div style={{ fontSize: "12px", color: "#8A8595" }}>
                Fund Needed
              </div>
            </div>
          </div>
          <Progress
            strokeColor="#5B2CD3"
            //   type=""
            percent={75}
            //   size={[600,15]}
          />
        </Col>
      </Row>
    </>
  );
};

export default FundStatus;
