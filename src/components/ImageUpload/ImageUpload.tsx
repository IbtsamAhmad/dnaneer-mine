import { useState } from "react";
import { message, Upload } from "antd";
import { ReactComponent as ProfileIcon } from "assets/svgs/ProfileIcon.svg";
import "./ImageUpload.scss";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
//code here
const ImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [profileUrl, setProfileUrl] = useState("/assets/images/Mask Group.png");

  const handleChange = async (info) => {
    // console.log("onChange", info);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (url) => {
        //  console.log("url", url);
        setProfileUrl(url);
        //  setUrl(url)
        setLoading(false);
        // setImageUrl(url);
      });
    }
  };

  const uploadButton = <div className="upload-placeholder">aaa</div>;

  const dummyRequest = ({ file, onSuccess }) => {
    // console.log("Dummy", file);
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        // customRequest={dummyRequest}
        onChange={handleChange}
      >
        {profileUrl && (
          <img
            src={profileUrl}
            alt="avatar"
            style={{
              width: "100%",
            }}
          />
        )}

        <div className="upload-icon">
          <ProfileIcon />
        </div>
      </Upload>
    </>
  );
};

export default ImageUpload;
