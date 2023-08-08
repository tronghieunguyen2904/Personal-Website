import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogsRequest } from "../../Redux/Actions";
import Card from "../Document/Card";
import styles from "./Blog.module.scss";
import classNames from "classnames/bind";
import { Button } from "@mui/material";
import ModalAdd from "./ModalAdd";
import ScrollAnimation from "react-animate-on-scroll";
import slugify from "slugify";
const cx = classNames.bind(styles);

function BlogsPage() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const loading = useSelector((state) => state.blogs.loading);
  const error = useSelector((state) => state.blogs.error);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchBlogsRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={cx("blogs-container")}>
      <h1>Danh sách blogs</h1>
      <Button
        variant="contained"
        style={{ marginBottom: "20px" }}
        onClick={handleOpen}
      >
        Thêm blogs
      </Button>
      <ModalAdd open={open} handleClose={handleClose} />
      <div className={cx("blogs-list")}>
        {blogs.map((blog) => {
          localStorage.setItem('idBlog',blog._id);
          // Tạo slug từ tiêu đề bằng cách sử dụng slugify
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
              <Card
                key={blog._id}
                title={blog.title}
                des="Tài nguyên cho dev"
                img={blog.attachment}
                link={`/blog/${slug}`}
              />
            </ScrollAnimation>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
