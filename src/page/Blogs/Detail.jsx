import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailBlogRequest } from "../../Redux/Actions";
import styles from "./Blog.module.scss";
import classNames from "classnames/bind";
import { Box, Container } from "@mui/material";
const cx = classNames.bind(styles);

function DetailBlog() {
  const dispatch = useDispatch();
  const blogId = localStorage.getItem("idBlog"); // Lấy blogId từ useParams()
  const blog = useSelector((state) => state.blogs.blog);
  const [contentWithLi, setContentWithLi] = useState("");


  useEffect(() => {
    dispatch(fetchDetailBlogRequest(blogId));
  }, [dispatch, blogId]);

  useEffect(() => {
    if (blog.content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(blog.content, "text/html");

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
  }, [blog.content]);

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
        console.log(clickedLiElement);
        // Gọi phương thức scrollIntoView để cuộn đến phần tử cần hiển thị
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div className={cx("blogs-container")}>
      <Container className={cx("blogs-detail-container")}>
        <Box className={cx("blogs-populated")}>
          <Box className={cx("blogs-populated-heading")}>
            <p>Nội dung</p>
          </Box>
          <Box
            className={cx("blogs-populated-list")}
            dangerouslySetInnerHTML={{ __html: contentWithLi }}
            onClick={scrollToHeading}
          />
        </Box>
        <Box className={cx("blogs-detail-body")}>
          <h1>{blog.title}</h1>
          <img
            src={blog.attachment}
            alt="HÌnh"
            style={{ width: "100%", height: "600px" }}
          />
          <p>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </p>
        </Box>
        <Box className={cx("blogs-other")}>
          <span>Bài viết liên quan</span>
        </Box>
      </Container>
    </div>
  );
}

export default DetailBlog;
