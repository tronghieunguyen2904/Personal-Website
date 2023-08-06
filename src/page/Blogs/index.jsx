import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsRequest } from '../../Redux/Actions';



function BlogsPage() {
    const dispatch = useDispatch();
    const { data , loading, error } = useSelector((state) => state.posts); // Check the state.posts object
  
    useEffect(() => {
      dispatch(fetchPostsRequest());
    }, [dispatch]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        {data.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    );
}

export default BlogsPage;