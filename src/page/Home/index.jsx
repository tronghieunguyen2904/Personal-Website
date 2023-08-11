import { Button, Typography } from "@mui/material";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { ArrowCircleRightOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import LoadingOverlay from "./loading";
const cx = classNames.bind(styles);

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <LoadingOverlay />
      ) : (
        <div className={cx("home-container")}>
          {" "}
          <div className={cx("home-text")}>
            <Typography variant="span">Hello! Trọng Hiếu đây</Typography>
            <Typography variant="h1" className={cx("home-text-h1")}>
              Lưu trữ tài liệu học tập, làm việc
            </Typography>
            <Typography variant="p" className={cx("home-text-p")}>
              Tại đây, tôi lưu trữ những tài liệu quan trọng như hồ sơ công
              việc, dự án cá nhân, bài tập học tập, và những kỷ niệm đáng nhớ.
              Việc sắp xếp và phân loại tài liệu trong các thư mục riêng biệt
              giúp tôi duyệt và tìm kiếm một cách hiệu quả.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "10px", width: "100%", height: "47px" }}
            >
              CV CỦA TÔi{" "}
              <ArrowCircleRightOutlined style={{ marginLeft: "10px" }} />
            </Button>
          </div>
          <div className={cx("home-img")}>
            <img src="https://i.imgur.com/CHH9Rcc.png" alt="Ảnh" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
