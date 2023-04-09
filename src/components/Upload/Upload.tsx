import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import Button from "components/Button/Button";
import { ReactComponent as UploadIcon } from "assets/svgs/UploadIcon.svg";
import "./upload.scss"
const { Dragger } = Upload;


const beforeUpload = (file) => {
  const isVideo = file.type === "video/mp4" || file.type === "video/mkv";
  if (!isVideo) {
    message.error("You can only upload Video file");
  }
  const isLt5M = file.size / 1024 / 1024 < 5;
  if (!isLt5M) {
    message.error("Image must smaller than 5MB!");
  }
  return isVideo && isLt5M;
};

// const dummyRequest = ({ file, onSuccess }) => {
//   // console.log("Dummy", file);
//   setTimeout(() => {
//     onSuccess("ok");
//   }, 0);
// };
const onDrop = (e) => {
  //  console.log("Dropped files", e.dataTransfer.files);
};
const onChange = (info) => {
  const { status } = info.file;

};


const UploadComponent = () => (
  <div className="upload-container">
    <Dragger
      className="document-upload"
      onChange={onChange}
      onDrop={onDrop}
      beforeUpload={beforeUpload}
      showUploadList={true}
      // customRequest={dummyRequest}
    >
      <p className="import">Upload the commercial registration as PDF</p>
      <p className="browse">
        <UploadIcon/> Upload
      </p>
    </Dragger>
  </div>
);
export default UploadComponent;
