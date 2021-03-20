import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './styles/stylesheet.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './redux/actions'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './redux/reducer'
import {Provider} from 'react-redux'
import { CookiesProvider } from 'react-cookie';
function mapStateToProps(state){
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)
}

connect(mapStateToProps, mapDispatchToProps)(App)
const store = createStore(userReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
        <CookiesProvider>
        <App />
        </ CookiesProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"))
