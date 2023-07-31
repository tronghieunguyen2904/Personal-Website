import { Box } from "@mui/material";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cx = classNames.bind(styles);

function Profile() {
  return (
    <Box className={cx("profile-container")}>
      <Box className={cx("profile-content")}>
        <Box className={cx("profile-slide")}>
            <img src="https://i.imgur.com/hvJKFWF.jpg" alt="hình" />
        </Box>
        <Box className={cx("profile-text")}>
            <h3>Nguyễn Trọng Hiếu</h3>
            <p>asdasasd</p>
        </Box>
        <Box className={cx("profile-cv")}>
            <h3>Download CV</h3>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
