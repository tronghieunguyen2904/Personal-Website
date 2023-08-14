import { Box } from "@mui/material";
import styles from "./Blog.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function CardDetail({img,content}) {
    return (  
        <div>
            <Box className={cx("card-detail-container")}>
                <img src={img} alt="Hình"/>
                <p>{content}</p>
            </Box>
        </div>
    );
}

export default CardDetail;