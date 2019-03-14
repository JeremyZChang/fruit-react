import React, { Component } from 'react';
import {Button, List} from 'antd-mobile'


const Item = List.Item;
const Brief = Item.Brief;

class OneB extends Component{
    constructor(props) {
        super(props);
        this.state = {
            persons: ['A1', 'A2', 'A3']
        }
        console.log('Component Init 000000')
    }
    componentWillMount() {
        console.log('Component Will Mount 111111')
    }
    componentDidMount() {
        console.log('Component Did Mount 333333')
    }
    componentWillReceiveProps(nextProps) {
        console.log('Component Receive Props from Parent 444444')
        console.log(nextProps)
    }
    shouldComponentUpdate() {
        console.log('If should Update Component 555555')
        return true;
    }
    componentWillUpdate() {
        console.log('Component Will Update 666666')
    }
    componentDidUpdate() {
        console.log('Component Did Update 777777')
    }
    componentWillUnmount() {
        console.log('Component Will Unmount 888888')
    }


    addPerson = () => {
        console.log("Join In")
        this.setState({
            persons:[...this.state.persons,`B${Math.random()*10}`]
        })
    }
    addPersonAsync = () => {
    }

    render(){
        console.log('组件加载中ing 222222')
        return (
            <div>
                <h2>老板，{this.props.org}有人</h2>
                <Button type = "ghost" onClick={this.addPerson}>add person</Button>
                <Button type = "warning" onClick={this.addPersonAsync}>add person wait</Button>

                <List
                    renderHeader={()=>'人员列表'}
                >
                    {this.state.persons.map(v=>{
                        return (
                            <Item key={v}>
                                {v}<Brief>{`${v} 来啦`}</Brief>
                            </Item>
                        )
                    })}
                </List>


            </div>
        )
    }
}

export default OneB;