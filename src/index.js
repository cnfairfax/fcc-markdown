import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';

import preview from './reducers/preview';

import * as serviceWorker from './serviceWorker';

const app = combineReducers({preview});

const store = createStore(
    app,
    applyMiddleware(thunkMiddleware)
);

if(process.env.NODE_ENV === 'development') {
    window.store = store;
}

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
