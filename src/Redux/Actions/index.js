// Redux/actions.js
export const FETCH_BLOGS_REQUEST = 'FETCH_BLOGS_REQUEST';
export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_BLOGS_FAILURE = 'FETCH_BLOGS_FAILURE';

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const FETCH_DETAIL_BLOG_REQUEST = 'FETCH_DETAIL_BLOG_REQUEST';
export const FETCH_DETAIL_BLOG_SUCCESS = 'FETCH_DETAIL_BLOG_SUCCESS';
export const FETCH_DETAIL_BLOG_FAILURE = 'FETCH_DETAIL_BLOG_FAILURE';


// Các hàm action tương ứng
export const fetchBlogsRequest = () => ({
  type: FETCH_BLOGS_REQUEST,
});

export const fetchBlogsSuccess = (blogs) => ({
  type: FETCH_BLOGS_SUCCESS,
  payload: blogs,
});

export const fetchBlogsFailure = (error) => ({
  type: FETCH_BLOGS_FAILURE,
  payload: error,
});

export const createPostRequest = (newBlogData) => ({
  type: CREATE_POST_REQUEST,
  payload: newBlogData,
});

export const createPostSuccess = (newBlog) => ({
  type: CREATE_POST_SUCCESS,
  payload: newBlog,
});

export const createPostFailure = (error) => ({
  type: CREATE_POST_FAILURE,
  payload: error,
});

export const fetchDetailBlogRequest = (blogId) => ({
  type: FETCH_DETAIL_BLOG_REQUEST,
  payload: blogId,
});

export const fetchDetailBlogSuccess = (blog) => ({
  type: FETCH_DETAIL_BLOG_SUCCESS,
  payload: blog,
});

export const fetchDetailBlogFailure = (error) => ({
  type: FETCH_DETAIL_BLOG_FAILURE,
  payload: error,
});

