import React, { Component } from 'react';
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, Button, WhiteSpace, Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {register} from '../../redux/user.redux'

@connect(state=>state.user,{register})
class Register extends Component{
    constructor(props) {
        super(props);
        this.state= {
            user:'',
            pwd:'',
            repeatPwd:'',
            type: 'genius'
        }

        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key,val){
        // console.log(key, val)
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        console.log(this.state)
        this.props.register(this.state)
    }

    render(){
        const RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
                <Logo/>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                        <InputItem
                            onChange={v=>this.handleChange('user',v)}
                        >用户名</InputItem>
                        <InputItem
                            type='password'
                            onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                        <InputItem
                            type='password'
                            onChange={v=>this.handleChange('repeatPwd',v)}>确认密码</InputItem>
                        <WhiteSpace/>
                        <RadioItem
                            checked={this.state.type==='genius'}
                            onChange={v=>this.handleChange('type','genius')}
                        >牛人</RadioItem>
                        <RadioItem
                            checked={this.state.type==='boss'}
                            onChange={v=>this.handleChange('type','boss')}
                        >BOSS</RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.handleRegister}>确认注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register