import { Home } from "@mui/icons-material";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("navigate-container")}>
      <div className={cx("navigate-box")}>
        <Home style={{fontSize:'20px'}}/>
        <p>Trang chủ</p>
      </div>{" "}
      <div className={cx("navigate-box")}>
        <Home style={{fontSize:'20px'}} />
        <p>Trang chủ</p>
      </div>{" "}
      <div className={cx("navigate-box")}>
        <Home style={{fontSize:'20px'}} />
        <p>Trang chủ</p>
      </div>{" "}
      <div className={cx("navigate-box")}>
        <Home style={{fontSize:'20px'}} />
        <p>Trang chủ</p>
      </div>
    </div>
  );
}

export default Header;
