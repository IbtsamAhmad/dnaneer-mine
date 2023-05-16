import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "assets/svgs/BackArrow.svg";
import { ReactComponent as AppleLogo } from "assets/svgs/Apple-logo.svg";
import { ReactComponent as GoogleStore } from "assets/svgs/GoogleStore.svg";
import { ReactComponent as Close } from "assets/svgs/Close.svg";
import { ReactComponent as Start } from "assets/svgs/Start.svg";
import NafatLogo from "assets/images/Naftah-Logo.png";
import classes from "./naftah.module.scss";

// import Input from "components/Input/Input";

const Naftah = ({ setShowNaftah, setShowPassword }) => {
  const navigate = useNavigate();

  console.log("Naftah");
  const backHandler = () => {
    setShowPassword(true);
    // setShowOtp(true);
    setShowNaftah(false);
  };
  const completeNaftahProcess = () => {
    navigate("/dashboard");
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
              <AppleLogo />
              <GoogleStore style={{ marginLeft: "16px" }} />
            </div>
          </div>
        </div>
        <p> Dnaneer © Copyright 2023, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Naftah;
