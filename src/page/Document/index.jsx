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
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
        >
          <Card
            title="Tài liệu ôn tập tiếng anh"
            des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
        >
          <Card
            title="Tài liệu ôn tập tiếng anh"
            des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
        >
          <Card
            title="Tài liệu ôn tập tiếng anh"
            des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
        >
          <Card
            title="Tài liệu ôn tập tiếng anh"
            des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce
        >
          <Card
            title="Tài liệu ôn tập tiếng anh"
            des="Các tài liệu liên quan đến việc ôn tập tiếng anh bao gồm từ vựng và video,...."
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Document;
