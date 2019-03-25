import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import reducer from './redux/reducer'
import AuthRoute from "./component/authroute/authroute";
import Login from './container/login/login'
import Register from "./container/register/register";
import App from './container/app/App'
import BossInfo from "./container/boss/bossInfo";
import GeniusInfo from "./container/genius/geniusInfo";
import Dashboard from "./component/dashboard/Dashboard";
import './config'
import './style/index.css'

import * as serviceWorker from './serviceWorker';


export const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute/>
                <Switch>
                    <Redirect path='/' exact to = '/login'/>
                    <Route path = '/login' exact component = {Login}/>
                    <Route path = '/register' exact component = {Register}/>
                    <Route path = '/geniusInfo' exact component = {GeniusInfo}/>
                    <Route path = '/bossInfo' exact component = {BossInfo}/>
                    <Route path = '/App' exact component = {App}/>
                    <Route component = {Dashboard}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
