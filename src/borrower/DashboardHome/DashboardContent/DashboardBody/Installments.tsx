import { Divider } from "antd";
import Heading from "borrower/Components/Heading/Heading";
import Installment from "./Installment";

const Installments = ({ classes }) => {
  return (
    <div>
      <div>
        <Heading heading="My Installments" />
      </div>
      <div className="installment-header">
        <span>Installment</span>
        <span>Amount</span>
        <span>Due Date</span>
        <span>Description</span>
        <span>Status</span>
      </div>
      <Divider />
      <div>
        <Installment classes={classes} />
      </div>
    </div>
  );
};

export default Installments;
