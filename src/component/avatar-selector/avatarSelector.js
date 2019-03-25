import React,{ Component } from 'react'
import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends Component{
    static propTypes = {
        selectAvatar: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state={
            icon:'',
            text:''
        }
    }

    render() {
        const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
                            .split(',')
                            .map(v=>({
                                icon:require(`../../img/avatar/${v}.png`),
                                text:v
                            }))

        const gridHeader = this.state.icon
            ? (<div>
                <span>已选头像</span>
                <img src={this.state.icon} alt="" />
              </div>)
            : '请选择头像'

        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid data={avatarList}
                      columnNum={5}
                      onClick={elm=>{
                          this.setState(elm)
                          this.props.selectAvatar(elm.text)
                      }}
                    />
                </List>
            </div>
        )
    }

}

export default AvatarSelector