import { combineReducers } from 'redux'
import { chatUser } from "./chatuser.redux";
import { user } from './user.redux'
import { chat } from "./chat.redux";

// 合并所有的reducers 并且返回
export default combineReducers({user,chatUser,chat})