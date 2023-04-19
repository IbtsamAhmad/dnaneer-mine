import { Row, Col } from "antd";
import { ReactComponent as PDF } from "assets/svgs/PDF.svg";
import { ReactComponent as View } from "assets/svgs/View.svg";
import { ReactComponent as Download } from "assets/svgs/Download.svg";
const SupportedDocuments = () => {
  return (
    <>
      <Row gutter={[16, 2]}>
        <Col xs={24}>
          <div style={{ marginBottom: "27px" }}>
            <h3 className="large-heading">Supported Documents</h3>
          </div>
        </Col>
        <Col md={8}>
          <DocumentViewer />
        </Col>
        <Col md={8}>
          <DocumentViewer />
        </Col>
      </Row>
    </>
  );
};

export default SupportedDocuments;

const DocumentViewer = () => {
  return (
    <div className="document-view-container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <PDF width="16px" height="16px" />
        <span style={{ marginLeft: "10px" }}>legal-license.pdf</span>
      </div>
      <div>
        <View />
        <Download style={{ marginLeft: "10px" }} />
      </div>
    </div>
  );
};
