import React, { Component } from 'react';
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, Button, WhiteSpace} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'
import fruitForm from '../../component/fruitForm/fruitForm'

// 高阶函数的使用
// function hello(){
//     console.log('hello')
// }
//
// function WrapperHello(fn) {
//     return function () {
//         console.log('before say hello')
//         fn()
//         console.log('after say hello')
//     }
// }
//
// hello = WrapperHello(hello)
// hello()

// 高阶组件
// class Hello extends Component{
//     render(){
//         return <h2>hello I love React</h2>
//     }
// }
//
// function WrapperHello(Comp) {
//     class WrapComp extends Component{
//         render(){
//            return (<div>
//                 <p>这是HOC</p>
//                 <Comp {...this.props}/>
//             </div>)
//         }
//     }
//     return WrapComp
// }
// Hello = WrapperHello(Hello)

// @高阶组件 属性代理
// function WrapperHello(Comp) {
//     class WrapComp extends Comp{
//         componentDidMount(){
//             console.log('新增生命周期')
//         }
//         render(){
//             return <Comp/>
//         }
//     }

//     class WrapComp extends Component{
//         render(){
//            return (<div>
//                 <p>这是HOC</p>
//                 <Comp name='text' {...this.props}/>
//             </div>)
//         }
//     }
//     return WrapComp
// }

// @WrapperHello
// class Hello extends Component{
//     render(){
//         return <h2>hello I love React</h2>
//     }
// }

@connect(state=>state.user, {login})
@fruitForm
class Login extends Component{
    constructor(props) {
        super(props);
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin(){
        this.props.login(this.props.state)
    }
    register(){
        this.props.history.push('/register')
    }
    render(){
        return (
            <div>
                {this.props.redirectTo&&this.props.redirectTo!=='/login'?<Redirect to={this.props.redirectTo} />:null}
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.props.handleChange('user',v)}
                        >用户</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            onChange={v=>this.props.handleChange('pwd',v)}
                            type='password'
                        >密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button onClick={this.handleLogin} type='primary'>登陆</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login