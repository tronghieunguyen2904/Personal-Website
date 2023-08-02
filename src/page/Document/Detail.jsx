import styles from "./Document.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FileViewer from "react-file-viewer";
import { storage } from "./firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";



function DetailCard() {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [previewError, setPreviewError] = useState(false);
    const [fileList, setFileList] = useState([]);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setUploadedFile(file);
      setPreviewError(false);
    };
    const imageListRef = ref(storage,"images/");
    const handleUpload = () => {
      if (uploadedFile == null) return
      const imageRef = ref(storage, `images/${uploadedFile.name + v4()}`)
      uploadBytes(imageRef,uploadedFile).then((snaphsot)=>{
        getDownloadURL(snaphsot.ref).then((url)=>{
            setFileList((prev)=> [...prev,url])
        })
      })
    };
  


  const isPDF = (fileType) => {
    return fileType === "application/pdf" || uploadedFile.name.endsWith(".pdf");
  };

  const isWordDocument = (fileType) => {
    return (
      fileType === "application/msword" ||
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      uploadedFile.name.endsWith(".doc") ||
      uploadedFile.name.endsWith(".docx")
    );
  };

  const isImage = (fileType) => {
    return fileType.startsWith("image/");
  };

  const isVideo = (fileType) => {
    return fileType.startsWith("video/");
  };

  const isAudio = (fileType) => {
    return fileType.startsWith("audio/");
  };
  useEffect(()=>{
    listAll(imageListRef).then((res)=>{
        res.items.forEach((item)=>{
            getDownloadURL(item).then((url)=>{
                setFileList((prev)=> [...prev , url])
            }) 
        })
    })
  },[])
  return (
    <div className={cx("detail-card-container")}>
      <h1>Tài liệu Tiếng Anh</h1>
      <div>
        <input type="file" onChange={handleFileChange} accept="*/*" />
        <Button variant="contained" color="primary" onClick={handleUpload}>
          Upload File
        </Button>

        {uploadedFile && (
          <Paper elevation={3}>
            <Typography variant="h6">File Preview</Typography>
            {isPDF(uploadedFile.type) ? (
              <embed
                src={URL.createObjectURL(uploadedFile)}
                type="application/pdf"
                width="100%"
                height="600px"
              />
            ) : isWordDocument(uploadedFile.type) ? (
              <FileViewer
                fileType={uploadedFile.type}
                filePath={URL.createObjectURL(uploadedFile)}
              />
            ) : isImage(uploadedFile.type) ? (
              <img
                src={URL.createObjectURL(uploadedFile)}
                alt="Preview"
                style={{ height: "600px", width: "100%" }}
              />
            ) : isVideo(uploadedFile.type) ? (
              <FileViewer
                fileType={uploadedFile.type}
                filePath={URL.createObjectURL(uploadedFile)}
              />
            ) : isAudio(uploadedFile.type) ? (
                <audio controls style={{ width: "100%" }}>
                <source src={URL.createObjectURL(uploadedFile)} type={uploadedFile.type} />
                Your browser does not support the audio element.
              </audio>
            ) : (
              <div>File Preview {uploadedFile.type} is not supported.</div>
            )}
          </Paper>
        )}

        {previewError && (
          <Typography>Preview not available for this file type.</Typography>
        )}
        <div>
            {fileList.map((url,index)=>{
                return <img src={url} alt="Ảnh" key={index} />
            })}
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
