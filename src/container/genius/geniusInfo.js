import React,{ Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelector from "../../component/avatar-selector/avatarSelector";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../redux/user.redux'

@connect(state=>state.user, {update})
class GeniusInfo extends Component{
    constructor(props) {
        super(props)
        this.state = {
            title:''
        }
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render() {
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div>
                {redirect&&redirect!==path ? <Redirect to={this.props.redirectTo}/> : null}
                <NavBar mode='dark'>牛人完善信息页</NavBar>
                <AvatarSelector
                    selectAvatar={(imgName)=>{
                        this.setState({
                            avatar:imgName
                        })
                    }}
                />
                <InputItem
                    onChange={(v)=>this.onChange('title',v)}
                >求职岗位</InputItem>
                <TextareaItem
                    onChange={(v)=>this.onChange('desc',v)}
                    rows={3}
                    autoHeight
                    title='个人详情'
                />

                <Button type='primary'
                        onClick={()=>{
                            this.props.update(this.state)
                        }}
                >保存</Button>
            </div>
        )
    }
}

export default GeniusInfo