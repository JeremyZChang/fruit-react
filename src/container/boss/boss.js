import React, { Component } from 'react';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chatuser.redux'
import UserCard from "../../component/userCard/userCard";

@connect(state=>state.chatUser, {getUserList})
class Boss extends Component{
    componentDidMount(){
        this.props.getUserList('genius')
    }

    render(){
        return (
            <UserCard userList={this.props.userList}/>
        )
    }
}

export default Boss