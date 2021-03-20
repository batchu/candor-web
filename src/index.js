import React from 'react'
import ReactDom from 'react-dom'
import App from './Main'
import './styles/stylesheet.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"))
