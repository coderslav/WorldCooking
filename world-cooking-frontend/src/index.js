import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const defaultState = {
    categories: {},
    dishes: {}
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'RUN_FETCH_CATEGORIES':
            return {...state, categories: action.payload}
        case 'RUN_FETCH_DISHES':
            return {...state, dishes: action.payload}
        default:
            return state
    }

}
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
