import { FETCH_BLOGS_FAILURE, FETCH_BLOGS_REQUEST, FETCH_BLOGS_SUCCESS } from '../Actions';

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_BLOGS_SUCCESS:
      return { ...state, blogs: action.payload, loading: false };
    case FETCH_BLOGS_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default blogsReducer;
