import { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import Button from "components/Button/Button";
import { ReactComponent as UploadIcon } from "assets/svgs/UploadIcon.svg";
import { ReactComponent as File } from "assets/svgs/File.svg";
import { ReactComponent as FileDelete } from "assets/svgs/FileDelete.svg";
import "./upload.scss";
const { Dragger } = Upload;

const beforeUpload = (file) => {
  const isPDF = file.type === "application/pdf";
  if (!isPDF) {
    return message.error("You can only upload PDF file");
  }
  const isLt5M = file.size / 1024 / 1024 < 5;
  if (!isLt5M) {
    return message.error("Image must smaller than 5MB!");
  }
  return isPDF && isLt5M;
};

const UploadComponent = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const dummyRequest = ({ file, onSuccess }) => {
    // console.log("Dummy", file);
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const onDrop = (e) => {
    //  console.log("Dropped files", e.dataTransfer.files);
  };

  const onChange = (info) => {
    console.log("info", info);
    setUploadedFiles(info.fileList);
  };

  const onDeleteFile = (id) =>{
    console.log("here", id)
   const files = [...uploadedFiles];
   const filtered = files.filter((file) => file.uid !== id);
   setUploadedFiles(filtered)
  } 
  return (
    <div>
      <div className="upload-container">
        <Dragger
          className="document-upload"
          onChange={onChange}
          onDrop={onDrop}
          // beforeUpload={beforeUpload}
          showUploadList={false}
        //  customRequest={dummyRequest}
        >
          <p className="import">Upload the commercial registration as PDF</p>
          <p className="browse">
            <UploadIcon /> Upload
          </p>
        </Dragger>

        {uploadedFiles.map((file,i) =>{
       return (
         <div className="upload-file-container" key={i}>
           <div className="file-col-one">
             <File />
             <h2>{file.name}</h2>
           </div>
           <div
             className="file-delete-icon"
             onClick={() => onDeleteFile(file.uid)}
           >
             <FileDelete />
           </div>
         </div>
       );
    })}
      </div>
    </div>
  );
};

export default UploadComponent;
