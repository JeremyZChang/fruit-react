import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login, getUserData } from './Auth.redux'
import { Button } from 'antd-mobile'

// 两个reducers 每个reducer都有一个state
// 合并reducer
@connect(state=>state.auth, { login, getUserData })
class Auth extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:{}
        }
    }
    componentDidMount() {
        this.props.getUserData()
    }

    render(){
        return (
            <div>
                <h2>我是{this.props.user}</h2>
                { this.props.isAuth? <Redirect to='/dashboard'/> : null}
                <h2>请登录</h2>
                <Button type='primary' onClick={this.props.login}>登陆</Button>
            </div>
        )
    }
}

export default Auth