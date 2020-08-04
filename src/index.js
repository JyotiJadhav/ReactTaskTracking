import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../src/store/reducers/customer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    customer: reducer
});


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

axios.defaults.baseURL = 'https://api.airtable.com/v0';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.REACT_APP_AIRTABLE_API_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/json';
const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

