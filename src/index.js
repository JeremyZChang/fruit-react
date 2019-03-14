import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom'
import App from './App';

import { counter } from "./index.redux";

import * as serviceWorker from './serviceWorker';

export const store = createStore(counter, applyMiddleware(thunk))

function oneB() {
    return <h2>BBBB</h2>
}

function oneC() {
    return <h3>CCCC</h3>
}

class Test extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return <h2>测试组件</h2>
    }
}

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to = '/'>OneA</Link>
                    </li>
                    <li>
                        <Link to = '/oneB'>OneB</Link>
                    </li>
                    <li>
                        <Link to = '/oneC'>OneC</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path = '/' exact component = {App}/>
                    <Route path = '/oneB' component = {oneB}/>
                    <Route path = '/oneC' component = {oneC}/>
                    <Route path = '/:location' component = {Test}/>
                </Switch>
                {/*<Redirect to = '/oneC'/>*/}

                {/*<App/>*/}
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
