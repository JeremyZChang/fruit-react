import axios from 'axios'
import io from 'socket.io-client'

const socket = io('ws://localhost:9093')

const MSG_LIST = 'MSG_LIST'

const MSG_RECEIVE = 'MSG_RECEIVE'

const MSG_READ = 'MSG_READ'

const initState = {
    chatMsg: [],
    users:{},
    unread:0
}

export function chat(state=initState, action) {
    switch(action.type){
        case MSG_LIST:
            return {...state, users:action.payload.users,chatMsg:action.payload.msgs, unread:action.payload.msgs.filter(v=>!v.read&&v.to===action.payload.userId).length}
        case MSG_RECEIVE:
            const n = action.payload.to===action.userId?1:0
            return {...state,chatMsg:[...state.chatMsg, action.payload]}
        case MSG_READ:
        default:
            return state
    }
}

function msgList(msgs, users, userId) {
    return {type:MSG_LIST, payload:{msgs,users,userId}}
}

function msgReceive(msg, userId) {
    return {type:MSG_RECEIVE, payload:{msgs,userId}}
}

export function getMsgList() {
    return (dispatch, getState)=>{
        axios.get('/user/getMsgList').then(res=>{
            if(res.status===200 && res.data.code===0) {
                const userId = getState().user._id
                dispatch(msgList(res.data.msgs, res.data.users, userId))
            }
        })
    }
}

export function sendMsg({from, to ,msg}) {
    return dispatch=>{
        socket.emit('sendMsg',{from, to, msg})
    }
}

export function receiveMsg() {
    return (dispatch, getState)=>{
        socket.on('receiveMsg',function(data) {
            const userId = getState().user._id
            dispatch(msgReceive(data, userId))
        })
    }
}