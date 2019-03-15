import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import reducer from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'

import * as serviceWorker from './serviceWorker';

export const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path = '/login' exact component = {Auth}/>
                <Route path = '/dashboard' component = {Dashboard}/>
                <Redirect to = '/dashboard'/>
            </Switch>

        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
