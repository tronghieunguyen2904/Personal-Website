import ScrollAnimation from "react-animate-on-scroll";
import Card from "./Card";
import styles from "./Document.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { fetchDocuments } from "../../api";
const cx = classNames.bind(styles);

function Document() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Gọi hàm fetchBlogs khi component được render
    fetchDocuments()
      .then((response) => setDocuments(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className={cx("document-container")}>
      <h1>Trang tài liệu</h1>
      <div className={cx("document-card-container")}>
      {documents.map((document) => (
         <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
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
  );
}

export default Document;
