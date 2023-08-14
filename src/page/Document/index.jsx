import ScrollAnimation from "react-animate-on-scroll";
import Card from "./Card";
import styles from "./Document.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { fetchDocuments } from "../../api";
import LoadingOverlay from "../Home/loading";
const cx = classNames.bind(styles);

function Document() {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Gọi hàm fetchBlogs khi component được render
    fetchDocuments()
      .then((response) => {
        setDocuments(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className={cx("document-container")}>
      {isLoading ? (
        <LoadingOverlay style={{ top: "85px" }} textStyle={{ top: "65%" }} />
      ) : (
        <div>
          <h1>Trang tài liệu</h1>
          <div className={cx("document-card-container")}>
            {documents.map((document) => (
              <ScrollAnimation
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                animateOnce
                key={document._id}
              >
                <Card
                  title={document.title}
                  des={document.content}
                  img={document.attachment}
                  link={document.router}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Document;
