import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsRequest } from '../../Redux/Actions';
import Card from '../Document/Card';
import styles from "./Blog.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);



function BlogsPage() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const loading = useSelector((state) => state.blogs.loading);
  const error = useSelector((state) => state.blogs.error);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  
    return (
      <div  className={cx("blogs-container")}>
      <h1>Danh sách blogs</h1>
      {blogs.map((blog) => (
        <Card      key={blog._id}        title={blog.title}
        des={blog.content}
        img={blog.attachment}
        link={blog.router} />

      ))}
    </div>
    );
}


export default BlogsPage;