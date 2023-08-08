import {
  DocumentScanner,
  Home,
  LightMode,
  Newspaper,
} from "@mui/icons-material";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Typography } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
  function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    return (
      <LightMode
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
        }}
      >
        {mode === "light" ? "Turn dark" : "Turn light"}
      </LightMode>
    );
  }

  return (
    <div>
      <div className={cx("navigate-container")}>
        <div className={cx("navigate-avatar")}>
          <img src="https://i.imgur.com/qeDkTmY.png" alt="Logo" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "682px",
          }}
        >
          <Link to="/" className={cx("navigate-box")}>
            <Home style={{ fontSize: "20px", marginBottom: "3px" }} />
            <Typography variant="p" className={cx("navigate-text")}>
              Trang chủ
            </Typography>
          </Link>{" "}
          <Link to="/document" className={cx("navigate-box")}>
            <DocumentScanner
              style={{ fontSize: "20px", marginBottom: "3px" }}
            />
            <Typography variant="p" className={cx("navigate-text")}>
              Tài liệu
            </Typography>
          </Link>{" "}
          <Link to="/blog" className={cx("navigate-box")}>
            <Newspaper style={{ fontSize: "20px", marginBottom: "3px" }} />
            <Typography variant="p" className={cx("navigate-text")}>
              Blog
            </Typography>
          </Link>{" "}
          <Link
            to="https://www.topcv.vn/xem-cv/WlgKAAMHAFcGBA1fAgRcAFJSWV1RUwEEBFAFVwf204"
            target="_blank"
            className={cx("navigate-box")}
          >
            <DocumentScanner
              style={{ fontSize: "20px", marginBottom: "3px" }}
            />
            <Typography variant="p" className={cx("navigate-text")}>
              My CV
            </Typography>
          </Link>{" "}
        </div>
        <div className={cx("navigate-dark-mode")}>
          <ModeToggle />
        </div>
        <div className={cx("navigate-dark-mode")}>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
