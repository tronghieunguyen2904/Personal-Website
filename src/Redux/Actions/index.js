// Redux/actions.js
export const FETCH_BLOGS_REQUEST = 'FETCH_BLOGS_REQUEST';
export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_BLOGS_FAILURE = 'FETCH_BLOGS_FAILURE';

export const fetchPostsRequest = () => ({
  type: FETCH_BLOGS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_BLOGS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_BLOGS_FAILURE,
  payload: error,
});
