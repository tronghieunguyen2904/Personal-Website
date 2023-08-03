import { Button, Typography } from "@mui/material";
import styles from "./Document.module.scss";
import classNames from "classnames/bind";
import { ArrowCircleRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function Card({title,des}) {
    return (
        <div className={cx("card-container")}>
            <img src="https://i.imgur.com/3lNxiwz.jpg" alt="Ảnh"/>
            <Typography variant="h2" color="primary" className={cx("card-h2")}>{title}</Typography>
            <Typography variant="p"  className={cx("card-p")}>{des}</Typography>
            <Link to='/document/ta' style={{textDecoration:'none'}}><Button variant="contained" color="primary">Xem tài liệu <ArrowCircleRightOutlined style={{marginLeft:'10px'}} /></Button></Link> 
        </div>
      );
}

export default Card;