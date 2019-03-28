import React, { Component } from 'react';
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import { connect } from 'react-redux'
import browserCookies from 'browser-cookies'
import { logoutSubmit } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(state=>state.user, {logoutSubmit})
class User extends Component{

    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout(){
        const alert = Modal.alert

        alert('注销', '确认退出登陆？', [
            {text: '取消', onPress:()=>console.log('cancel')},
            {text: '确定', onPress:()=>{
                browserCookies.erase('userId')
                this.props.logoutSubmit()
            }}
        ])
        // browserCookies.erase('userId')
        // window.location.href = window.location.href
    }

    render(){
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        return props.use?(
            <div>
                <Result
                  img={<img src={require(`../img/${props.avatar.png}`)} alt="" />}
                  title={props.user}
                  message={props.type=='boss'?props.company:null}
                />
                <List renderHeader={()=>'简介'}>
                    <Item>
                        {props.title}
                        {props.desc.split('\n').map(v=>
                            <Brief key={v}>{v}</Brief>
                        )}
                        {props.money?<Brief>薪资:{props.money}</Brief>:null}
                    </Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Item onClick={this.logout}>退出登录</Item>
                </List>
            </div>
        ):<Redirect to={props.redirectTo} />
    }
}

export default User