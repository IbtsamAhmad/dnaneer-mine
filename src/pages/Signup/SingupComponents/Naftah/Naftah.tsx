import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "assets/svgs/BackArrow.svg";
import { ReactComponent as AppleLogo } from "assets/svgs/Apple-logo.svg";
import { ReactComponent as GoogleStore } from "assets/svgs/GoogleStore.svg";
// import { ReactComponent as NaftahLogo } from "assets/svgs/Naftah-logo.svg";
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
    navigate("/");
  };
  return (
    <div className={classes["naftah-container"]}>
      <Button
        className="singUp-back-btn"
        icon={<BackArrow />}
        onClick={backHandler}
      >
        Back
      </Button>

      <div className={classes["naftah-logo-container"]}>
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
        <Input className={classes["naftah-input"]} />
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
      <div className={classes["naftah-download"]}>
        <div className={classes["naftah-download-wrapper"]}>
          <h5>Download Naftah App</h5>
          <div>
            <AppleLogo />
            <GoogleStore style={{ marginLeft: "16px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naftah;
