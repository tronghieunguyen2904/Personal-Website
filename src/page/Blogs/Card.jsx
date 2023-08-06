import { Button, Typography } from "@mui/material";
import styles from "./Blog.module.scss";
import classNames from "classnames/bind";
import { ArrowCircleRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function Card({title,des,img,link}) {
    return ( 
        <div className={cx("card-container")}>
        <img src={img} alt="Ảnh"/>
        <Typography variant="h2" color="primary" className={cx("card-h2")}>{title}</Typography>
        <Typography variant="p"  className={cx("card-p")}>{des}</Typography>
        <Link to={link} style={{textDecoration:'none'}}><Button variant="contained" color="primary">Xem blogs! <ArrowCircleRightOutlined style={{marginLeft:'10px'}} /></Button></Link> 
    </div>
     );
}

export default Card;