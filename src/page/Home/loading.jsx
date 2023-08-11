import SyncLoader from "react-spinners/SyncLoader";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
// eslint-disable-next-line react/prop-types
function LoadingOverlay({style,textStyle}) {
    return ( 
        <div className={cx("home-container")}>
        <SyncLoader className={cx("loading-overlay")} style={style} color="var(--text-hover)" size={40}         aria-label="Loading Spinner"
        data-testid="loader"/>
        <p className={cx("loading-overlay-text")} style={textStyle}>Đang tải dữ liệu...</p>
        </div>
     );
}

export default LoadingOverlay;