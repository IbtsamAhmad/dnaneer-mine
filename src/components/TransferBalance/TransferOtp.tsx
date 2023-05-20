import { useState, useEffect } from "react";
import { message } from "antd";
import Button from "components/Button/Button";
import Otp from "components/OTP/Otp";
import { timeConverter } from "utils/Helper";
import { ReactComponent as TransferBack } from "assets/svgs/TransferBack.svg";
const TransferOtp = ({ handleBack, handleNext }) => {
  const [time, setTime] = useState<number>(60);
  const [otp, setOtp] = useState("");
  useEffect(() => {
    let timer;
    if (time !== 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time]);

  const confirmTransfer = () => {
    if (otp.length < 4) {
      message.error("Enter OTP");
    }
    if (otp === "1234") {
        handleNext();
    }
  };
  return (
    <div>
      <div className="transfer-back" onClick={handleBack}>
        <TransferBack />
        <p>Back</p>
      </div>
      <h1>Transfer by bank</h1>
      <div className="modal-content">
        <h2>Please type the OTP received on your phone</h2>
        <div className="deactivate-otp-container">
          <Otp setOtp={setOtp} otp={otp} />
        </div>
        <p className="timer">
          {time !== 0 ? timeConverter(time) : "OTP expired"}{" "}
          {time ? <span>left</span> : null}
        </p>
        <Button
          block
          style={{ height: "52px", marginTop: "108px" }}
          onClick={confirmTransfer}
        >
          Transfer
        </Button>
      </div>
    </div>
  );
};

export default TransferOtp;
