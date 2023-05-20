import { Button, message } from "antd";
import AppModal from "components/Modal/Modal";
import Otp from "components/OTP/Otp";
import { useEffect, useState } from "react";
import classes from "./steps.module.scss";
import { timeConverter } from "utils/Helper";
import { useNavigate } from "react-router-dom";

const AbsherOtp = ({ openAbsherOtp, setAbsherOtp, setOpen }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState<number>(60);
  useEffect(() => {
    let timer;
    if (time !== 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time]);

  const onOtpConfirm = () => {
    if (otp === "1234") {
        setOpen(false);
        setAbsherOtp(false);
      navigate("/dashboard");
    } 
    else message.error("Invalid OTP");
  };
  return (
    <AppModal
      width={426}
      footer={null}
      onCancel={() => setAbsherOtp(false)}
      modalTitle={
        <div className={classes["absher-header"]}>
          <span>Absher OTP</span>
        </div>
      }
      isModalVisible={openAbsherOtp}
    >
      <div className={classes["absher-otp-wrapper"]}>
        <div>
          <p>Please type the OTP received on your phone</p>
        </div>
        <div>
          <Otp
            containerClass={classes["absher-otp-container"]}
            width="45px"
            height="45px"
            setOtp={setOtp}
            otp={otp}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          {" "}
          <p className="timer">
            {time !== 0 ? timeConverter(time) : "OTP expired"}{" "}
            {time ? <span>left</span> : null}
          </p>
        </div>
        <div style={{ textAlign: "center", marginTop: "108px" }}>
          <Button
            type="primary"
            shape="round"
            style={{ width: "288px", height: "52px" }}
            onClick={onOtpConfirm}
          >
            Confirm
          </Button>
        </div>
      </div>
    </AppModal>
  );
};

export default AbsherOtp;
