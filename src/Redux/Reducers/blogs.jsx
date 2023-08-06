// Redux/reducers.js
import { combineReducers } from 'redux';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../Actions';

const initialPostsState = {
  data: [], // Thay thế "posts" bằng "data" để tránh trùng tên với combineReducers
  loading: false,
  error: null,
};

const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload, // Thay thế "posts" bằng "data"
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer, // Chắc chắn rằng bạn đã sử dụng "posts" ở đây, nếu không, hãy sửa lại tên
});

export default rootReducer;
