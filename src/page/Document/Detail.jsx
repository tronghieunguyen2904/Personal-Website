import styles from "./Document.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FileViewer from "react-file-viewer";
import { storage } from "./firebase";
import {
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
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
  const imageListRef = ref(storage, "ta/");
  const handleUpload = () => {
    if (uploadedFile == null) return;
    const fileRef = ref(storage, `ta/${uploadedFile.name + v4()}`);
    uploadBytes(fileRef, uploadedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
    });
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
  useEffect(() => {
    listAll(imageListRef)
      .then((res) => {
        console.log(res);
        res.items.forEach((item) => {
          // Get the download URL
          getDownloadURL(item)
            .then((url) => {
              // Get metadata to retrieve content type
              getMetadata(item)
                .then((metadata) => {
                  const contentType = metadata.contentType;
                  // Now you have both the URL and the content type, you can do whatever you need with them.
                  setFileList((prev) => [...prev, { url, contentType }]);
                })
                .catch((error) => {
                  console.error("Error getting metadata:", error);
                });
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        });
      })
      .catch((error) => {
        console.error("Error listing images:", error);
      });
  }, []);

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
                <source
                  src={URL.createObjectURL(uploadedFile)}
                  type={uploadedFile.type}
                />
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
          {fileList.map((file, index) => {
            if (!file.contentType) {
              // If contentType is null/undefined, display an error message or handle it as needed
              return <p key={index}>Unsupported file type</p>;
            } else if (file.contentType.startsWith("image/")) {
              // If the content type starts with 'image/', it's an image, so render an <img> tag
              return <img src={file.url} alt="Ảnh" key={index} />;
            } else if (file.contentType.startsWith("video/")) {
              // If the content type starts with 'video/', it's a video, so render a <video> tag
              return (
                <video controls key={index}>
                  <source src={file.url} type={file.contentType} />
                  Your browser does not support the video tag.
                </video>
              );
            } else if (file.contentType === "application/pdf") {
              // If the content type is 'application/pdf', it's a PDF file, so render it using an <iframe> tag
              return (
                <a href={file.url} target="_blank" rel="noopener noreferrer" key={index}>
                  View PDF {index + 1}
                </a>
              );
            } else {
              // For other types, you can render a default message or handle them according to your requirements.
              return (
                <p key={index}>Unsupported file type: {file.contentType}</p>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
