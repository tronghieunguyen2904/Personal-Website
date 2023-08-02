
import Card from "./Card";
import styles from "./Document.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Document() {
  return (
    <div className={cx("document-container")}>
      <h1>Trang tài liệu</h1>
      
      <div className={cx("document-card-container")}>
        <Card
          title="Tài liệu ôn tập tiếng anh"
          des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
        />
        <Card
          title="Tài liệu ôn tập tiếng anh"
          des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
        />
        <Card
          title="Tài liệu ôn tập tiếng anh"
          des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
        />
        <Card
          title="Tài liệu ôn tập tiếng anh"
          des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
        />
        <Card
          title="Tài liệu ôn tập tiếng anh"
          des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
        />
        <Card
          title="Tài liệu ôn tập tiếng anh"
          des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
        />
      </div>
    </div>
  );
}

export default Document;
