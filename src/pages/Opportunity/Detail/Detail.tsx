import { Divider } from "antd";
import MainDetail from "./MainDetail";
import FinancingDetail from "./FinancingDetail";
import FundStatus from "./FundStatus";
import SupportedDocuments from "./SuppportedDocuments";
const Detail = () => {
  return (
    <div className="detail box-shadow">
      <div className="detail-header">
        <div className="detail-heading">
          <h1>Details</h1>
          <span>Active</span>
        </div>
        <div className="detail-time">Published 50 minutes ago</div>
      </div>
      <Divider />
      <MainDetail />
      <Divider />
      <FinancingDetail />
      <Divider />
      <FundStatus />
      <Divider />
      <SupportedDocuments />
    </div>
  );
};

export default Detail;
