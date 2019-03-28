import React, { Component } from 'react';
import { List, InputItem, NavBar, Icon } from 'antd-mobile'
import { connect } from 'react-redux'
import { getMsgList,sendMsg,receiveMsg } from "../../redux/chat.redux";
import {getChatId} from "../../util/util";

@connect(state=>state, {getMsgList, sendMsg, receiveMsg})
class Chat extends Component{
    constructor(props){
        super(props)
        this.state = {
            text:'',
            msg:[]
        }
    }
    componentDidMount(){
        if(!this.props.chat.chatMsg.length){
            this.props.getMsgList()
            this.props.receiveMsg()
        }
    }
    handleSubmit = ()=>{
        // socket.emit('sendMsg', {text:this.state.text})
        // this.setState({text:''})
        const from = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.msg
        this.props.sendMsg({from,to,msg})
        this.setState({text:''})
    }

    render(){
        const userId = this.props.match.params.user
        const Item = List.Item
        const users = this.props.chat.users
        if(!users[userId]){
            return null
        }
        const chatId = getChatId(userId, this.props.user._id)
        const chatMsgs = this.props.chat.chatMsg.filter(v=>v.chatId=chatId)
        return (
            <div id="chat-page">
                <NavBar
                    mode="dark"
                    icon={<Icon type={"left"}/>}
                    onLeftClick={()=>{
                        this.props.history.goBack()
                    }}
                >
                    {users[userId].name}
                </NavBar>

                {chatMsgs.map(v=>{
                    const avatar = require(`../../img/avatar/${users[v.from].avatar}.png`)
                    return v.from === userId?(
                        <List key={v._id}>
                            <Item
                                thumb={avatar}
                            >{v.content}</Item>
                        </List>
                    ):(
                        <List key={v._id}>
                            <Item
                                extra={<img src={avatar} />}
                                className="chat-me"
                            >{v.content}</Item>
                        </List>
                    )
                })}
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder="请输入"
                            value={this.state.text}
                            onChange={v=>{
                                this.setState({text:v})
                            }}
                            extra={<span onClick={this.handleSubmit}>发送</span>}
                        />
                    </List>
                    <h2>chat with user:{this.props.match.params.user}</h2>
                </div>
            </div>
        )
    }
}

export default Chat