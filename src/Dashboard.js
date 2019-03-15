import React, { Component } from 'react';
import { Route, Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import { logout } from './Auth.redux'
import App from "./App";
import OneA from "./views/OneA";
import OneB from "./views/OneB";

@connect(state=>state.auth,{logout})
class Dashboard extends Component{
    // constructor(props) {
    //     super(props);
    // }

    render(){
        const redirectToLogin = <Redirect to = '/login'/>
        const app = (
            <div>
                <h2>Dashboard page</h2>
                <Button type = "warning" onClick={this.props.logout}>注销</Button>
                <ul>
                    <li>
                        <Link to = '/dashboard/App'>App</Link>
                    </li>
                    <li>
                        <Link to = '/dashboard/oneA'>OneA</Link>
                    </li>
                    <li>
                        <Link to = '/dashboard/oneB?org=10'>OneB</Link>
                    </li>
                </ul>
                <Route path = '/dashboard/App' exact component = {App}/>
                <Route path = '/dashboard/oneA' exact component = {OneA}/>
                <Route path = '/dashboard/oneB' exact component = {OneB}/>
            </div>
        )
        return this.props.isAuth ? app : redirectToLogin
    }
}

export default Dashboard