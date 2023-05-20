import { useState } from "react";
import { Row, Col } from "antd";
import PDFModal from "components/Modal/PDFModal";
import { ReactComponent as PDF } from "assets/svgs/PDF.svg";
import { ReactComponent as View } from "assets/svgs/View.svg";
import { ReactComponent as Download } from "assets/svgs/Download.svg";
const SupportedDocuments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Row gutter={[16, 2]}>
        <Col xs={24}>
          <div style={{ marginBottom: "27px" }}>
            <h3 className="large-heading">Supported Documents</h3>
          </div>
        </Col>
        <Col md={8}>
          <DocumentViewer
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        </Col>
        <Col md={8}>
          <DocumentViewer
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        </Col>
      </Row>
    </>
  );
};

export default SupportedDocuments;

const DocumentViewer = ({ handleOk, handleCancel, isModalOpen }) => {
  return (
    <>
      <PDFModal
        centered
        className="logout-modal"
        isModalVisible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        
      >
        <h1>File Preview</h1>
        <iframe
          src="/assets/pdf/Dnaneer Contract .pdf"
          title="PDF Viewer"
          style={{ width: "100%", height:"800px" }}
        />
      </PDFModal>
      <div className="document-view-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <PDF width="16px" height="16px" />
          <span style={{ marginLeft: "10px" }}>legal-license.pdf</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div onClick={() => handleOk()}>
            <View />
          </div>
          <Download style={{ marginLeft: "10px" }} />
        </div>
      </div>
    </>
  );
};
