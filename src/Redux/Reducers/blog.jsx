import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  FETCH_BLOGS_FAILURE,
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_DETAIL_BLOG_FAILURE,
  FETCH_DETAIL_BLOG_REQUEST,
  FETCH_DETAIL_BLOG_SUCCESS,
} from "../Actions";

const initialState = {
  blogs: [],
  blog: [], // Should be an object, not an array
  loading: false,
  error: null,
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS_REQUEST:
      // Xử lý khi request lấy danh sách bài viết
      return { ...state, loading: true, error: null };
    case FETCH_BLOGS_SUCCESS:
      // Xử lý khi request lấy danh sách bài viết thành công
      return { ...state, blogs: action.payload, loading: false };
    case FETCH_BLOGS_FAILURE:
      // Xử lý khi request lấy danh sách bài viết thất bại
      return { ...state, error: action.payload, loading: false };
    case CREATE_POST_REQUEST:
      // Xử lý khi request tạo bài viết mới
      return { ...state, loading: true, error: null };
    case CREATE_POST_SUCCESS:
      // Xử lý khi request tạo bài viết mới thành công
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
        loading: false,
      };
    case CREATE_POST_FAILURE:
      // Xử lý khi request tạo bài viết mới thất bại
      return { ...state, error: action.payload, loading: false };
    case FETCH_DETAIL_BLOG_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DETAIL_BLOG_SUCCESS:
      return { ...state, blog: action.payload, loading: false };
    case FETCH_DETAIL_BLOG_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default blogsReducer;
