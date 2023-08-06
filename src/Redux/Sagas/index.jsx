// Redux/mySaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure } from '../Actions';
import * as api from '../../api'; // Import tệp API riêng của bạn

// Saga để lấy danh sách bài viết
function* fetchPostsSaga() {
    try {
      const response = yield call(api.fetchBlogs); // Call your API function
      console.log(response); // Verify the API response in the console
      yield put(fetchPostsSuccess(response)); // Pass the entire response object to the action
    } catch (error) {
      yield put(fetchPostsFailure(error));
    }
  }
  

// Sử dụng takeEvery để lắng nghe mỗi lần FETCH_POSTS_REQUEST được gửi
function* mySaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default mySaga;
