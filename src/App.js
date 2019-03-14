import React, { Component } from 'react';
import OneA from '@/views/OneA'
import OneB from '@/views/OneB'
import {Button} from 'antd-mobile'
import { connect } from 'react-redux'
import {addNum, addNumAsync} from "./index.redux";

// const mapStatetoProps = (state) => {
//     console.log(state)
//     return {num:state}
// }
// const actionCreators = {addNum, addNumAsync}

// App = connect(mapStatetoProps, actionCreators)(App)
@connect(
    state => ({num:state}), //
    {addNum, addNumAsync}
)
// @connect(mapStatetoProps, actionCreators) // 使用重构 babel-plugin-transform-decorators-legacy
class App extends Component {
  render() {
    return (
        <div className="App">
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <OneA man = "AASSS"/>
            <Company have = "hahaha"/>

            <OneB org = '复仇者联盟有'/>
            <h2>老板，{this.props.org}有{this.props.num}人</h2>
            <Button type = "ghost" onClick={this.props.addNum}>add person1</Button>
            <Button type = "warning" onClick={this.props.addNumAsync}>add person wait2</Button>
        </div>
    );
  }
}

function Company(props) {
    return <h2>{props.have},jiayou</h2>
}


export default App;
