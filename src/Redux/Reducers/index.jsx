import { combineReducers } from "redux";
import blogsReducers from "./blogs";

// eslint-disable-next-line react-refresh/only-export-components
export default combineReducers({
    blogs: blogsReducers,
});
