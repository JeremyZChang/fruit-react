import React, { Component } from 'react';
import { Route, Link, Redirect, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, NavBar } from 'antd-mobile'
import { connect } from 'react-redux'
import NavLinkBar from '../navLink/navLinkBar'
import Boss from "../../container/boss/boss";
import { getMsgList,sendMsg,receiveMsg } from "../../redux/chat.redux";

function Genius(){
    return <h2>牛人中心页面</h2>
}

function Msg(){
    return <h2>消息列表页面</h2>
}

function User(){
    return <h2>个人中心页面</h2>
}

@connect(state=>state,{ getMsgList, receiveMsg })
class Dashboard extends Component{
    componentDidMount(){
        if(!this.props.chat.chatMsg.length){
            this.props.getMsgList()
            this.props.receiveMsg()
        }
    }
    render(){
        const user = this.props.user
        const navList = [
            {
                path:'/boss',
                text:'BOSS',
                icon:'boss',
                title:'BOSS列表',
                component:Boss,
                hide:user.type=='genius'
            },{
                path:'/genius',
                text:'牛人',
                icon:'genius',
                title:'牛人列表',
                component:Genius,
                hide:user.type=='boss'
            },{
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg
            },{
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ]

        return (
            <div>
                <NavBar className='fixed-header' mode='dard'>{navList.find(v=>v.path===pathname)}</NavBar>
                <div style={{marginTop:45}}>
                    <Switch>
                        {navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}/>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data={navList} />
            </div>
        )
    }
}

export default Dashboard