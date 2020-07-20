import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL = 'https://api.airtable.com/v0';
axios.defaults.headers.common['Authorization'] = 'Bearer '+ process.env.REACT_APP_AIRTABLE_API_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/json';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
