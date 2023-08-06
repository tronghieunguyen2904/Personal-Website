// reducers/index.js
import { combineReducers } from 'redux';
import blogsReducer from './blog';

const rootReducer = combineReducers({
  blogs: blogsReducer,
});

export default rootReducer;
