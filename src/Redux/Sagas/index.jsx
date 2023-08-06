// Redux/mySaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api'; // Import tệp API riêng của bạn

// Saga để lấy danh sách bài viết

function* fetchBlogsSaga() {
  try {
    const response = yield call(api.fetchBlogs);
    yield put({ type: 'FETCH_BLOGS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_BLOGS_FAILURE', error: error.message });
  }
}
  

// Sử dụng takeEvery để lắng nghe mỗi lần FETCH_POSTS_REQUEST được gửi
function* mySaga() {
  yield takeEvery('FETCH_BLOGS_REQUEST', fetchBlogsSaga);
}

export default mySaga;
