import { Box } from "@mui/material";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FacebookOutlined, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <Box className={cx("profile-container")}>
        <Box className={cx("footer-container")}>
          <Box className={cx("footer-box")}>
            <Link to="/" style={{textDecoration:'none',color:'#ffffff'}} >
            <span>NTHSTOGARE</span>
            </Link>
            <p>Website cá nhân nơi lưu trữ các tài liệu về học tập làm việc, chia sẽ kiến thức tới mọi người</p>
          </Box>
          <Box className={cx("footer-box")}>
            <span>Mạng xã hội</span>
            <Link style={{textDecoration:'none',color:'#ffffff'}} target="_blank" to="https://www.facebook.com/tronghiieu/"><p><FacebookOutlined /> <span>Facebook</span></p></Link>
            <Link style={{textDecoration:'none',color:'#ffffff'}} target="_blank" to="https://github.com/tronghieunguyen2904">
            <p><GitHub /> <span>Github</span></p>
            </Link>
          </Box>
          <Box className={cx("footer-box")}>
            <Link to='/document' style={{textDecoration:'none',color:'#ffffff'}}>
            <span>Tài liệu</span>
            </Link>
            <p>Nơi lưu trữ các tài liệu liên quan tới học tập, làm việc,...</p>
          </Box>
          <Box className={cx("footer-box")}>
            <Link to="/blog" style={{textDecoration:'none',color:'#ffffff'}}>
            <span>Blogs</span>
            </Link>
            <p>Nơi chia sẽ những kiến thức cá nhân tới cho mọi người</p>
          </Box>
        </Box>
    </Box>
  );
}

export default Footer;
