import Button from "components/Button/Button";
import { ReactComponent as TransferBack } from "assets/svgs/TransferBack.svg";
import { ReactComponent as QuestionIcon } from "assets/svgs/QuestionIcon.svg";
const Confirm = ({ handleBack, handleNext }) => {
  return (
    <div>
      <div className="transfer-back" onClick={handleBack}>
        <TransferBack />
        <p>Back</p>
      </div>
      <h1>Transfer by bank</h1>
      <div className="modal-content">
        <div className="questionIcon">
          <QuestionIcon />
        </div>
        <h1>Confirm Payment Transfer</h1>
        <p>You are about to transfer</p>
        <p className="amount">300,000 SAR</p>
        <Button
          block
          style={{ height: "52px", marginTop: "36px" }}
          onClick={handleNext}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Confirm;
