import React,{ Component } from 'react'
import axios from 'axios'
import { Card, WingBlank } from 'antd-mobile'

class Boss extends Component{

    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        axios.get('/user/list?type=genius').then(res=>{
            if(res.data.code==0){
                this.setState({data:res.data.data})
            }
        })
    }

    render() {
        const Header = Card.Header
        const Body = Card.Body
        return (
            <WingBlank>
                {this.state.data.map(v=>(
                    v.avatar?(<Card>
                        <Header
                            title={v.user}
                            thumb={require(`../img/${v.avatar}.png`)}
                            extra={<span>{v.title}</span>}
                        />
                        <Body>{v.desc}</Body>
                    </Card>):null
                ))}
            </WingBlank>
        )
    }
}

export default BossInfo