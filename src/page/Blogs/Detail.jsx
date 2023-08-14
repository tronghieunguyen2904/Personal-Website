import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsRequest, fetchDetailBlogRequest } from "../../Redux/Actions";
import styles from "./Blog.module.scss";
import classNames from "classnames/bind";
import { Box, Container } from "@mui/material";
import CardDetail from "./CardDetail";
import { format } from "date-fns";
import LoadingOverlay from "../Home/loading";
import ScrollAnimation from "react-animate-on-scroll";
import slugify from "slugify";
import { Link, Navigate } from "react-router-dom";
const cx = classNames.bind(styles);

function DetailBlog() {
  const dispatch = useDispatch();
  const blogId = localStorage.getItem("viewedBlogId"); // Lấy blogId từ useParams()
  const blogDetail = useSelector((state) => state.blogs.blog);
  const blogs = useSelector((state) => state.blogs.blogs);
  const loading = useSelector((state) => state.blogs.loading);
  const [contentWithLi, setContentWithLi] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(blogId);
  const handleViewBlogClick = (id,slug) => {
    localStorage.setItem("viewedBlogId", id);
    Navigate(`/blog/${slug}`);
    // Tải lại trang
    window.location.reload();
  };
  useEffect(() => {
    dispatch(fetchDetailBlogRequest(blogId));
    dispatch(fetchBlogsRequest());
  }, [dispatch,blogId]);

  //----------Điều chỉnh hiệu ứng fixed của nội dung ------------////////
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isFixed = scrollPosition > 70;
  //---------Lấy content ở body blog làm nội dung------------////

  useEffect(() => {
    if (blogDetail.content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(blogDetail.content, "text/html");

      const h2Nodes = doc.querySelectorAll("h2");
      const liElements = [];

      h2Nodes.forEach((h2Node) => {
        const liElement = document.createElement("li");
        const spanElement = document.createElement("span");
        spanElement.textContent = h2Node.textContent;
        liElement.appendChild(spanElement);
        liElements.push(liElement);
      });

      const olElement = document.createElement("ol");
      liElements.forEach((liElement) => {
        olElement.appendChild(liElement);
      });

      setContentWithLi(olElement.outerHTML);
    }
  }, [blogDetail.content]);
  //--------Hiệu ứng scroll-------------------///
  function smoothScrollTo(element, duration) {
    const targetPosition = element.getBoundingClientRect().top;
    const startPosition = window.scrollY || window.pageYOffset;
    const startTime = performance.now();

    function scrollStep(timestamp) {
      const currentTime = timestamp - startTime;
      const progress = Math.min(currentTime / duration, 1);

      window.scrollTo(0, startPosition + targetPosition * progress);

      if (currentTime < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }
  //-------------Scroll tới heading h2--------------///
  const scrollToHeading = (event) => {
    if (event.target.tagName === "SPAN") {
      const headingText = event.target.textContent;
      var targetElement = Array.from(document.querySelectorAll("h2")).find(
        (p) => p.textContent === headingText
      );
      if (targetElement) {
        const allLiElements = document.querySelectorAll("li span");
        allLiElements.forEach((li) => li.classList.remove("activeContent"));

        // Add the class to the clicked <li> element
        const clickedLiElement = event.target.closest("li span");
        clickedLiElement.classList.add("activeContent");
        // Gọi phương thức scrollIntoView để cuộn đến phần tử cần hiển thị
        smoothScrollTo(targetElement, 500);
      }
    }
  };
  let formattedDate = ""; // Define formattedDate with a default value

  if (blogDetail.createdAt) {
    const apiDate = blogDetail.createdAt;
    formattedDate = format(new Date(apiDate), "dd/MM/yyyy");
  }

  if (loading) {
    return (
      <div>
        <LoadingOverlay style={{ top: "85px" }} textStyle={{ top: "65%" }} />
      </div>
    );
  }
  return (
    <div className={cx("blogs-container")}>
      <Container className={cx("blogs-detail-container")}>
        <Box className={cx("blogs-populated")}>
          <Box
            sx={{
              position: isFixed ? "fixed" : "relative",
              width: "260px",
              top: isFixed ? "20px" : "auto",
            }}
          >
            <Box className={cx("blogs-populated-heading")}>
              <p>Nội dung</p>
            </Box>
            <Box
              className={cx("blogs-populated-list")}
              dangerouslySetInnerHTML={{ __html: contentWithLi }}
              onClick={scrollToHeading}
            />
          </Box>
        </Box>
        <Box className={cx("blogs-detail-body")}>
          <h1>{blogDetail.title}</h1>
          <div className={cx("blogs-detail-info")}>
            <p>
              Ngày đăng: <span>{formattedDate}</span>
            </p>
            <p>
              Tác giả: <span>{blogDetail.author}</span>
            </p>
          </div>
          <img
            src={blogDetail.attachment}
            alt="HÌnh"
            style={{ width: "100%", height: "600px" }}
          />
          <p>
            <div dangerouslySetInnerHTML={{ __html: blogDetail.content }} />
          </p>
        </Box>
        <Box className={cx("blogs-other")}>
          <span>Bài viết khác</span>
          <Container>
            {blogs.map((blog) => {
              const slug = slugify(blog.title, {
                replacement: "-", // Ký tự sẽ thay thế khoảng trắng và ký tự không hợp lệ
                lower: true, // Chuyển đổi các ký tự thành ký tự viết thường
              });
              return (
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                  animateOnce
                  key={blog._id}
                >
                  <Link to={`/blog/${slug}`} style={{textDecoration:'none',color:"var(--text-color)"}} onClick={() => handleViewBlogClick(blog._id,slug)}>
                    <CardDetail img={blog.attachment} content={blog.title} />
                  </Link>
                </ScrollAnimation>
              );
            })}
          </Container>
        </Box>
      </Container>
    </div>
  );
}

export default DetailBlog;
