import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailBlogRequest } from "../../Redux/Actions";
function DetailBlog() {
  const dispatch = useDispatch();
  const blogId = localStorage.getItem('idBlog'); // Lấy blogId từ useParams()
  const blog = useSelector((state) => state.blogs.blog);

  useEffect(() => {
    dispatch(fetchDetailBlogRequest(blogId));
  }, [dispatch, blogId]);
  console.log(blog);
  return (
    <div>
        <h1>{blog.title}</h1>
        <img src={blog.attachment} alt="HÌnh" style={{width:'100%',height:'600px'}}/>
        <p><div dangerouslySetInnerHTML={{ __html: blog.content }} /></p>
    </div>
  );
}

export default DetailBlog;
