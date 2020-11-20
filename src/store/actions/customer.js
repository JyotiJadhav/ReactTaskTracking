import * as actionTypes from './actionTypes';
import axios from '../../axios';
import { compose } from 'redux';


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
    return dispatch => {
        dispatch(fetchCustomersStart());
        axios.get('appq9BLeoiuwulpnF/tblZgIlcviq1cCply?sort%5B0%5D%5Bfield%5D=Customer&sort%5B0%5D%5Bdirection%5D=asc')
            .then(res => {
                const record = res.data;
                const custDetails = record.records.filter(data => data.fields.Customer === custName)
                const carrier = [...new Set(custDetails.map(data => data.fields.Carrier))].length;
                const tasks = custDetails.length;
                const Tasks = [...new Set(custDetails.map(data => data.fields).map(e => e.Responsible))];
                var devTaskCount = getDevTasks(Tasks);
                console.log(custDetails);
                dispatch(fetchCustomersDetailsByNameSuccess(custDetails));
            })
            .catch(err => {
                dispatch(fetchCustomersDetailsByNameFail(err));

            });
    };
};

function getDevTasks(data) {
    var devCount = 0;
    var otherCount = 0;
    var incompleteOtherCount = 0;
    var incompleteDevCount = 0;
    var counts = [];
    for (let i = 0, len = data.length; i < len; i++) {
        for (let j = 0, len = data[i].length; j < len; j++) {
            data[i][j].email === "jyoti.jadhav@centiro.com" ? devCount++ : otherCount++;
        }
    }
    counts.push(devCount, otherCount);
    return counts;
}
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

export const fetchCustomersDetailsByNameSuccess = (customers) => {
    return {
        type: actionTypes.GET_CUSTOMER_DETAILS_BY_NAME,
        customers: customers
    };
};


export const fetchCustomersDetailsByNameFail = (error) => {
    return {
        type: actionTypes.FETCH_CUSTOMERS_FAIL,
        error: error
    };
};