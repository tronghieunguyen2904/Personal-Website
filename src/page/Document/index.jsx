import ScrollAnimation from "react-animate-on-scroll";
import Card from "./Card";
import styles from "./Document.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Document() {
  return (
    <div className={cx("document-container")}>
      <h1>Trang tài liệu</h1>

      <div className={cx("document-card-container")}>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
        >
          <Card
            title="Tài liệu ôn tập tiếng anh"
            des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
            img="https://i.imgur.com/3lNxiwz.jpg"
            link="/document/tieng-anh"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
        >
          <Card
            title="Tài liệu đồ án chuyên ngành"
            des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
            img="https://i.imgur.com/5X3Gkxu.jpg"
            link="/document/chuyen-nganh"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
        >
          <Card
            title="Tài liệu luận văn tốt nghiệp"
            des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
            img="https://i.imgur.com/5xjl97v.jpg"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
        >
          <Card
            title="Tài liệu ôn tập tiếng anh"
            des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
            img="https://i.imgur.com/5xjl97v.jpg"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
        >
          <Card
            title="Tài liệu ôn tập tiếng anh"
            des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
            img="https://i.imgur.com/5xjl97v.jpg"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
        >
          <Card
            title="Tài liệu ôn tập tiếng anh"
            des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
            img="https://i.imgur.com/5xjl97v.jpg"
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Document;
