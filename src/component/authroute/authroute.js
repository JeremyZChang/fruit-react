import { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'


@withRouter
@connect(null,{ loadData })
class AuthRoute extends Component{
    componentDidMount() {
        const publicList = ['/login', '/register', '/']
        const pathname = this.props.location.pathname
        // 判断登陆或注册页面不需要判断登陆
        if (publicList.indexOf(pathname)>-1){
            return null
        }
        axios.get('/user/info').then(res=>{
            if(res.status===200){
                if(res.data.code===0){
                    console.log(res.data.data)
                    this.props.loadData(res.data.data)
                }else {
                    // 没有登陆跳转至登陆页
                    this.props.history.push('/login')
                }
            }
        })
        // 是否登陆
        // 现在的url地址 login是不需要跳转的
        //用户的type 身份是 。。
        // 用户是否完善信息（选择头像 个人简介）
    }
    render(){
        return null
    }
}

export default AuthRoute