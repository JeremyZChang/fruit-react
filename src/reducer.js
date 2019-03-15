import { combineReducers } from 'redux'
import { counter } from "./index.redux";
import { auth } from "./Auth.redux";

// 合并所有的reducers 并且返回
export default combineReducers({counter, auth})