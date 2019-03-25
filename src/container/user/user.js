import React, { Component } from 'react';
import { Result } from 'antd-mobile'
import { connect } from 'react-redux'
// import { getUserList } from '../../redux/chatuser.redux'

@connect(state=>state.user)
class User extends Component{
    componentDidMount(){
        this.props.getUserList('genius')
    }

    render(){
        const props = this.props
        return props.use?(
            <div>
                <Result
                  img={<img src={require(`../img/${this.props.avatar.png}`)} alt="" />}
                  title={props.user}
                  message={props.type=='boss'?props.company:null}
                />
                <p>用户中心</p>
            </div>
        ):null
    }
}

export default User