import { useState } from "react";
import { Button, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "assets/svgs/BackArrow.svg";
import { ReactComponent as AppleLogo } from "assets/svgs/Apple-logo.svg";
import { ReactComponent as GoogleStore } from "assets/svgs/GoogleStore.svg";
import { ReactComponent as Close } from "assets/svgs/Close.svg";
import { ReactComponent as Start } from "assets/svgs/Start.svg";
import NafatLogo from "assets/images/Naftah-Logo.png";
import classes from "./naftah.module.scss";
import { nafathStatus } from "services/Login";
// import Input from "components/Input/Input";

const Naftah = ({
  setShowNaftah,
  setShowPassword,
  nafathInfo,
  userId,
  passwordIno,
}) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  console.log("Naftah");
  const backHandler = () => {
    setShowPassword(true);
    // setShowOtp(true);
    setShowNaftah(false);
  };
  const completeNaftahProcess = async () => {
    const body = {
      user_id: userId,
      nationalId: passwordIno.national_id,
      transId: nafathInfo.transId,
      random: nafathInfo.random,
      dob: passwordIno.dob,
      email: passwordIno.email,
      password: passwordIno.password,
    };
    try {
      setLoader(true);
      const { data } = await nafathStatus(body);
      if (data) {
        console.log("nafath Status Res", data);

        message.success(`Your account status is ${data.status}`);
      navigate("/dashboard");
      }
    } catch (error) {
      console.log("err", error.response.data.message);
      message.error(error.response.data.message);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className={classes["naftah-wrapper"]}>
      <div className={classes["close-icon"]}>
        <a href="https://staging.dnaneer.com/">
          <Close />
        </a>
      </div>
      {/* <div className="signUp-form-container"> */}
      <div className={classes["naftah-container"]}>
        <div className={classes["start-icon"]}>
          <Start />
        </div>
        <div>
          <Button
            className={classes["singUp-back-btn"]}
            icon={<BackArrow />}
            onClick={backHandler}
          >
            Back
          </Button>

          <div className={classes["naftah-logo-container"]}>
            {/* <NaftahLogo /> */}
            <img width="55px" height="24px" src={NafatLogo} alt="naftah-logo" />
            <h5>Naftah App</h5>
          </div>
          <div className={classes["naftah-content"]}>
            <h1>Verify your registration</h1>
            <p>
              Please open Nafath App and select the below number to complete
              registration
            </p>
          </div>
          <div className={classes["naftah-code-container"]}>
            <Input className={classes["naftah-input"]} readOnly />
          </div>

          <Button
            style={{ height: "55px", marginTop: "48px" }}
            block
            type="primary"
            shape="round"
            onClick={completeNaftahProcess}
          >
            Complete
          </Button>
        </div>
      </div>
      {/* </div> */}
      <div className={classes["copy-right"]}>
        <div className={classes["naftah-download"]}>
          <div className={classes["naftah-download-wrapper"]}>
            <h5>Download Naftah App</h5>
            <div>
              <a
                href="https://apps.apple.com/sa/app/%D9%86%D9%81%D8%A7%D8%B0-nafath/id1598909871"
                target="_blank"
              >
                <AppleLogo />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=sa.gov.nic.myid&hl=en&gl=US&pli=1"
                target="_blank"
              >
                <GoogleStore style={{ marginLeft: "16px" }} />
              </a>
            </div>
          </div>
        </div>
        <p> Dnaneer © Copyright 2023, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Naftah;
