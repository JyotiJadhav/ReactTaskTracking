import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.airtable.com/v0'
});

instance.defaults.headers.common['Authorization'] = 'Bearer '+ process.env.REACT_APP_AIRTABLE_API_KEY;

// instance.interceptors.request...

export default instance;