import React, { Component } from 'react';
import {Button} from 'antd-mobile'

class OneA extends Component{
    constructor(props) {
        super(props);
        this.state = { // props是外部组件传值的域，state是组件内部定义定义的域
            solders: ['zhangsa', 'lisi', 'xiaoming']
        }
        // this.addMan = this.addMan.bind(this) // 第一种构造函数中绑定this
    }

    addMan = () => { // 第三种是定义函数时使用箭头函数
        console.log("I come")
        this.setState({ // 单一写会报错，因为找不到this 三种解决办法
            solders:[...this.state.solders,`xiaofeng ${Math.random()}`]
        })
    }

    render(){
        // const boss = 'ADDD'
        return (
            <div>
                <h2>我的，{this.props.man}</h2>
                <Button type = "primary" onClick={this.addMan}>add person</Button>
                {/*第二种事件中使用箭头函数 <button onClick={() => this.addMan()}>add person</button>*/}
                <ul>
                    {this.state.solders.map(value => {
                        return <li key={value}>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default OneA;