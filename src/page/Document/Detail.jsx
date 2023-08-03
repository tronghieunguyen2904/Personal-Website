import styles from "./Document.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FileViewer from "react-file-viewer";
import "animate.css/animate.min.css";
import { storage } from "./firebase";
import {
  deleteObject,
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 } from "uuid";
import { PictureAsPdfOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

function DetailCard() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewError, setPreviewError] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showDeleteInput, setShowDeleteInput] = useState(false);

  const handleDeleteButtonClick = () => {
    setShowDeleteInput(!showDeleteInput);
  };

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
        setFileList((prev) => [
          ...prev,
          { url, contentType: uploadedFile.type },
        ]);
        setUploadedFile(null); // Hide the preview after successful upload
      });
    });
  };

  const handleFileSelect = (url) => {
    // Check if the file is already selected, if so, remove it from the selectedFiles array
    setSelectedFiles((prev) =>
      prev.includes(url)
        ? prev.filter((fileUrl) => fileUrl !== url)
        : [...prev, url]
    );
  };

  const handleDeleteSelected = () => {
    // Create an array of promises to delete selected files
    const deletePromises = selectedFiles.map((url) => {
      const fileRef = ref(storage, url);
      return deleteObject(fileRef);
    });

    // Execute all delete promises concurrently using Promise.all()
    Promise.all(deletePromises)
      .then(() => {
        // After successful deletion, update the file list by removing the deleted files
        setFileList((prev) =>
          prev.filter((file) => !selectedFiles.includes(file.url))
        );
        setSelectedFiles([]); // Clear the selectedFiles array
        setShowDeleteInput(false);
      })
      .catch((error) => {
        console.error("Error deleting files:", error);
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
        const promises = res.items.map((item) =>
          Promise.all([
            getDownloadURL(item),
            getMetadata(item).then((metadata) => metadata.contentType),
          ])
        );

        Promise.all(promises)
          .then((urlsAndTypes) => {
            const fileList = urlsAndTypes.map(([url, contentType]) => ({
              url,
              contentType,
            }));
            setFileList(fileList);
          })
          .catch((error) => {
            console.error("Error getting download URL or metadata:", error);
          });
      })
      .catch((error) => {
        console.error("Error listing images:", error);
      });
  }, []);

  function extractOriginalFileName(url) {
    // Tìm vị trí của ký tự "%2F" (gạch chéo ngược) đầu tiên trong URL
    const startIndex = url.indexOf("%2F") + 3;

    // Tìm vị trí của ký tự "_" (gạch ngang) sau vị trí bắt đầu
    const endIndex = url.indexOf("f", startIndex) + 1;

    // Trích xuất chuỗi tên file từ URL bằng phương thức slice()
    const fileName = url.slice(startIndex, endIndex);
    return fileName;
  }

  return (
    <div className={cx("detail-card-container")}>
      <h1>Tài liệu Tiếng Anh</h1>
      <div>
        <input type="file" onChange={handleFileChange} accept="*/*" />
        <Button variant="contained" color="primary" onClick={handleUpload}>
          Upload File
        </Button>
        <Button
          variant="contained"
          color="error"
          style={{margin:'0px 20px'}}
          onClick={handleDeleteButtonClick}
        >
          {showDeleteInput ? "Cancel" : "Delete"} {/* Toggle button text */}
        </Button>
        {showDeleteInput ? (
          <Button
            variant="contained"
            color="success"
            onClick={handleDeleteSelected}
          >
            Confirm Delete
          </Button>
        ) : (
          ""
        )}

        {uploadedFile && (
          <Paper elevation={3}>
            <Typography variant="h6">File Preview</Typography>
            {isPDF(uploadedFile.type) ? (
              <embed
                src={URL.createObjectURL(uploadedFile)}
                type="application/pdf"
                width="100%"
                height="300px"
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            margin: "20px 0px",
          }}
        >
          {fileList.map((file, index) => {
            const fileName = extractOriginalFileName(file.url);
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
                // eslint-disable-next-line react/jsx-key
                <div>
                  <Link
                    to={file.url}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ScrollAnimation
                      animateIn="animate__fadeIn"
                      animateOut="animate__fadeOut"
                      animateOnce
                    >
                      {showDeleteInput ? (
                        <input
                          type="checkbox"
                          checked={selectedFiles.includes(file.url)}
                          onChange={() => handleFileSelect(file.url)}
                        />
                      ) : (
                        ""
                      )}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "var(--text-color)!important",
                          width: "250px",
                          height: "200px",
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                          boxShadow: "#959da5 0px 8px 24px 0px",
                          margin: "10px",
                        }}
                      >
                        <PictureAsPdfOutlined
                          style={{ fontSize: "120px", fill: "red" }}
                        />
                        <p
                          style={{
                            color: "var(--text-color)",
                            fontWeight: "500",
                          }}
                        >
                          {fileName}
                        </p>
                      </Box>
                      
                    </ScrollAnimation>
                  </Link>
                </div>
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
