import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const fetchCustomersStart = () => {
    return {
        type: actionTypes.FETCH_CUSTOMERS_START
    };
};
export const fetchCustomerNames = () => {
    return dispatch => {
        dispatch(fetchCustomersStart());
        axios.get('/appq9BLeoiuwulpnF/tblZgIlcviq1cCply?fields%5B%5D=Customer')
            .then(res => {
                const record = res.data;
                const customers = [...new Set(record.records.map(data => data.fields.Customer))];
                dispatch(fetchCustomersSuccess(customers));
            })
            .catch(err => {
                dispatch(fetchCustomersFail(err));
            });
    };
};

export const fetchCustomerDetailsByName = (custName) => {
    console.log(custName);
    axios.get('appq9BLeoiuwulpnF/tblZgIlcviq1cCply?sort%5B0%5D%5Bfield%5D=Customer&sort%5B0%5D%5Bdirection%5D=asc')
        .then(res => {
            const record = res.data;
            const custName = record.records.filter(data => data.fields.Customer === custName)
            console.log(custName);
            // dispatch(fetchCustomersSuccess(custName));
        })
        .catch(err => {
            // dispatch(fetchCustomersFail(err));
        });
};

export const fetchCustomersSuccess = (customers) => {
    return {
        type: actionTypes.FETCH_CUSTOMERS_SUCCESS,
        customers: customers
    };
};


export const fetchCustomersFail = (error) => {
    return {
        type: actionTypes.FETCH_CUSTOMERS_FAIL,
        error: error
    };
};